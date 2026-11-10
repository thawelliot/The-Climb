(() => {
  const PROMPTS_PER_GAME = 7;
  const SECONDS = 30;
  const FIRST_GAME = new Date(2026, 10, 8); // Game #1 is 8 Nov 2026 (local time)

  const LEVELS = [
    { name: "Sunday League", min: 0 },
    { name: "Non-League", min: 80 },
    { name: "The EFL", min: 200 },
    { name: "The Premier League", min: 320 },
    { name: "European Cup Final", min: 450 },
  ];

  const $ = (id) => document.getElementById(id);
  const screens = ["startScreen", "playScreen", "revealScreen", "resultsScreen"];

  // ---------- storage (optional: the game works without it) ----------

  const store = {
    get(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
    set(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* private mode */ } },
  };

  // Every daily game this device has played, keyed by game number:
  // { score, done, open, results: [{ q, a, p, pct }] }.
  // `open` is true while a prompt is on screen, so leaving mid-prompt
  // can't be used to see a prompt and then start it again.
  const HISTORY_KEY = "climb-history";
  const history = store.get(HISTORY_KEY) || { v: 1, games: {} };
  const saveHistory = () => store.set(HISTORY_KEY, history);

  // ---------- daily selection ----------

  function dayIndex(now = new Date()) {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((today - FIRST_GAME) / 86400000);
  }

  function seeded(seed) {
    return () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };
  }

  // The daily schedule. Each prompt is used in exactly one daily game, ever.
  // The first 105 prompts keep the fixed shuffle they launched with, so games
  // already played never change; prompts added later to the END of
  // questions.js are scheduled after them, in file order.
  const LAUNCH_BANK = 105;
  const ORDER = (() => {
    const idx = Array.from({ length: Math.min(LAUNCH_BANK, QUESTIONS.length) }, (_, i) => i);
    const rand = seeded(2026);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    for (let i = LAUNCH_BANK; i < QUESTIONS.length; i++) idx.push(i);
    return idx;
  })();

  // Daily games that have a full set of fresh prompts (game numbers 1…N).
  const DAILY_GAMES = Math.floor(ORDER.length / PROMPTS_PER_GAME);

  // null once the bank has run out of fresh prompts.
  function dailyQuestions(day) {
    if (day < 0 || day >= DAILY_GAMES) return null;
    const start = day * PROMPTS_PER_GAME;
    return ORDER.slice(start, start + PROMPTS_PER_GAME).map((i) => QUESTIONS[i]);
  }

  // Practice draws from the whole bank, including prompts already used in
  // past daily games (the only place those can appear again).
  function practiceQuestions() {
    const idx = QUESTIONS.map((_, i) => i).sort(() => Math.random() - 0.5);
    return idx.slice(0, PROMPTS_PER_GAME).map((i) => QUESTIONS[i]);
  }

  // ---------- answer matching ----------

  const STOP = new Set(["fc", "afc", "the"]);
  function norm(s) {
    return s
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/ø/g, "o").replace(/&/g, " and ")
      .replace(/['’.]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .split(" ").filter((w) => w && !STOP.has(w)).join(" ")
      .replace(/\butd\b/g, "united");
  }

  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }

  function allowedTypos(len) {
    if (len <= 4) return 0;
    if (len <= 7) return 1;
    return 2;
  }

  // Returns { ans, exact } or null. Exact covers names and aliases typed
  // correctly (ignoring case, accents and punctuation); anything matched
  // through a typo is not exact, so the player is asked to confirm it.
  function match(input, q) {
    const guess = norm(input);
    if (guess.length < 2) return null;
    const compact = guess.replace(/ /g, "");
    let best = null, bestDist = Infinity;
    for (const ans of q.answers) {
      const [name, , ...aliases] = ans;
      for (const form of [name, ...aliases]) {
        const f = norm(form);
        const fc = f.replace(/ /g, "");
        if (f === guess || fc === compact) return { ans, exact: true };
        if (compact.length < 3) continue;
        const d = Math.min(lev(guess, f), lev(compact, fc));
        if (d <= allowedTypos(fc.length) && d < bestDist) { best = ans; bestDist = d; }
      }
    }
    return best && { ans: best, exact: false };
  }

  // ---------- estimated % of players picking each answer ----------

  // Derived from the rarity points: common answers get far more weight,
  // and each prompt's answers add up to 100% of players who answered.
  const pctCache = new Map();
  function pctOf(q, ans) {
    if (!pctCache.has(q)) {
      const w = q.answers.map((a) => Math.pow(101 - a[1], 3));
      const sum = w.reduce((x, y) => x + y, 0);
      pctCache.set(q, new Map(q.answers.map((a, i) => [a, (100 * w[i]) / sum])));
    }
    return pctCache.get(q).get(ans);
  }
  const fmtPct = (p) => (p < 1 ? "<1%" : `${Math.round(p)}%`);
  const approxPct = (p) => (p < 1 ? "under 1%" : `~${Math.round(p)}%`);

  // ---------- levels & backdrop ----------

  function levelFor(score) {
    let idx = 0;
    LEVELS.forEach((l, i) => { if (score >= l.min) idx = i; });
    return idx;
  }

  let scenes = [];
  function setScene(i) {
    scenes.forEach((el, k) => el.classList.toggle("active", k === i));
  }

  let ladderScore = 0;
  function renderLadder(score) {
    ladderScore = score;
    const lvl = levelFor(score);
    const ladder = $("ladder");
    const rungs = LEVELS.map((l, i) => {
      const cls = ["rung", i <= lvl ? "reached" : "", i === lvl ? "current" : "", i === LEVELS.length - 1 ? "top" : ""].join(" ");
      return `<div class="${cls}" title="${l.name}">${l.name}<small>${l.min}</small></div>`;
    }).reverse().join("");
    const pct = Math.min(100, (score / LEVELS[LEVELS.length - 1].min) * 100);
    ladder.innerHTML = `${rungs}<div class="ladder-bar"><div class="ladder-fill" style="width:${pct}%"></div></div><span class="ladder-label">${LEVELS[lvl].name}</span>`;
    // Mobile shows rungs bottom-to-top as left-to-right.
    if (window.matchMedia("(max-width: 1100px)").matches) {
      const els = [...ladder.querySelectorAll(".rung")].reverse();
      els.forEach((el) => ladder.insertBefore(el, ladder.querySelector(".ladder-bar")));
    }
  }

  // ---------- UI helpers ----------

  function show(id) {
    screens.forEach((s) => ($(s).hidden = s !== id));
  }

  let toastTimer;
  function toast(text, gold) {
    const t = $("toast");
    t.textContent = text;
    t.classList.toggle("gold", !!gold);
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  // How rare an answer is. `at` is where the label sits on the rarity meter (%).
  const TIERS = [
    { max: 15, name: "Tap-in", at: 0 },
    { max: 35, name: "Routine finish", at: 25 },
    { max: 60, name: "Clinical finish", at: 47.5 },
    { max: 85, name: "Screamer", at: 72.5 },
    { max: 100, name: "Worldie", at: 100 },
  ];
  const tierIndex = (pts) => TIERS.findIndex((t) => pts <= t.max);
  const WORLDIE = TIERS[3].max + 1;

  function emoji(pts) {
    if (pts === 0) return "❌";
    return ["🟨", "🟨", "🟩", "⭐", "🔥"][tierIndex(pts)];
  }

  function animateNumber(el, from, to, ms = 700, alive = () => true) {
    const t0 = performance.now();
    const step = (t) => {
      if (!alive()) return;
      const k = Math.min(1, (t - t0) / ms);
      el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- stats ----------

  function computeStats() {
    const done = Object.entries(history.games)
      .filter(([, g]) => g.done)
      .map(([n, g]) => ({ n: +n, ...g }));
    const played = new Set(done.map((g) => g.n));

    // Current streak counts back from today, or from yesterday if today
    // hasn't been played yet (so the streak isn't "lost" until midnight).
    // Days with no daily game (the bank ran out) don't break it.
    let current = 0;
    const lastGame = Math.min(gameNo, DAILY_GAMES);
    for (let n = played.has(lastGame) ? lastGame : lastGame - 1; played.has(n); n--) current++;
    let best = 0, run = 0;
    [...played].sort((a, b) => a - b).forEach((n, i, arr) => {
      run = i && n === arr[i - 1] + 1 ? run + 1 : 1;
      best = Math.max(best, run);
    });

    const results = done.flatMap((g) => g.results);
    const answered = results.filter((r) => r.a);
    const rarest = answered.filter((r) => r.pct != null).sort((a, b) => a.pct - b.pct)[0] || null;
    const levels = LEVELS.map(() => 0);
    done.forEach((g) => levels[levelFor(g.score)]++);

    return {
      games: done.length,
      current,
      best,
      average: done.length ? Math.round(done.reduce((s, g) => s + g.score, 0) / done.length) : 0,
      top: done.length ? Math.max(...done.map((g) => g.score)) : 0,
      worldies: answered.filter((r) => r.p >= WORLDIE).length,
      prompts: results.length,
      answered: answered.length,
      timeouts: results.length - answered.length,
      rarest,
      levels,
      todayLevel: history.games[gameNo]?.done ? levelFor(history.games[gameNo].score) : -1,
    };
  }

  function renderStreak() {
    const { current } = computeStats();
    const chip = $("streakChip");
    chip.hidden = current === 0;
    chip.querySelector("span").textContent = current;
    chip.title = `${current}-day streak`;
  }

  function renderStats() {
    const s = computeStats();
    const body = $("statsBody");
    if (!s.games) {
      body.innerHTML = `<p class="stats-empty">Finish today's game to start your stats. Your streak, average and best answers will show up here.</p>`;
      return;
    }
    const tile = (v, label) => `<div class="stat"><b>${v}</b><span>${label}</span></div>`;
    const max = Math.max(...s.levels, 1);
    const bars = LEVELS.map((l, i) => `
      <div class="dist-row${i === s.todayLevel ? " today" : ""}${i === LEVELS.length - 1 ? " top" : ""}">
        <span class="dist-name">${l.name}</span>
        <div class="dist-bar"><div style="width:${Math.max(6, (s.levels[i] / max) * 100)}%">${s.levels[i]}</div></div>
      </div>`).reverse().join("");
    const rate = s.prompts ? Math.round((s.answered / s.prompts) * 100) : 0;
    body.innerHTML = `
      <div class="stat-grid">
        ${tile(s.games, "Played")}${tile(s.current, "Current streak")}${tile(s.best, "Best streak")}
        ${tile(s.average, "Average score")}${tile(s.top, "Best score")}${tile(s.worldies, "Worldies")}
      </div>
      <h3>Where you finished</h3>
      <div class="dist">${bars}</div>
      <h3>The details</h3>
      <ul class="facts">
        <li><span>Answer rate</span><b>${rate}%</b><small>${s.answered} of ${s.prompts} prompts</small></li>
        <li><span>Time-outs</span><b>${s.timeouts}</b></li>
        ${s.rarest ? `<li><span>Rarest answer</span><b>${esc(s.rarest.a)}</b><small>${approxPct(s.rarest.pct)} of players ·${esc(s.rarest.q)}</small></li>` : ""}
      </ul>`;
  }

  function openStats() {
    renderStats();
    $("statsDialog").showModal();
  }

  // ---------- game ----------

  const today = dayIndex();
  const gameNo = today + 1;

  let game = null;
  let timerRaf = 0;

  // ---------- player count ----------

  // An anonymous tally of devices that have started each daily game, kept by
  // a free counter service (Abacus). Nothing about the player is sent. If
  // the service can't be reached, the count just doesn't show.
  const LIVE = location.protocol !== "file:" && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  const COUNT_URL = "https://abacus.jasoncameron.dev";
  const COUNT_SPACE = LIVE ? "theclimbfootball" : "theclimbfootball-dev"; // local testing never touches the live tally
  const MIN_PLAYERS_SHOWN = LIVE ? 25 : 1; // small numbers stay hidden on the live site

  async function playerCount(action) {
    try {
      const res = await fetch(`${COUNT_URL}/${action}/${COUNT_SPACE}/game-${gameNo}`);
      return res.ok ? (await res.json()).value : null;
    } catch {
      return null;
    }
  }

  // Counts this device once for today's game (when it starts it), then
  // shows the total. A failed count is retried the next time the page loads.
  let countBusy = false;
  async function refreshPlayerCount() {
    if (countBusy) return;
    countBusy = true;
    const rec = history.games[gameNo];
    const first = rec && !rec.counted;
    const n = await playerCount(first ? "hit" : "get");
    if (first && n != null) {
      rec.counted = true;
      saveHistory();
    }
    countBusy = false;
    const show = typeof n === "number" && n >= MIN_PLAYERS_SHOWN;
    document.querySelectorAll(".player-count").forEach((el) => {
      el.hidden = !show;
      if (show) el.textContent = `${n.toLocaleString("en-GB")} played today`;
    });
  }

  // Daily games write every step to history; practice rounds don't.
  function record() { return game.mode === "daily" ? history.games[gameNo] : null; }

  function newGame(mode) {
    const rec = mode === "daily" ? (history.games[gameNo] ||= { score: 0, done: false, open: false, results: [] }) : null;
    game = {
      mode,
      qs: mode === "daily" ? dailyQuestions(today) : practiceQuestions(),
      score: rec ? rec.score : 0,
      results: rec ? rec.results : [],
    };
    // Left mid-prompt last time: that prompt counts as a miss.
    if (rec && rec.open) {
      const q = game.qs[rec.results.length];
      rec.results.push({ q: q.prompt, a: null, p: 0 });
      rec.open = false;
      toast(`Prompt ${rec.results.length} counted as a miss — you left mid-prompt`);
    }
    if (rec) {
      saveHistory();
      refreshPlayerCount();
    }
    game.i = game.results.length;
    $("scorePill").hidden = false;
    $("scoreNum").textContent = game.score;
    setScene(levelFor(game.score));
    renderLadder(game.score);
    if (game.i >= game.qs.length) endGame();
    else askQuestion();
  }

  function askQuestion() {
    const q = game.qs[game.i];
    const rec = record();
    if (rec) { rec.open = true; saveHistory(); }
    show("playScreen");
    $("qCount").textContent = `${game.mode === "practice" ? "Practice · " : ""}Prompt ${game.i + 1} of ${game.qs.length}`;
    $("promptText").textContent = q.prompt;
    $("feedback").textContent = "";
    $("feedback").className = "feedback";
    $("misses").innerHTML = "";
    const input = $("answerInput");
    input.value = "";
    input.disabled = false;
    input.focus();
    startTimer();
  }

  function startTimer() {
    const bar = $("timerBar"), num = $("timerNum"), wrap = $("timer");
    const C = 2 * Math.PI * 19;
    const end = performance.now() + SECONDS * 1000;
    wrap.classList.remove("warn");
    cancelAnimationFrame(timerRaf);
    const tick = (t) => {
      const left = Math.max(0, end - t);
      bar.style.strokeDashoffset = String(C * (1 - left / (SECONDS * 1000)));
      num.textContent = Math.ceil(left / 1000);
      wrap.classList.toggle("warn", left <= 5000);
      if (left <= 0) return finishQuestion(null);
      timerRaf = requestAnimationFrame(tick);
    };
    timerRaf = requestAnimationFrame(tick);
  }

  // A guess that only matched through a typo waits here until the player
  // confirms it. The clock keeps running while they decide.
  let pending = null;

  function submit(e) {
    e.preventDefault();
    const input = $("answerInput");
    const text = input.value.trim();
    if (!text || input.disabled) return;
    // Enter again on the same text means "yes".
    if (pending && text === pending.text) return confirmGuess(true);
    const res = match(text, game.qs[game.i]);
    if (res && res.exact) return finishQuestion(res.ans);
    if (res) return askDidYouMean(res.ans, text);
    wrongGuess(text, "Not on our list — try another");
  }

  function wrongGuess(text, message) {
    const input = $("answerInput");
    input.classList.remove("shake");
    void input.offsetWidth;
    input.classList.add("shake");
    $("feedback").textContent = message;
    $("feedback").className = "feedback bad";
    const chip = document.createElement("span");
    chip.textContent = text;
    $("misses").appendChild(chip);
    input.value = "";
    input.focus();
  }

  function askDidYouMean(ans, text) {
    pending = { ans, text };
    $("dymName").textContent = ans[0];
    $("dym").hidden = false;
    $("feedback").textContent = "";
  }

  function hideDidYouMean() {
    pending = null;
    $("dym").hidden = true;
  }

  function confirmGuess(yes) {
    if (!pending) return;
    const { ans, text } = pending;
    hideDidYouMean();
    if (yes) finishQuestion(ans);
    else wrongGuess(text, "No problem — try another");
  }

  function finishQuestion(hit) {
    hideDidYouMean();
    cancelAnimationFrame(timerRaf);
    $("answerInput").disabled = true;
    const q = game.qs[game.i];
    const pts = hit ? hit[1] : 0;
    const pct = hit ? pctOf(q, hit) : null;
    const before = game.score;
    const prevLevel = levelFor(before);
    game.score += pts;
    game.results.push({ q: q.prompt, a: hit ? hit[0] : null, p: pts, pct });
    const rec = record();
    if (rec) {
      rec.score = game.score;
      rec.open = false;
      saveHistory();
    }

    // Reveal card.
    show("revealScreen");
    $("revealCount").textContent = `Prompt ${game.i + 1} of ${game.qs.length}`;
    $("revealPrompt").textContent = q.prompt;
    $("revealHit").className = `reveal-hit${hit ? "" : " miss"}${pts >= WORLDIE ? " elite" : ""}`;
    $("revealWho").textContent = hit ? hit[0] : "Time's up";
    $("revealTier").textContent = hit ? TIERS[tierIndex(pts)].name : "Into Row Z";
    $("revealPick").textContent = hit ? `Picked by ${approxPct(pct)} of players` : "";
    playMeter(pts, !hit);
    const sorted = [...q.answers].sort((a, b) => a[1] - b[1]);
    // Top 3 each way, including the player's own answer (marked "You").
    // Short lists are split so no answer shows up in both.
    const li = (a) => `<li${a === hit ? ' class="yours"' : ""}><span>${esc(a[0])}${a === hit ? "<em>You</em>" : ""}</span><i>${fmtPct(pctOf(q, a))}</i><b>${a[1]}</b></li>`;
    $("commonList").innerHTML = sorted.slice(0, 3).map(li).join("");
    $("rareList").innerHTML = sorted.slice(Math.max(3, sorted.length - 3)).reverse().map(li).join("");
    const last = game.i === game.qs.length - 1;
    $("nextBtn").textContent = last ? "See full time" : "Next prompt";
    $("nextBtn").focus();

    // Climb.
    animateNumber($("scoreNum"), before, game.score);
    const pill = $("scorePill");
    pill.classList.remove("bump");
    void pill.offsetWidth;
    pill.classList.add("bump");
    renderLadder(game.score);
    const lvl = levelFor(game.score);
    if (lvl > prevLevel) {
      setScene(lvl);
      const top = lvl === LEVELS.length - 1;
      toast(top ? "🏆 Welcome to the European Cup Final!" : `⬆ Promoted to ${LEVELS[lvl].name}!`, top);
    }
  }

  // The ball rolls along the rarity meter to where this answer sits, then
  // the tier name stamps in. Worldies get a burst of gold sparks.
  let landTimer, meterRun = 0;
  function playMeter(pts, missed) {
    const meter = $("meter"), box = $("revealHit");
    clearTimeout(landTimer);
    // Anything still animating from the previous reveal stops here.
    const run = ++meterRun;
    const alive = () => run === meterRun;
    const idx = missed ? -1 : tierIndex(pts);
    meter.className = `meter${missed ? " miss" : ""}`;
    meter.style.setProperty("--p", 0);
    meter.innerHTML = `<div class="meter-track"><div class="meter-ball" aria-hidden="true">⚽</div></div>
      <div class="meter-scale">${TIERS.map((t) => `<span style="left:${t.at}%">${t.name}</span>`).join("")}</div>`;
    $("revealPts").textContent = "0";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (missed || !alive()) return;
      meter.style.setProperty("--p", pts / 100);
      meter.classList.add("go");
      animateNumber($("revealPts"), 0, pts, 1200, alive);
    }));
    landTimer = setTimeout(() => {
      box.classList.add("landed");
      if (idx < 0) return;
      const label = meter.querySelectorAll(".meter-scale span")[idx];
      label.classList.add("on");
      if (pts >= WORLDIE) {
        label.classList.add("gold");
        const track = meter.querySelector(".meter-track");
        for (let k = 0; k < 16; k++) {
          const a = (k / 16) * Math.PI * 2, d = 26 + Math.random() * 22;
          const sp = document.createElement("span");
          sp.className = "spark";
          sp.style.left = `${pts}%`;
          sp.style.setProperty("--sx", `${Math.cos(a) * d}px`);
          sp.style.setProperty("--sy", `${Math.sin(a) * d}px`);
          track.appendChild(sp);
        }
      }
    }, missed ? 400 : 1250);
  }

  function next() {
    game.i++;
    if (game.i < game.qs.length) askQuestion();
    else endGame();
  }

  function endGame() {
    const rec = record();
    if (rec) {
      rec.done = true;
      saveHistory();
      renderStreak();
    }
    showResults({ score: game.score, results: game.results }, game.mode);
  }

  function shareText(summary) {
    const lvl = LEVELS[levelFor(summary.score)];
    const { current } = computeStats();
    return [
      `THE CLIMB #${gameNo} ⚽`,
      `${lvl.name} — ${summary.score} pts`,
      summary.results.map((r) => emoji(r.p)).join(""),
      current > 1 ? `🔥 ${current}-day streak` : "",
    ].filter(Boolean).join("\n");
  }

  function showResults(summary, mode) {
    show("resultsScreen");
    $("scorePill").hidden = false;
    $("scoreNum").textContent = summary.score;
    const lvl = levelFor(summary.score);
    setScene(lvl);
    renderLadder(summary.score);
    $("resultsLabel").textContent = mode === "practice" ? "Practice round · full time" : `Game #${gameNo} · full time`;
    const fl = $("finalLevel");
    fl.textContent = LEVELS[lvl].name;
    fl.classList.toggle("top", lvl === LEVELS.length - 1);
    animateNumber($("finalScore"), 0, summary.score, 1000);
    // Best answer of the game: most points, rarer pick wins a tie.
    const best = summary.results.filter((r) => r.a)
      .sort((x, y) => y.p - x.p || (x.pct ?? 100) - (y.pct ?? 100))[0] || null;
    const ba = $("bestAnswer");
    ba.hidden = !best;
    if (best) {
      const elite = best.p >= WORLDIE;
      ba.className = `best-answer${elite ? " elite" : ""}`;
      ba.innerHTML = `
        <div class="best-label">⭐ Your best answer</div>
        <div class="best-main">
          <div>
            <div class="best-name">${esc(best.a)}</div>
            <span class="best-tier">${TIERS[tierIndex(best.p)].name}</span>
            ${best.pct != null ? `<span class="best-pct">Picked by ${approxPct(best.pct)} of players</span>` : ""}
          </div>
          <div class="best-pts">+${best.p}</div>
        </div>
        <div class="best-q">${esc(best.q)}</div>`;
    }
    $("breakdown").innerHTML = summary.results.map((r) => `
      <li${r === best ? ' class="best"' : ""}><span>${emoji(r.p)}</span>
        <span>${r.a ? esc(r.a) : "—"}<span class="q">${r.pct != null ? `${approxPct(r.pct)} picked · ` : ""}${esc(r.q)}</span></span>
        <span class="p${r.p ? "" : " zero"}">${r.p}</span></li>`).join("");
    $("shareBtn").hidden = mode === "practice";
    $("shareBtn").onclick = () => copy(shareText(summary));
    const s = computeStats();
    $("miniStats").innerHTML = s.games ? `
      <div><b>${s.games}</b><span>Played</span></div>
      <div><b>${s.current}</b><span>Streak</span></div>
      <div><b>${s.average}</b><span>Average</span></div>` : "";
    startCountdown();
  }

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast("Result copied — paste it anywhere");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      toast(ok ? "Result copied — paste it anywhere" : "Couldn't copy — try again");
    }
  }

  let countdown;
  function startCountdown() {
    clearInterval(countdown);
    const el = $("nextGame");
    const tick = () => {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const s = Math.max(0, Math.floor((midnight - now) / 1000));
      const hh = String(Math.floor(s / 3600)).padStart(2, "0");
      const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const ss = String(s % 60).padStart(2, "0");
      el.textContent = `Next daily game in ${hh}:${mm}:${ss}`;
      if (s === 0) location.reload();
    };
    tick();
    countdown = setInterval(tick, 1000);
  }

  // ---------- boot ----------

  // Earlier versions saved each finished day under its own key; fold those in.
  function migrateOldSaves() {
    for (let n = 1; n <= gameNo; n++) {
      const old = store.get(`climb-game-${n}`);
      if (!old || history.games[n]) continue;
      history.games[n] = {
        score: old.score, done: true, open: false,
        results: old.results.map((r) => ({ q: r.prompt, a: r.answer, p: r.pts })),
      };
      try { localStorage.removeItem(`climb-game-${n}`); } catch { /* ignore */ }
    }
    saveHistory();
  }

  function boot() {
    const bd = $("backdrop");
    bd.innerHTML = Scenes.build().join("");
    scenes = [...bd.querySelectorAll(".scene")];
    setScene(0);
    migrateOldSaves();

    $("gameLabel").textContent = `Game #${gameNo}`;
    // Start-screen pyramid: narrowest at the top, lighting up from the bottom.
    $("pyramid").innerHTML = LEVELS.map((l, i) => {
      const top = i === LEVELS.length - 1;
      return `<div class="pyr${top ? " top" : ""}" style="--w:${100 - i * 11}%;--d:${(i * 0.7).toFixed(1)}s">${top ? "🏆 " : ""}${l.name}<span>${l.min}+ pts</span></div>`;
    }).reverse().join("");
    renderLadder(0);
    renderStreak();

    $("startBtn").onclick = () => newGame("daily");
    $("practiceBtn").onclick = () => newGame("practice");
    $("startPracticeBtn").onclick = () => newGame("practice");
    $("answerForm").addEventListener("submit", submit);
    $("dymYes").onclick = () => confirmGuess(true);
    $("dymNo").onclick = () => confirmGuess(false);
    // Editing the guess dismisses the question; Escape answers "no".
    $("answerInput").addEventListener("input", () => {
      if (pending && $("answerInput").value.trim() !== pending.text) hideDidYouMean();
    });
    $("answerInput").addEventListener("keydown", (e) => {
      if (e.key === "Escape" && pending) confirmGuess(false);
    });
    $("nextBtn").onclick = next;
    $("helpBtn").onclick = () => $("helpDialog").showModal();
    $("statsBtn").onclick = openStats;
    $("streakChip").onclick = openStats;
    $("resultsStatsBtn").onclick = openStats;

    window.addEventListener("resize", () => renderLadder(ladderScore));

    // One daily game per day: finished → results; started → resume.
    const rec = history.games[gameNo];
    if (rec && rec.done) {
      showResults({ score: rec.score, results: rec.results }, "daily");
    } else if (!dailyQuestions(today)) {
      // Every prompt has had its daily outing: nothing fresh to play.
      show("startScreen");
      $("startBtn").textContent = "No new daily game today";
      $("startBtn").disabled = true;
      $("resumeNote").hidden = false;
      $("resumeNote").textContent = "We've used every fresh prompt for now. New ones are on the way, and your streak is safe until they arrive. Fancy a practice round in the meantime?";
      $("startPracticeBtn").hidden = false;
    } else {
      show("startScreen");
      if (rec) {
        $("startBtn").textContent = `Continue game #${gameNo}`;
        $("resumeNote").hidden = false;
        $("resumeNote").textContent = rec.open
          ? `You left in the middle of prompt ${rec.results.length + 1}, so that one counts as a miss. ${rec.results.length + 1} of 7 done.`
          : `You've played ${rec.results.length} of 7 prompts. Pick up where you left off.`;
      }
    }

    if (dailyQuestions(today)) refreshPlayerCount();

    // Handy for previewing the backdrops: add #level=0…4 to the URL.
    const m = location.hash.match(/level=(\d)/);
    if (m) setScene(Math.min(4, +m[1]));
  }

  boot();
})();
