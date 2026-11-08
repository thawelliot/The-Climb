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

  // One fixed shuffle of the bank; each day takes the next 7.
  const ORDER = (() => {
    const idx = QUESTIONS.map((_, i) => i);
    const rand = seeded(2026);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx;
  })();

  function dailyQuestions(day) {
    const n = QUESTIONS.length;
    const start = (((day * PROMPTS_PER_GAME) % n) + n) % n;
    return Array.from({ length: PROMPTS_PER_GAME }, (_, k) => QUESTIONS[ORDER[(start + k) % n]]);
  }

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
        if (f === guess || fc === compact) return ans;
        if (compact.length < 3) continue;
        const d = Math.min(lev(guess, f), lev(compact, fc));
        if (d <= allowedTypos(fc.length) && d < bestDist) { best = ans; bestDist = d; }
      }
    }
    return best;
  }

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

  function animateNumber(el, from, to, ms = 700) {
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / ms);
      el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- game ----------

  const today = dayIndex();
  const gameNo = today + 1;
  const SAVE_KEY = `climb-game-${gameNo}`;

  let game = null;
  let timerRaf = 0;

  function newGame(mode) {
    game = {
      mode,
      qs: mode === "daily" ? dailyQuestions(today) : practiceQuestions(),
      i: 0,
      score: 0,
      results: [],
    };
    $("scorePill").hidden = false;
    $("scoreNum").textContent = "0";
    setScene(0);
    renderLadder(0);
    askQuestion();
  }

  function askQuestion() {
    const q = game.qs[game.i];
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

  function submit(e) {
    e.preventDefault();
    const input = $("answerInput");
    const text = input.value.trim();
    if (!text || input.disabled) return;
    const hit = match(text, game.qs[game.i]);
    if (hit) return finishQuestion(hit);
    input.classList.remove("shake");
    void input.offsetWidth;
    input.classList.add("shake");
    $("feedback").textContent = "Not on our list — try another";
    $("feedback").className = "feedback bad";
    const chip = document.createElement("span");
    chip.textContent = text;
    $("misses").appendChild(chip);
    input.value = "";
  }

  function finishQuestion(hit) {
    cancelAnimationFrame(timerRaf);
    $("answerInput").disabled = true;
    const q = game.qs[game.i];
    const pts = hit ? hit[1] : 0;
    const before = game.score;
    const prevLevel = levelFor(before);
    game.score += pts;
    game.results.push({ prompt: q.prompt, answer: hit ? hit[0] : null, pts });

    // Reveal card.
    show("revealScreen");
    $("revealCount").textContent = `Prompt ${game.i + 1} of ${game.qs.length}`;
    $("revealPrompt").textContent = q.prompt;
    $("revealHit").className = `reveal-hit${hit ? "" : " miss"}${pts >= WORLDIE ? " elite" : ""}`;
    $("revealWho").textContent = hit ? hit[0] : "Time's up";
    $("revealTier").textContent = hit ? TIERS[tierIndex(pts)].name : "No points";
    playMeter(pts, !hit);
    const sorted = [...q.answers].sort((a, b) => a[1] - b[1]);
    const others = sorted.filter((a) => a !== hit);
    const li = (a) => `<li><span>${esc(a[0])}</span><b>${a[1]}</b></li>`;
    $("commonList").innerHTML = others.slice(0, 3).map(li).join("");
    $("rareList").innerHTML = others.slice(-3).reverse().map(li).join("");
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
  let landTimer;
  function playMeter(pts, missed) {
    const meter = $("meter"), box = $("revealHit");
    clearTimeout(landTimer);
    const idx = missed ? -1 : tierIndex(pts);
    meter.className = `meter${missed ? " miss" : ""}`;
    meter.style.setProperty("--p", 0);
    meter.innerHTML = `<div class="meter-track"><div class="meter-ball" aria-hidden="true">⚽</div></div>
      <div class="meter-scale">${TIERS.map((t) => `<span style="left:${t.at}%">${t.name}</span>`).join("")}</div>`;
    $("revealPts").textContent = "0";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (missed) return;
      meter.style.setProperty("--p", pts / 100);
      meter.classList.add("go");
      animateNumber($("revealPts"), 0, pts, 1200);
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
    const summary = { score: game.score, results: game.results };
    if (game.mode === "daily") store.set(SAVE_KEY, summary);
    showResults(summary, game.mode);
  }

  function shareText(summary) {
    const lvl = LEVELS[levelFor(summary.score)];
    return [
      `THE CLIMB #${gameNo} ⚽`,
      `${lvl.name} — ${summary.score} pts`,
      summary.results.map((r) => emoji(r.pts)).join(""),
    ].join("\n");
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
    $("breakdown").innerHTML = summary.results.map((r) => `
      <li><span>${emoji(r.pts)}</span>
        <span>${r.answer ? esc(r.answer) : "—"}<span class="q">${esc(r.prompt)}</span></span>
        <span class="p${r.pts ? "" : " zero"}">${r.pts}</span></li>`).join("");
    $("shareBtn").hidden = mode === "practice";
    $("shareBtn").onclick = () => copy(shareText(summary));
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

  function boot() {
    const bd = $("backdrop");
    bd.innerHTML = Scenes.build().join("");
    scenes = [...bd.querySelectorAll(".scene")];
    setScene(0);

    $("gameLabel").textContent = `Game #${gameNo}`;
    // Start-screen pyramid: narrowest at the top, lighting up from the bottom.
    $("pyramid").innerHTML = LEVELS.map((l, i) => {
      const top = i === LEVELS.length - 1;
      return `<div class="pyr${top ? " top" : ""}" style="--w:${100 - i * 11}%;--d:${(i * 0.7).toFixed(1)}s">${top ? "🏆 " : ""}${l.name}<span>${l.min}+ pts</span></div>`;
    }).reverse().join("");
    renderLadder(0);

    $("startBtn").onclick = () => newGame("daily");
    $("practiceBtn").onclick = () => newGame("practice");
    $("answerForm").addEventListener("submit", submit);
    $("nextBtn").onclick = next;
    $("helpBtn").onclick = () => $("helpDialog").showModal();

    window.addEventListener("resize", () => renderLadder(ladderScore));

    const saved = store.get(SAVE_KEY);
    if (saved) showResults(saved, "daily");
    else show("startScreen");

    // Handy for previewing the backdrops: add #level=0…4 to the URL.
    const m = location.hash.match(/level=(\d)/);
    if (m) setScene(Math.min(4, +m[1]));
  }

  boot();
})();
