const MOVED_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>tools → dapur.dev</title>
<meta name="description" content="tools.achmadnaufal.com has moved to tools.dapur.dev">
<meta name="color-scheme" content="dark">
<meta name="theme-color" content="#050505">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #050505;
  --fg: #eeeae0;
  --accent: #78ff8c;
  --muted: #6a6a66;
}
html, body { height: 100%; }
body {
  background: var(--bg);
  color: var(--fg);
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 13px;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: clamp(1.25rem, 4vw, 2.5rem);
  -webkit-font-smoothing: antialiased;
}
.card { max-width: 520px; text-align: center; }
.kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent);
  animation: pulse 2.6s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.25); }
}
h1 {
  font-weight: 500;
  font-size: clamp(1.1rem, 3.5vw, 1.35rem);
  letter-spacing: 0.1em;
  line-height: 1.55;
  margin-bottom: 1.4rem;
}
h1 b {
  color: var(--accent);
  font-weight: 500;
  letter-spacing: 0.04em;
}
p.sub {
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  line-height: 1.8;
  margin-bottom: 2rem;
}
.cta {
  display: inline-block;
  padding: 0.95rem 1.6rem;
  border: 1px solid var(--fg);
  color: var(--fg);
  text-decoration: none;
  font-size: 0.86rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  transition: color 180ms ease, border-color 180ms ease, background 180ms ease;
}
.cta:hover, .cta:focus-visible {
  color: var(--bg);
  background: var(--accent);
  border-color: var(--accent);
  outline: none;
}
footer {
  position: fixed;
  bottom: clamp(1.25rem, 3.5vw, 2.25rem);
  left: clamp(1.25rem, 3.5vw, 2.25rem);
  right: clamp(1.25rem, 3.5vw, 2.25rem);
  display: flex;
  justify-content: space-between;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
}
footer a { color: var(--muted); text-decoration: none; }
footer a:hover { color: var(--fg); }
</style>
</head>
<body>
<main class="card">
<div class="kicker"><span class="dot" aria-hidden="true"></span>notice · tools relocated</div>
<h1>tools.achmadnaufal.com<br>has moved to<br><b>tools.dapur.dev</b></h1>
<p class="sub">update your bookmarks.<br>same tools, same access gate, new home.</p>
<a class="cta" href="https://tools.dapur.dev">go to tools.dapur.dev →</a>
</main>
<footer>
<span>tools.achmadnaufal.com</span>
<a href="https://achmadnaufal.com">← achmadnaufal.com</a>
</footer>
</body>
</html>`;

export const onRequest = async (context) => {
  const url = new URL(context.request.url);
  if (url.hostname === "tools.achmadnaufal.com") {
    return new Response(MOVED_HTML, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=3600",
      },
    });
  }
  return context.next();
};
