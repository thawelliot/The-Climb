// Backdrop scenes, one per level, drawn as SVG from a single perspective
// camera so the pitch lines up across every level.
// World units are metres: X runs along the pitch (goal to goal),
// D is depth away from the near touchline, H is height.

const Scenes = (() => {
  const W = 1600, VH = 900;
  const CX = 800, HZ = 300, F = 685.7, HC = 33.8, Z0 = 40;

  const r = (n) => Math.round(n * 10) / 10;

  function P(X, D, H = 0) {
    const z = Z0 + D;
    return [CX + (F * X) / z, HZ + (F * (HC - H)) / z];
  }
  const scale = (D) => F / (Z0 + D); // pixels per metre at depth D

  const pts = (list) => list.map((p) => P(...p)).map(([x, y]) => `${r(x)},${r(y)}`).join(" ");
  const poly = (list, attrs) => `<polygon points="${pts(list)}" ${attrs}/>`;
  function seg(a, b, attrs) {
    const [x1, y1] = P(...a), [x2, y2] = P(...b);
    return `<line x1="${r(x1)}" y1="${r(y1)}" x2="${r(x2)}" y2="${r(y2)}" ${attrs}/>`;
  }

  function rng(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ---------- shared pieces ----------

  function sky(id, stops) {
    const s = stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join("");
    return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${s}</linearGradient></defs>
      <rect width="${W}" height="${VH}" fill="url(#${id})"/>`;
  }

  // Ground ellipse (mud, puddles, light pools) at pitch position X,D.
  function blob(X, D, rx, rd, attrs) {
    const [x, y] = P(X, D);
    const s = scale(D);
    return `<ellipse cx="${r(x)}" cy="${r(y)}" rx="${r(rx * s)}" ry="${r((rd * s * HC) / (Z0 + D))}" ${attrs}/>`;
  }

  function markings({ color = "#fff", opacity = 0.92, width = 2.6, wobble = 0, seed = 1 }) {
    const rand = rng(seed);
    const j = () => (wobble ? (rand() - 0.5) * wobble : 0);
    const path = (list, close) => {
      // Subdivide so the wobble bends lines rather than just shifting corners.
      const out = [];
      for (let i = 0; i < list.length - (close ? 0 : 1); i++) {
        const a = list[i], b = list[(i + 1) % list.length];
        const n = wobble ? 6 : 1;
        for (let k = 0; k < n; k++) {
          const t = k / n;
          out.push([a[0] + (b[0] - a[0]) * t + j(), a[1] + (b[1] - a[1]) * t + j()]);
        }
      }
      if (!close) out.push(list[list.length - 1]);
      const d = out.map((p, i) => { const [x, y] = P(p[0], p[1]); return `${i ? "L" : "M"}${r(x)},${r(y)}`; }).join("");
      return `<path d="${d}${close ? "Z" : ""}"/>`;
    };
    const circle = (cx, cd, rad, from = 0, to = Math.PI * 2, close = true) => {
      const list = [];
      const n = 48;
      for (let i = 0; i <= n; i++) {
        const t = from + ((to - from) * i) / n;
        list.push([cx + rad * Math.cos(t), cd + rad * Math.sin(t)]);
      }
      return path(list, close && to - from >= Math.PI * 2);
    };

    let s = `<g fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="${width}" stroke-linejoin="round" stroke-linecap="round">`;
    s += path([[-52.5, 0], [52.5, 0], [52.5, 68], [-52.5, 68]], true);
    s += path([[0, 0], [0, 68]]);
    s += circle(0, 34, 9.15);
    for (const sd of [-1, 1]) {
      s += path([[sd * 52.5, 13.84], [sd * 36, 13.84], [sd * 36, 54.16], [sd * 52.5, 54.16]]);
      s += path([[sd * 52.5, 24.84], [sd * 47, 24.84], [sd * 47, 43.16], [sd * 52.5, 43.16]]);
      const a = Math.acos(5.5 / 9.15);
      s += sd < 0 ? circle(-41.5, 34, 9.15, -a, a, false) : circle(41.5, 34, 9.15, Math.PI - a, Math.PI + a, false);
    }
    s += `</g>`;
    for (const [X, D] of [[0, 34], [-41.5, 34], [41.5, 34]]) s += blob(X, D, 0.35, 0.35, `fill="${color}" fill-opacity="${opacity}"`);
    return s;
  }

  function goals({ net = true, netId, post = "#fff" }) {
    let s = "";
    for (const sd of [-1, 1]) {
      const gx = sd * 52.5, bx = sd * 54.6;
      if (net) {
        const nf = `fill="url(#${netId})" stroke="#fff" stroke-opacity=".5" stroke-width="1"`;
        s += poly([[bx, 30.34, 0], [bx, 37.66, 0], [bx, 37.66, 2.1], [bx, 30.34, 2.1]], nf);
        s += poly([[gx, 30.34, 2.44], [gx, 37.66, 2.44], [bx, 37.66, 2.1], [bx, 30.34, 2.1]], nf);
        s += poly([[gx, 30.34, 2.44], [bx, 30.34, 2.1], [bx, 30.34, 0], [gx, 30.34, 0]], nf);
        s += poly([[gx, 37.66, 2.44], [bx, 37.66, 2.1], [bx, 37.66, 0], [gx, 37.66, 0]], nf);
      }
      const st = `stroke="${post}" stroke-width="3.4" stroke-linecap="round"`;
      s += seg([gx, 30.34, 0], [gx, 30.34, 2.44], st);
      s += seg([gx, 37.66, 0], [gx, 37.66, 2.44], st);
      s += seg([gx, 30.34, 2.44], [gx, 37.66, 2.44], st);
    }
    return s;
  }

  function netDef(id) {
    return `<pattern id="${id}" width="5" height="5" patternUnits="userSpaceOnUse">
      <path d="M0 0L5 5M5 0L0 5" stroke="#fff" stroke-opacity=".55" stroke-width=".6"/></pattern>`;
  }

  function cornerFlags(color) {
    let s = "";
    for (const [X, D] of [[-52.5, 68], [52.5, 68], [-52.5, 0], [52.5, 0]]) {
      const [x, y] = P(X, D, 1.6);
      const k = scale(D);
      s += seg([X, D, 0], [X, D, 1.6], `stroke="#eee" stroke-width="${r(Math.max(1.2, k * 0.06))}"`);
      s += `<path d="M${r(x)},${r(y)}l${r(k * 0.55 * Math.sign(-X))},${r(k * 0.18)}l${r(-k * 0.55 * Math.sign(-X))},${r(k * 0.18)}Z" fill="${color}"/>`;
    }
    return s;
  }

  function stripes(c1, c2, { cross = false } = {}) {
    let s = "";
    for (let i = 0; i < 15; i++) {
      const x0 = -52.5 + i * 7, x1 = x0 + 7;
      s += poly([[x0, 0], [x1, 0], [x1, 68], [x0, 68]], `fill="${i % 2 ? c1 : c2}"`);
    }
    if (cross) {
      for (let i = 0; i < 8; i += 2) {
        const d0 = i * 8.5, d1 = d0 + 8.5;
        s += poly([[-52.5, d0], [52.5, d0], [52.5, d1], [-52.5, d1]], `fill="#fff" fill-opacity=".035"`);
      }
    }
    return s;
  }

  function adBoards(D, x0, x1, h, colors, attrs = "") {
    let s = "";
    const n = colors.length;
    const w = (x1 - x0) / n;
    for (let i = 0; i < n; i++) {
      const a = x0 + i * w, b = a + w;
      s += poly([[a, D, 0], [b, D, 0], [b, D, h], [a, D, h]], `fill="${colors[i]}" ${attrs}`);
    }
    return s;
  }

  // A tile of supporters used to fill stand surfaces.
  function crowdDef(id, { bg, colors, skin = ["#f1c7a5", "#d9a37e", "#a86f4c", "#6e4630"], density = 0.9, seed = 3, scale = 1 }) {
    const rand = rng(seed);
    const w = 66, h = 24;
    let s = `<pattern id="${id}" width="${w}" height="${h}" patternUnits="userSpaceOnUse" patternTransform="scale(${scale})"><rect width="${w}" height="${h}" fill="${bg}"/>`;
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 12; col++) {
        if (rand() > density) continue;
        const x = col * 5.5 + (row % 2) * 2.7 + (rand() - 0.5);
        const y = row * 6 + 2.6;
        const c = colors[Math.floor(rand() * colors.length)];
        const sk = skin[Math.floor(rand() * skin.length)];
        s += `<rect x="${r(x - 2.2)}" y="${r(y)}" width="4.4" height="3.6" rx="1.2" fill="${c}"/>`;
        s += `<circle cx="${r(x)}" cy="${r(y - 0.6)}" r="1.6" fill="${sk}"/>`;
      }
    }
    return s + `</pattern>`;
  }

  function treeLine(seed, y0, y1, colors, count = 60) {
    const rand = rng(seed);
    let s = "";
    for (let i = 0; i < count; i++) {
      const x = rand() * (W + 100) - 50;
      const rad = 18 + rand() * 34;
      const y = y1 - rad * 0.6 - rand() * (y1 - y0) * 0.3;
      s += `<circle cx="${r(x)}" cy="${r(y)}" r="${r(rad)}" fill="${colors[i % colors.length]}"/>`;
    }
    return s;
  }

  function houses(seed, x0, x1, base, palette) {
    const rand = rng(seed);
    let s = "";
    let x = x0;
    while (x < x1) {
      const w = 46 + rand() * 30, h = 26 + rand() * 18;
      const c = palette[Math.floor(rand() * palette.length)];
      s += `<rect x="${r(x)}" y="${r(base - h)}" width="${r(w)}" height="${r(h)}" fill="${c}"/>`;
      s += `<path d="M${r(x - 3)},${r(base - h)}L${r(x + w / 2)},${r(base - h - 16)}L${r(x + w + 3)},${r(base - h)}Z" fill="#4a3d3a"/>`;
      for (let k = 0; k < 2; k++) s += `<rect x="${r(x + 8 + k * (w - 24))}" y="${r(base - h + 8)}" width="8" height="7" fill="#dfe6ea" opacity=".7"/>`;
      x += w + 2;
    }
    return s;
  }

  function clouds(seed, n, color, opacity) {
    const rand = rng(seed);
    let s = `<g fill="${color}" opacity="${opacity}">`;
    for (let i = 0; i < n; i++) {
      const x = rand() * W, y = 40 + rand() * 260, w = 120 + rand() * 220;
      s += `<ellipse cx="${r(x)}" cy="${r(y)}" rx="${r(w)}" ry="${r(w * 0.22)}"/>`;
      s += `<ellipse cx="${r(x + w * 0.3)}" cy="${r(y - w * 0.12)}" rx="${r(w * 0.5)}" ry="${r(w * 0.2)}"/>`;
    }
    return s + `</g>`;
  }

  // ---------- Bowl stadium (Premier League and the final) ----------
  // Everything is built from "rings": a U-shaped line that runs down one
  // side stand, along the far stand and back up the other side, at a given
  // offset from the pitch edge and a given height. Bands between two rings
  // make tiers, walls and roofs, and the corners join up automatically.

  const NEAR = -30;
  const ring = (off, h) => {
    const a = 52.5 + off;
    return [[-a, NEAR, h], [-a, 68 + off, h], [a, 68 + off, h], [a, NEAR, h]];
  };
  const band = (offA, hA, offB, hB, attrs) => poly([...ring(offA, hA), ...ring(offB, hB).reverse()], attrs);
  const polyline = (list, attrs) => `<polyline points="${pts(list)}" fill="none" ${attrs}/>`;

  function tier(T) {
    const off = (t) => T.i + (T.o - T.i) * t;
    const ht = (t) => T.h0 + (T.h1 - T.h0) * t;
    const a = 52.5 + T.i, b = 52.5 + T.o;
    let s = "";
    // Front wall (or the balcony fascia for upper tiers).
    s += band(T.i, T.h0 - T.front, T.i, T.h0, `fill="${T.frontFill}" ${T.frontAttrs || ""}`);
    // Seats and supporters.
    s += band(T.i, T.h0, T.o, T.h1, `fill="url(#${T.crowd})"`);
    if (T.sides) {
      for (const [sd, id] of [[-1, T.sides[0]], [1, T.sides[1]]]) {
        s += poly([[sd * a, NEAR, T.h0], [sd * a, 68 + T.i, T.h0], [sd * b, 68 + T.o, T.h1], [sd * b, NEAR, T.h1]], `fill="url(#${id})"`);
      }
    }
    // Row lines follow the bowl, which is what sells the perspective.
    let rows = `<g stroke="#000" stroke-opacity=".3" stroke-width="1">`;
    for (let k = 1; k < T.rows; k++) rows += polyline(ring(off(k / T.rows), ht(k / T.rows)), "");
    s += rows + `</g>`;
    // Vomitories: the tunnel mouths halfway up the tier.
    const t0 = 0.4, t1 = 0.56;
    for (let X = -a + 16; X < a - 10; X += 24) {
      s += poly([[X - 1.8, 68 + off(t0), ht(t0)], [X + 1.8, 68 + off(t0), ht(t0)], [X + 1.8, 68 + off(t1), ht(t1)], [X - 1.8, 68 + off(t1), ht(t1)]], `fill="#07080c"`);
    }
    for (const sd of [-1, 1]) {
      for (let D = 6; D < 68 + T.i - 12; D += 24) {
        s += poly([[sd * (52.5 + off(t0)), D - 1.8, ht(t0)], [sd * (52.5 + off(t0)), D + 1.8, ht(t0)], [sd * (52.5 + off(t1)), D + 1.8, ht(t1)], [sd * (52.5 + off(t1)), D - 1.8, ht(t1)]], `fill="#07080c"`);
      }
    }
    // Stairways.
    let ai = `<g stroke="${T.aisle}" stroke-opacity=".75" stroke-width="${T.aisleW}">`;
    for (let X = -a + 4; X < a - 2; X += 12) ai += seg([X, 68 + T.i, T.h0], [X, 68 + T.o, T.h1], "");
    for (const sd of [-1, 1]) {
      for (let D = 64 + T.i - 12; D > NEAR; D -= 12) ai += seg([sd * a, D, T.h0], [sd * b, D, T.h1], "");
      ai += seg([sd * a, 68 + T.i, T.h0], [sd * b, 68 + T.o, T.h1], `stroke-width="${T.aisleW * 1.6}"`);
    }
    s += ai + `</g>`;
    // Shadow from the tier above / the roof.
    if (T.shade) s += band(off(0.5), ht(0.5), T.o, T.h1, `fill="#000" fill-opacity="${T.shade}"`);
    return s;
  }

  function roof(R) {
    const a = 52.5 + R.ri, b = 52.5 + R.ro;
    let s = band(R.ri, R.rh, R.ro, R.rh - 2, `fill="${R.under}"`);
    let tr = `<g stroke="${R.truss}" stroke-width="1.6">`;
    for (let X = -a; X <= a + 0.1; X += 8.5) tr += seg([X, 68 + R.ri, R.rh], [(X * b) / a, 68 + R.ro, R.rh - 2], "");
    for (const sd of [-1, 1]) {
      for (let D = 68 + R.ri - 8.5; D > NEAR; D -= 8.5) tr += seg([sd * a, D, R.rh], [sd * b, D, R.rh - 2], "");
    }
    s += tr + `</g>`;
    s += band(R.ri, R.rh, R.ri, R.rh + R.fh, `fill="${R.fascia}"`);
    s += polyline(ring(R.ri, R.rh + R.fh), `stroke="${R.edge}" stroke-width="2"`);
    // Floodlights along the inside edge.
    let lamps = "";
    for (let X = -a + 2; X < a; X += 4) {
      const [x, y] = P(X, 68 + R.ri, R.rh - 0.4);
      lamps += `<rect x="${r(x - 3)}" y="${r(y - 1.5)}" width="6" height="3" rx="1" fill="${R.lamp}"/>`;
    }
    for (const sd of [-1, 1]) {
      for (let D = 68 + R.ri - 4; D > NEAR + 12; D -= 6) {
        const [x, y] = P(sd * a, D, R.rh - 0.4);
        const k = Math.min(3, scale(D) / scale(68 + R.ri));
        lamps += `<rect x="${r(x - 3 * k)}" y="${r(y - 1.5 * k)}" width="${r(6 * k)}" height="${r(3 * k)}" rx="1" fill="${R.lamp}"/>`;
      }
    }
    s += `<g filter="url(#${R.glow})">${lamps}</g>`;
    return s;
  }

  function bigScreen(R, fill, text) {
    const D = 68 + R.ri;
    const [sx0, sy0] = P(-10, D, R.rh - 1.5), [sx1, sy1] = P(10, D, R.rh - 8.5);
    let s = `<rect x="${r(sx0)}" y="${r(sy0)}" width="${r(sx1 - sx0)}" height="${r(sy1 - sy0)}" rx="3" fill="#06080e" stroke="${R.fascia}" stroke-width="2"/>`;
    s += `<rect x="${r(sx0 + 4)}" y="${r(sy0 + 4)}" width="${r(sx1 - sx0 - 8)}" height="${r(sy1 - sy0 - 8)}" rx="2" fill="url(#${fill})"/>`;
    s += `<text x="${r((sx0 + sx1) / 2)}" y="${r((sy0 + sy1) / 2 + 6)}" text-anchor="middle" font-family="Bebas Neue, Impact, sans-serif" font-size="18" fill="#fff" letter-spacing="2">${text}</text>`;
    return s;
  }

  function dugouts(glass) {
    let s = "";
    for (const sd of [-1, 1]) {
      const x0 = sd * 3, x1 = sd * 13;
      s += poly([[x0, 70.6, 0], [x1, 70.6, 0], [x1, 70.6, 2.3], [x0, 70.6, 2.3]], `fill="#14171f"`);
      s += poly([[x0, 68.8, 0.2], [x1, 68.8, 0.2], [x1, 70.6, 0.2], [x0, 70.6, 0.2]], `fill="#2a2f3a"`);
      s += poly([[x0, 68.8, 2.1], [x1, 68.8, 2.1], [x1, 70.6, 2.4], [x0, 70.6, 2.4]], `fill="${glass}" fill-opacity=".55" stroke="#dfe6f0" stroke-opacity=".6" stroke-width="1"`);
      for (let k = 0; k < 6; k++) {
        const [x, y] = P(x0 + sd * (1 + k * 1.6), 70.2, 0.9);
        s += `<circle cx="${r(x)}" cy="${r(y)}" r="1.6" fill="${k % 2 ? "#e9edf5" : "#c43a3a"}"/>`;
      }
    }
    return s;
  }

  // Phone torches / camera flashes across the tiers.
  function twinkles(tiers, n, seed) {
    const rand = rng(seed);
    let s = "";
    for (let k = 0; k < n; k++) {
      const T = tiers[Math.floor(rand() * tiers.length)];
      const t = rand();
      const off = T.i + (T.o - T.i) * t, h = T.h0 + (T.h1 - T.h0) * t;
      const a = 52.5 + off;
      const p = rand() < 0.6 ? [(rand() * 2 - 1) * a, 68 + off, h] : [(rand() < 0.5 ? -1 : 1) * a, rand() * (68 + off), h];
      const [x, y] = P(...p);
      s += `<circle class="tw" cx="${r(x)}" cy="${r(y)}" r="1.5" fill="#fff" style="animation-delay:${r(rand() * 4)}s"/>`;
    }
    return s;
  }

  function stadium(o) {
    const top = o.tiers[o.tiers.length - 1];
    const [, shellTop] = P(0, 68 + o.roof.ro, o.roof.rh - 2);
    let s = `<rect x="0" y="${r(shellTop - 4)}" width="${W}" height="${r(560 - shellTop)}" fill="${o.shell}"/>`;
    s += band(top.o, top.h1, o.roof.ro, o.roof.rh - 2, `fill="${o.shell}"`);
    for (const T of o.tiers) s += tier(T);
    s += roof(o.roof);
    s += bigScreen(o.roof, o.screenFill, o.screenText);
    // Pitch surround and the LED boards that run all the way round.
    const lo = o.tiers[0].i;
    s += poly([[-(52.5 + lo), NEAR], [52.5 + lo, NEAR], [52.5 + lo, 68 + lo], [-(52.5 + lo), 68 + lo]], `fill="${o.surround}"`);
    s += band(3, 0, 3, 1.1, `fill="url(#${o.led})" filter="url(#${o.roof.glow})"`);
    return s;
  }

  function glowDef(id, sd = 3) {
    return `<filter id="${id}" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="${sd}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
  }

  function svg(id, body) {
    return `<svg class="scene" data-scene="${id}" viewBox="0 0 ${W} ${VH}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${body}</svg>`;
  }

  // ---------- 1. Sunday League: a muddy park pitch ----------

  function sunday() {
    const rand = rng(11);
    let s = sky("s0sky", [[0, "#8e9aa3"], [0.55, "#c3cacd"], [1, "#d6dbdc"]]);
    s += clouds(4, 9, "#eef1f2", 0.55);
    s += clouds(9, 6, "#9aa4ab", 0.35);
    s += `<rect y="430" width="${W}" height="${VH - 430}" fill="#6b8448"/>`;
    s += treeLine(7, 380, 478, ["#3f5a35", "#4a6a3c", "#36502f", "#557545"], 70);
    s += houses(5, 1020, 1480, 478, ["#a0624a", "#b9785a", "#8c5a46", "#c9a27e"]);
    s += treeLine(21, 430, 486, ["#3a5330", "#476638"], 18);
    // Park railings.
    let rail = `<g stroke="#3b3f42" stroke-width="1.4">`;
    for (let x = 0; x < W; x += 9) rail += `<line x1="${x}" y1="474" x2="${x}" y2="490"/>`;
    s += rail + `<line x1="0" y1="476" x2="${W}" y2="476"/></g>`;
    s += poly([[-200, -20], [200, -20], [200, 160], [-200, 160]], `fill="#6a8a45"`);
    s += poly([[-52.5, 0], [52.5, 0], [52.5, 68], [-52.5, 68]], `fill="#6f9147"`);
    // Worn goalmouths, a bald centre circle and a puddle.
    for (const sd of [-1, 1]) {
      s += blob(sd * 49, 34, 6, 10, `fill="#6b5236" opacity=".75"`);
      s += blob(sd * 47, 34, 4, 6, `fill="#5a432c" opacity=".8"`);
    }
    s += blob(0, 34, 7, 8, `fill="#8a7a4f" opacity=".55"`);
    s += blob(-18, 12, 4, 2.5, `fill="#8fa3ad" opacity=".75"`);
    s += blob(-18, 12, 3, 1.6, `fill="#b8c7cd" opacity=".6"`);
    for (let i = 0; i < 40; i++) s += blob(rand() * 100 - 50, rand() * 66, 1 + rand() * 2.5, 1 + rand() * 2, `fill="#7f7445" opacity=".35"`);
    s += markings({ opacity: 0.62, width: 2.2, wobble: 0.9, seed: 3 });
    s += goals({ net: false, post: "#e9e6dc" });
    // Training cones and a kit bag.
    for (const [X, D] of [[-30, 6], [-24, 6], [-18, 6], [-12, 6], [20, 4], [26, 4]]) {
      const [x, y] = P(X, D);
      const k = scale(D);
      s += `<path d="M${r(x - k * 0.22)},${r(y)}L${r(x)},${r(y - k * 0.35)}L${r(x + k * 0.22)},${r(y)}Z" fill="#f07a1a"/>`;
    }
    {
      const [x, y] = P(8, -2);
      const k = scale(-2);
      s += `<rect x="${r(x)}" y="${r(y - k * 0.45)}" width="${r(k * 0.9)}" height="${r(k * 0.45)}" rx="${r(k * 0.12)}" fill="#1d2b4f"/>`;
    }
    s += cornerFlags("#d9d24a");
    return svg(0, s);
  }

  // ---------- 2. Non-League: one covered terrace and a tea bar ----------

  function nonLeague() {
    let s = sky("s1sky", [[0, "#6fa6d6"], [0.6, "#b9d5ea"], [1, "#e6eef2"]]);
    s += `<defs>${netDef("s1net")}${crowdDef("s1crowd", { bg: "#5c5f63", colors: ["#d4202a", "#ffffff", "#20232a", "#d4202a", "#2b3f8c"], density: 0.55, seed: 8 })}</defs>`;
    s += clouds(12, 6, "#ffffff", 0.6);
    s += `<circle cx="1360" cy="120" r="60" fill="#fff6d8" opacity=".7"/>`;
    s += `<rect y="420" width="${W}" height="${VH - 420}" fill="#5f8c45"/>`;
    s += treeLine(31, 360, 470, ["#2f5130", "#3c6339", "#2a462a", "#466f40"], 80);
    s += houses(14, 80, 420, 468, ["#a9654c", "#c18265", "#956049"]);
    s += poly([[-200, -20], [200, -20], [200, 120], [-200, 120]], `fill="#4f8a3d"`);
    // Covered terrace.
    s += poly([[-36, 82, 4], [12, 82, 4], [12, 82, 8.6], [-36, 82, 8.6]], `fill="#4b4f55"`);
    s += poly([[-36, 74, 0.3], [12, 74, 0.3], [12, 82, 4], [-36, 82, 4]], `fill="url(#s1crowd)"`);
    for (let k = 0; k < 6; k++) {
      const D = 74 + k * 1.4, H = 0.3 + k * 0.65;
      s += seg([-36, D, H], [12, D, H], `stroke="#888" stroke-width="1" stroke-opacity=".7"`);
    }
    s += poly([[-37, 73, 8.2], [13, 73, 8.2], [13, 83, 8.8], [-37, 83, 8.8]], `fill="#2e3136"`);
    for (let k = 0; k <= 5; k++) s += seg([-36 + k * 9.6, 73.4, 0], [-36 + k * 9.6, 73.4, 8.2], `stroke="#2a2d31" stroke-width="2.4"`);
    s += poly([[-37, 73, 8.2], [13, 73, 8.2], [13, 73, 10.4], [-37, 73, 10.4]], `fill="#b3151f"`);
    {
      const [x, y] = P(-12, 73, 9.0);
      s += `<text x="${r(x)}" y="${r(y + 3)}" text-anchor="middle" font-family="Bebas Neue, Impact, sans-serif" font-size="11" letter-spacing="3" fill="#fff">PARK ROAD END</text>`;
    }
    // Tea bar.
    s += poly([[26, 75, 0], [26, 81, 0], [26, 81, 3.2], [26, 75, 3.2]], `fill="#d7c9a7"`);
    s += poly([[26, 75, 0], [36, 75, 0], [36, 75, 3.2], [26, 75, 3.2]], `fill="#efe3c4"`);
    s += poly([[27.5, 75, 1.3], [34.5, 75, 1.3], [34.5, 75, 2.6], [27.5, 75, 2.6]], `fill="#3a2a1d"`);
    s += poly([[25.5, 74.5, 3.2], [36.5, 74.5, 3.2], [36.5, 81.5, 4.3], [25.5, 81.5, 4.3]], `fill="#a5342b"`);
    {
      const [x, y] = P(31, 75, 2.9);
      s += `<text x="${r(x)}" y="${r(y + 2)}" text-anchor="middle" font-family="Bebas Neue, Impact, sans-serif" font-size="7.5" letter-spacing="1" fill="#a5342b">TEA BAR</text>`;
    }
    // Low wall with local sponsors.
    s += adBoards(71, -60, 60, 1.1, ["#ffd23f", "#1d4e89", "#ffffff", "#2a9d5a", "#e5383b", "#ffffff", "#1d4e89", "#f4a261", "#ffffff", "#2a9d5a"]);
    // Floodlight poles.
    for (const [X, D] of [[-64, 72], [64, 72], [-64, 34], [64, 34]]) {
      s += seg([X, D, 0], [X, D, 20], `stroke="#6c7075" stroke-width="${r(Math.max(2, scale(D) * 0.35))}"`);
      const [x, y] = P(X, D, 21);
      const k = scale(D);
      s += `<rect x="${r(x - k * 1.6)}" y="${r(y - k * 0.6)}" width="${r(k * 3.2)}" height="${r(k * 1.2)}" fill="#3a3d42"/>`;
      for (let i = 0; i < 3; i++) s += `<rect x="${r(x - k * 1.4 + i * k * 1)}" y="${r(y - k * 0.45)}" width="${r(k * 0.8)}" height="${r(k * 0.8)}" fill="#e9eef2"/>`;
    }
    s += stripes("#4f9a3e", "#55a243");
    s += markings({ opacity: 0.85, width: 2.4 });
    s += goals({ netId: "s1net" });
    s += cornerFlags("#e5383b");
    return svg(1, s);
  }

  // ---------- 3. The EFL: four proper stands and floodlight pylons ----------

  function efl() {
    let s = sky("s2sky", [[0, "#3f86d1"], [0.6, "#8fc0ea"], [1, "#cfe5f5"]]);
    s += `<defs>${netDef("s2net")}${crowdDef("s2crowd", { bg: "#1f4fa0", colors: ["#1f5fbf", "#ffffff", "#1f5fbf", "#f2c230", "#1b1e27"], density: 0.72, seed: 12 })}</defs>`;
    s += clouds(17, 5, "#ffffff", 0.75);
    // Town behind the ground.
    const rand = rng(40);
    let town = `<g fill="#8aa1b5">`;
    for (let x = -20; x < W; x += 30 + rand() * 40) {
      const h = 40 + rand() * 120;
      town += `<rect x="${r(x)}" y="${r(470 - h)}" width="${r(28 + rand() * 40)}" height="${r(h)}"/>`;
    }
    s += town + `</g>`;
    s += `<rect y="440" width="${W}" height="${VH - 440}" fill="#4d7c42"/>`;
    // Pylons in the open corners.
    for (const sd of [-1, 1]) {
      const X = sd * 96, D = 104;
      s += seg([X, D, 0], [X, D, 46], `stroke="#9aa3ab" stroke-width="5"`);
      const [x, y] = P(X, D, 50);
      const k = scale(D);
      s += `<rect x="${r(x - k * 5)}" y="${r(y - k * 3)}" width="${r(k * 10)}" height="${r(k * 6.5)}" fill="#59616b"/>`;
      for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) s += `<rect x="${r(x - k * 4.4 + i * k * 2.3)}" y="${r(y - k * 2.4 + j * k * 2)}" width="${r(k * 1.8)}" height="${r(k * 1.5)}" fill="#f4f7fa"/>`;
    }
    s += poly([[-62, -20], [62, -20], [62, 73], [-62, 73]], `fill="#3f8a3c"`);
    // Main stand.
    s += poly([[-60, 98, 17], [60, 98, 17], [60, 100, 22], [-60, 100, 22]], `fill="#1b2433"`);
    s += poly([[-60, 73, 1], [60, 73, 1], [60, 98, 17], [-60, 98, 17]], `fill="url(#s2crowd)"`);
    s += poly([[-62, 72, 22], [62, 72, 22], [62, 100, 21], [-62, 100, 21]], `fill="#2b3442"`);
    s += poly([[-62, 72, 22], [62, 72, 22], [62, 72, 25], [-62, 72, 25]], `fill="#1f4fa0"`);
    {
      const [x, y] = P(0, 72, 23.5);
      s += `<text x="${r(x)}" y="${r(y + 4)}" text-anchor="middle" font-family="Bebas Neue, Impact, sans-serif" font-size="13" letter-spacing="6" fill="#fff">THE MAIN STAND</text>`;
    }
    // Stands behind each goal.
    for (const sd of [-1, 1]) {
      s += poly([[sd * 62, 70, 1], [sd * 86, 70, 14], [sd * 86, 70, 1]], `fill="#24324a"`);
      s += poly([[sd * 62, -20, 1], [sd * 62, 70, 1], [sd * 86, 70, 14], [sd * 86, -20, 14]], `fill="url(#s2crowd)"`);
      s += poly([[sd * 60, -20, 18], [sd * 60, 70, 18], [sd * 90, 70, 17], [sd * 90, -20, 17]], `fill="#2b3442"`);
      s += poly([[sd * 60, -20, 18], [sd * 60, 70, 18], [sd * 60, 70, 20.5], [sd * 60, -20, 20.5]], `fill="#1f4fa0"`);
      s += poly([[sd * 86, 70, 14], [sd * 86, 70, 17], [sd * 62, 70, 18], [sd * 62, 70, 1]], `fill="#1b2433" opacity=".6"`);
    }
    s += adBoards(71, -60, 60, 1.2, ["#0e1726", "#f2c230", "#0e1726", "#e63946", "#0e1726", "#4cc9f0", "#0e1726", "#f2c230"]);
    s += stripes("#3f9a3f", "#4aab48");
    s += markings({});
    s += goals({ netId: "s2net" });
    s += cornerFlags("#f2c230");
    return svg(2, s);
  }

  // ---------- 4. The Premier League: a full two-tier bowl at dusk ----------

  function premier() {
    let s = sky("s3sky", [[0, "#1b2150"], [0.4, "#5d3b7c"], [0.75, "#e07a55"], [1, "#f2a65a"]]);
    s += `<defs>${netDef("s3net")}
      ${crowdDef("s3low", { bg: "#2a2e3a", colors: ["#d7192a", "#d7192a", "#ffffff", "#111318", "#d7192a", "#f2f2f2"], density: 0.95, seed: 21 })}
      ${crowdDef("s3up", { bg: "#2a2e3a", colors: ["#d7192a", "#ffffff", "#111318", "#d7192a"], density: 0.93, seed: 22, scale: 0.75 })}
      ${glowDef("s3glow", 3)}
      <linearGradient id="s3screen" x1="0" x2="1"><stop offset="0" stop-color="#3a0ca3"/><stop offset="1" stop-color="#f72585"/></linearGradient>
      <linearGradient id="s3led" x1="0" x2="1"><stop offset="0" stop-color="#00f5d4"/><stop offset=".5" stop-color="#7209b7"/><stop offset="1" stop-color="#00bbf9"/></linearGradient>
      <linearGradient id="s3ribbon" x1="0" x2="1"><stop offset="0" stop-color="#d7192a"/><stop offset=".5" stop-color="#ff5a36"/><stop offset="1" stop-color="#d7192a"/></linearGradient>
      <radialGradient id="s3pool" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    </defs>`;
    s += clouds(51, 5, "#f7b48c", 0.35);
    const tiers = [
      { i: 4, o: 30, h0: 1.6, h1: 16, front: 1.6, frontFill: "#1a1d26", crowd: "s3low", rows: 16, aisle: "#a3aabb", aisleW: 2 },
      { i: 27, o: 58, h0: 21, h1: 46, front: 2.6, frontFill: "url(#s3ribbon)", frontAttrs: `filter="url(#s3glow)"`, crowd: "s3up", rows: 22, aisle: "#8c93a5", aisleW: 1.5, shade: 0.25 },
    ];
    s += stadium({
      shell: "#14161f", surround: "#2c8a3a", led: "s3led", screenFill: "s3screen", screenText: "MATCHDAY", tiers,
      roof: { ri: 8, ro: 66, rh: 52, fh: 3.5, under: "#252935", truss: "#3b4152", fascia: "#e9ecf2", edge: "#ffffff", lamp: "#fff4d6", glow: "s3glow" },
    });
    s += stripes("#2f9a3c", "#3aad47", { cross: true });
    s += blob(0, 34, 70, 40, `fill="url(#s3pool)"`);
    s += markings({});
    s += dugouts("#9fc4e8");
    s += goals({ netId: "s3net" });
    s += cornerFlags("#d7192a");
    return svg(3, s);
  }

  // ---------- 5. European Cup Final: a three-tier bowl at night ----------

  function final() {
    const rand = rng(77);
    let s = sky("s4sky", [[0, "#02040f"], [0.5, "#0a1440"], [1, "#16245e"]]);
    const teamA = ["#ffffff", "#1d4ed8", "#ffffff", "#1d4ed8", "#e6ecff"];
    const teamB = ["#c8102e", "#111111", "#c8102e", "#c8102e", "#111111"];
    const mixed = ["#ffffff", "#1d4ed8", "#c8102e", "#111111", "#ffe8a3"];
    let crowds = "";
    [[1, ""], [0.85, "m"], [0.7, "u"]].forEach(([sc, tag], k) => {
      crowds += crowdDef(`s4c${tag}`, { bg: "#141a33", colors: mixed, density: 0.96, seed: 31 + k, scale: sc });
      crowds += crowdDef(`s4a${tag}`, { bg: "#141a33", colors: teamA, density: 0.97, seed: 41 + k, scale: sc });
      crowds += crowdDef(`s4b${tag}`, { bg: "#141a33", colors: teamB, density: 0.97, seed: 51 + k, scale: sc });
    });
    s += `<defs>${netDef("s4net")}${crowds}
      ${glowDef("s4glow", 4)}
      <pattern id="s4boxes" width="16" height="10" patternUnits="userSpaceOnUse"><rect width="16" height="10" fill="#0a0f24"/><rect x="1.5" y="2" width="13" height="6" fill="#f6d77a" opacity=".6"/></pattern>
      <linearGradient id="s4ribbon" x1="0" x2="1"><stop offset="0" stop-color="#1e3fae"/><stop offset=".5" stop-color="#d4af37"/><stop offset="1" stop-color="#1e3fae"/></linearGradient>
      <linearGradient id="s4screen" x1="0" x2="1"><stop offset="0" stop-color="#0b1a5c"/><stop offset="1" stop-color="#1e3fae"/></linearGradient>
      <linearGradient id="s4beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe3ff" stop-opacity=".34"/><stop offset="1" stop-color="#cfe3ff" stop-opacity="0"/></linearGradient>
      <linearGradient id="s4led" x1="0" x2="1"><stop offset="0" stop-color="#1e3fae"/><stop offset=".5" stop-color="#d4af37"/><stop offset="1" stop-color="#1e3fae"/></linearGradient>
      <radialGradient id="s4pool" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e8f0ff" stop-opacity=".26"/><stop offset="1" stop-color="#e8f0ff" stop-opacity="0"/></radialGradient>
      <radialGradient id="s4gold" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe8a3"/><stop offset=".7" stop-color="#d4af37"/><stop offset="1" stop-color="#8a6a12"/></radialGradient>
    </defs>`;
    let stars = `<g fill="#fff">`;
    for (let i = 0; i < 70; i++) stars += `<circle cx="${r(rand() * W)}" cy="${r(rand() * 90)}" r="${r(0.5 + rand() * 1.2)}" opacity="${r(0.3 + rand() * 0.7)}"/>`;
    s += stars + `</g>`;
    // Fireworks in the gap above the roof.
    const fwColors = ["#ffd166", "#ff4d6d", "#7bdff2", "#ffffff", "#c77dff"];
    for (let i = 0; i < 7; i++) {
      const x = 300 + rand() * 1000, y = 18 + rand() * 42, rad = 18 + rand() * 16;
      const c = fwColors[i % fwColors.length];
      let g = `<g class="fw" style="animation-delay:${r(rand() * 3)}s;transform-origin:${r(x)}px ${r(y)}px">`;
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        g += `<line x1="${r(x + Math.cos(a) * rad * 0.25)}" y1="${r(y + Math.sin(a) * rad * 0.25)}" x2="${r(x + Math.cos(a) * rad)}" y2="${r(y + Math.sin(a) * rad)}" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`;
      }
      s += g + `</g>`;
    }
    const tiers = [
      { i: 4, o: 24, h0: 1.6, h1: 13, front: 1.6, frontFill: "#0b0f22", crowd: "s4c", sides: ["s4a", "s4b"], rows: 14, aisle: "#7f8bb5", aisleW: 2 },
      { i: 22, o: 40, h0: 17, h1: 30, front: 3, frontFill: "url(#s4boxes)", crowd: "s4cm", sides: ["s4am", "s4bm"], rows: 14, aisle: "#6f7aa3", aisleW: 1.6, shade: 0.15 },
      { i: 38, o: 70, h0: 34, h1: 62, front: 2.6, frontFill: "url(#s4ribbon)", frontAttrs: `filter="url(#s4glow)"`, crowd: "s4cu", sides: ["s4au", "s4bu"], rows: 22, aisle: "#5f6a93", aisleW: 1.3, shade: 0.3 },
    ];
    const roofCfg = { ri: 8, ro: 78, rh: 68, fh: 4, under: "#0c1230", truss: "#1f2a55", fascia: "#d4af37", edge: "#ffe8a3", lamp: "#ffffff", glow: "s4glow" };
    s += stadium({ shell: "#0a0e20", surround: "#1f6b33", led: "s4led", screenFill: "s4screen", screenText: "THE FINAL", tiers, roof: roofCfg });
    s += twinkles(tiers, 240, 91);
    s += stripes("#237a38", "#2b8c42", { cross: true });
    s += blob(0, 34, 72, 44, `fill="url(#s4pool)"`);
    s += markings({});
    // Centre-circle banner, drawn flat then laid onto the pitch.
    {
      const [x, y] = P(0, 34);
      const sx = scale(34), sy = (sx * HC) / (Z0 + 34);
      let b = `<g transform="matrix(${r(sx * 10) / 10},0,0,${r(sy * 10) / 10},${r(x)},${r(y)})">`;
      b += `<circle r="9.6" fill="url(#s4gold)"/><circle r="8.2" fill="#0b1a5c"/><circle r="7.6" fill="none" stroke="#d4af37" stroke-width=".25"/>`;
      for (let k = 0; k < 12; k++) {
        const a = (k / 12) * Math.PI * 2;
        b += `<circle cx="${r(Math.cos(a) * 5.8)}" cy="${r(Math.sin(a) * 5.8)}" r=".55" fill="#ffe8a3"/>`;
      }
      b += `<text y="1.2" text-anchor="middle" font-family="Bebas Neue, Impact, sans-serif" font-size="3.6" letter-spacing=".3" fill="#ffe8a3">FINAL</text></g>`;
      s += b;
    }
    s += dugouts("#9fb4ff");
    s += goals({ netId: "s4net" });
    s += cornerFlags("#d4af37");
    // Light beams from the roof.
    let beams = `<g class="beams">`;
    for (const X of [-44, -16, 16, 44]) {
      const [x, y] = P(X, 68 + roofCfg.ri, roofCfg.rh);
      const [px, py] = P(X * 0.6, 30);
      beams += `<path d="M${r(x - 6)},${r(y)}L${r(x + 6)},${r(y)}L${r(px + 120)},${r(py)}L${r(px - 120)},${r(py)}Z" fill="url(#s4beam)"/>`;
    }
    s += beams + `</g>`;
    // Confetti.
    const cc = ["#d4af37", "#ffffff", "#1d4ed8", "#c8102e", "#ffe8a3"];
    let conf = "";
    for (let i = 0; i < 70; i++) {
      const x = rand() * W;
      const dx = (rand() - 0.5) * 160;
      conf += `<rect class="cf" x="${r(x)}" y="-20" width="${r(5 + rand() * 5)}" height="${r(3 + rand() * 3)}" fill="${cc[i % cc.length]}" style="--dx:${r(dx)}px;animation-duration:${r(5 + rand() * 6)}s;animation-delay:${r(-rand() * 10)}s"/>`;
    }
    s += conf;
    return svg(4, s);
  }

  return { build: () => [sunday(), nonLeague(), efl(), premier(), final()] };
})();
