/* ============================================
   LEADER-TECH — UNIFIED STYLES
   A cohesive design system for the entire site
============================================ */

/* --- CSS Variables (Design Tokens) --- */
:root {
  /* Core Colors */
  --bg-primary: #06070a;
  --bg-secondary: #070B12;
  --bg-tertiary: #0B0F17;
  --bg-panel: #0B101A;
  
  /* Text Colors */
  --text-primary: #f5f6f7;
  --text-secondary: #A9B3C2;
  --text-muted: #7F8A9B;
  
  /* Accent Colors */
  --accent: #5B87FF;
  --accent-light: #7AA0FF;
  --accent-glow: rgba(95, 155, 255, 0.85);
  
  /* Borders & Shadows */
  --border-light: rgba(245, 246, 247, 0.12);
  --border-medium: rgba(255, 255, 255, 0.10);
  --border-accent: rgba(91, 135, 255, 0.30);
  --shadow-heavy: 0 16px 48px rgba(0, 0, 0, 0.45);
  --shadow-medium: 0 30px 80px rgba(0, 0, 0, 0.55);
  
  /* Layout */
  --max-width: 1120px;
  --header-height: 68px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  
  /* Transitions */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 180ms;
  --duration-normal: 260ms;
}

/* --- Reset & Base --- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  height: 100%;
}

body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--text-primary);
  background: 
    radial-gradient(1100px 700px at 50% 10%, rgba(95, 155, 255, 0.08), transparent 55%),
    var(--bg-primary);
  letter-spacing: -0.01em;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus-visible, button:focus-visible {
  outline: 2px solid rgba(91, 135, 255, 0.55);
  outline-offset: 3px;
}

button {
  font-family: inherit;
  border: none;
  background: none;
  cursor: pointer;
}

ul, ol {
  list-style: none;
}

img, svg {
  display: block;
  max-width: 100%;
}

/* --- Layout Utilities --- */
.wrap {
  width: min(var(--max-width), calc(100% - 48px));
  margin: 0 auto;
}

/* ============================================
   HEADER
============================================ */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: 
    background var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out),
    backdrop-filter var(--duration-normal) var(--ease-out);
}

.header.is-scrolled {
  background: rgba(6, 7, 10, 0.85);
  border-bottom-color: var(--border-light);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  padding: 0 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  transition: opacity var(--duration-fast) ease;
}

.header__brand:hover {
  opacity: 0.85;
}

.header__logo {
  color: var(--accent);
  opacity: 0.9;
}

.header__name {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-size: 13px;
  color: rgba(245, 246, 247, 0.72);
  border-radius: 999px;
  transition: 
    color var(--duration-fast) ease,
    background var(--duration-fast) ease;
}

.nav-link:hover {
  color: rgba(245, 246, 247, 0.95);
  background: rgba(255, 255, 255, 0.04);
}

.nav-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  font-size: 11px;
  border-radius: 999px;
  background: rgba(91, 135, 255, 0.12);
  border: 1px solid rgba(91, 135, 255, 0.25);
  color: rgba(245, 246, 247, 0.8);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header__cta {
  padding: 10px 18px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  background: linear-gradient(180deg, rgba(91, 135, 255, 0.22), rgba(91, 135, 255, 0.10));
  border: 1px solid rgba(91, 135, 255, 0.35);
  border-radius: 999px;
  transition: 
    border-color var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}

.header__cta:hover {
  border-color: rgba(91, 135, 255, 0.55);
  transform: translateY(-1px);
}

.header__menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 8px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
}

.header__menu span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  border-radius: 1px;
  transition: transform var(--duration-fast) ease;
}

.header__menu.is-open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.header__menu.is-open span:nth-child(2) {
  opacity: 0;
}

.header__menu.is-open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px 24px;
  background: rgba(6, 7, 10, 0.95);
  border-bottom: 1px solid var(--border-light);
  backdrop-filter: blur(12px);
}

.mobile-nav.is-open {
  display: flex;
}

.mobile-nav__link {
  padding: 12px 16px;
  font-size: 15px;
  color: rgba(245, 246, 247, 0.78);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast) ease;
}

.mobile-nav__link:hover {
  background: rgba(255, 255, 255, 0.04);
}

.mobile-nav__cta {
  margin-top: 12px;
  padding: 14px 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  background: linear-gradient(180deg, rgba(91, 135, 255, 0.22), rgba(91, 135, 255, 0.10));
  border: 1px solid rgba(91, 135, 255, 0.35);
  border-radius: var(--radius-md);
}

/* ============================================
   SECTION 1: HERO
============================================ */
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__vignette {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 50% 25%, rgba(95, 155, 255, 0.18), transparent 42%),
    radial-gradient(circle at 50% 40%, rgba(95, 155, 255, 0.08), transparent 55%),
    radial-gradient(circle at 50% 60%, transparent, rgba(0, 0, 0, 0.72) 65%),
    radial-gradient(circle at 50% 60%, transparent, rgba(0, 0, 0, 0.88) 78%);
}

.hero__grid {
  position: absolute;
  inset: -20% -10%;
  background-image:
    linear-gradient(to right, rgba(245, 246, 247, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(245, 246, 247, 0.08) 1px, transparent 1px);
  background-size: 56px 56px;
  opacity: 0.18;
  mask-image: radial-gradient(circle at 50% 35%, black, transparent 70%);
  -webkit-mask-image: radial-gradient(circle at 50% 35%, black, transparent 70%);
}

.hero__glow {
  position: absolute;
  left: 50%;
  top: 34%;
  transform: translate(-50%, -50%);
  width: 560px;
  height: 360px;
  background: radial-gradient(circle at 50% 50%, rgba(95, 155, 255, 0.26), transparent 60%);
  filter: blur(2px);
  opacity: 0.95;
  animation: breathe 9s ease-in-out infinite;
}

.hero__network {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.95;
  filter: drop-shadow(0 0 18px rgba(95, 155, 255, 0.18));
  mask-image: radial-gradient(circle at 50% 35%, black, transparent 78%);
  -webkit-mask-image: radial-gradient(circle at 50% 35%, black, transparent 78%);
}

.net-line {
  fill: none;
  stroke: rgba(95, 155, 255, 0.75);
  stroke-width: 2.6;
  stroke-linecap: round;
  opacity: 0.70;
  animation: lineGlow 11s ease-in-out infinite;
}

.net-line--thin {
  stroke-width: 1.8;
  opacity: 0.55;
}

.net-node .node-box {
  fill: rgba(6, 7, 10, 0.55);
  stroke: rgba(95, 155, 255, 0.26);
  stroke-width: 1.2;
}

.net-node .node-glyph {
  fill: none;
  stroke: rgba(245, 246, 247, 0.62);
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.net-node--small .node-glyph,
.net-node--tiny .node-glyph {
  stroke-width: 1.6;
}

.hero__beam {
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translateX(-50%);
  width: 3px;
  height: 180px;
  background: linear-gradient(to bottom,
    transparent,
    rgba(95, 155, 255, 0.62),
    transparent
  );
  opacity: 0.65;
  filter: blur(0.25px);
  animation: breathe 8s ease-in-out infinite;
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  transform: translateY(-18px);
  padding: 0 20px;
}

.hero__title {
  margin: 0 0 10px;
  font-size: clamp(48px, 5.4vw, 78px);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: rgba(245, 246, 247, 0.90);
}

.hero__sub {
  margin: 0 0 24px;
  font-size: clamp(18px, 2.1vw, 30px);
  font-weight: 400;
  line-height: 1.25;
  color: rgba(245, 246, 247, 0.70);
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(245, 246, 247, 0.90);
  background: rgba(95, 155, 255, 0.16);
  border: 1px solid rgba(95, 155, 255, 0.30);
  border-radius: var(--radius-md);
  transition: 
    border-color var(--duration-fast) ease,
    background var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}

.hero__button:hover {
  background: rgba(95, 155, 255, 0.22);
  border-color: rgba(95, 155, 255, 0.44);
  transform: translateY(-2px);
}

.hero__scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(245, 246, 247, 0.45);
  font-size: 12px;
  animation: fadeInUp 1s ease 1.5s both;
}

.scroll-dot {
  animation: scrollBounce 2s ease-in-out infinite;
}

/* Hero Animations */
@keyframes breathe {
  0%, 100% { opacity: 0.92; }
  50% { opacity: 1; }
}

@keyframes lineGlow {
  0%, 100% { opacity: 0.62; }
  50% { opacity: 0.80; }
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* ============================================
   SECTION 2: PLATFORM
============================================ */
.layer {
  position: relative;
  padding: 108px 0;
  opacity: 0.74;
  filter: saturate(0.92);
  transition: opacity var(--duration-normal) ease, filter var(--duration-normal) ease;
}

.layer.is-active {
  opacity: 1;
  filter: saturate(1);
}

.layer--platform {
  padding-top: 96px;
  padding-bottom: 140px;
}

.layer--platform .wrap {
  --max-width: 1000px;
}

.section-head {
  max-width: 860px;
  margin-bottom: 32px;
}

.section-badge {
  display: inline-block;
  margin-bottom: 16px;
  padding: 6px 12px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-light);
  background: rgba(91, 135, 255, 0.10);
  border: 1px solid rgba(91, 135, 255, 0.20);
  border-radius: 999px;
}

.h2 {
  margin: 0 0 12px;
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.01em;
}

.sublede {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 78ch;
}

.label {
  margin: 0 0 12px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

/* Platform Layout */
.platform {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 32px;
  align-items: start;
}

.platform__left {
  position: relative;
}

.surface-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.surface-item {
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-primary);
  transition: 
    background var(--duration-fast) ease, 
    border-color var(--duration-fast) ease;
}

.surface-item:hover {
  border-color: rgba(255, 255, 255, 0.13);
  background: rgba(255, 255, 255, 0.03);
}

.surface-item.is-active {
  border-color: rgba(91, 135, 255, 0.30);
  background: linear-gradient(180deg, rgba(91, 135, 255, 0.10), rgba(255, 255, 255, 0.02));
}

.surface-item__icon {
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(11, 15, 23, 0.55);
  color: rgba(234, 240, 250, 0.92);
}

.surface-item__icon svg {
  width: 18px;
  height: 18px;
  opacity: 0.92;
}

.surface-item__text {
  display: grid;
  gap: 4px;
  flex: 1 1 auto;
}

.surface-item__title {
  font-size: 14px;
  letter-spacing: 0.01em;
  opacity: 0.96;
}

.surface-item__meta {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
}

.surface-item__chev {
  flex: 0 0 auto;
  color: rgba(255, 255, 255, 0.38);
  font-size: 13px;
}

/* Micro Cards */
.micro {
  margin-top: 14px;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.015);
}

.micro__title {
  margin: 0 0 6px;
  font-size: 13px;
  font-weight: 500;
  opacity: 0.9;
}

.micro__body {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.62);
}

/* Trust List */
.trust-list {
  margin: 10px 0 0;
  display: grid;
  gap: 8px;
}

.trust-list li {
  display: grid;
  gap: 2px;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.trust-list li:first-child {
  border-top: 0;
  padding-top: 0;
}

.trust-list span {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.84);
}

.trust-list em {
  font-style: normal;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.45;
}

/* Preview Panel */
.platform__right {
  position: relative;
}

.preview {
  position: sticky;
  top: 92px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(11, 15, 23, 0.56);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: var(--shadow-heavy);
  overflow: hidden;
}

.preview__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(800px 240px at 30% -20%, rgba(91, 135, 255, 0.16), transparent 55%),
    rgba(255, 255, 255, 0.02);
}

.preview__title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  letter-spacing: 0.01em;
  opacity: 0.95;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(91, 135, 255, 0.85);
  box-shadow: 0 0 0 4px rgba(91, 135, 255, 0.12);
}

.chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.chip {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.72);
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.preview__body {
  padding: 16px;
  min-height: 420px;
}

.preview__foot {
  padding: 12px 16px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.015);
}

.footnote {
  margin: 0;
  font-size: 12px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.65);
}

.preview__beam {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  transform: translateX(-0.5px);
  background: linear-gradient(to bottom, transparent, rgba(91, 135, 255, 0.20), transparent);
  opacity: 0.35;
  pointer-events: none;
}

/* Preview Inner UI */
.pv {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 12px;
}

.pvNav {
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  padding: 10px;
}

.pvNav__h {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.50);
  margin: 0 0 10px;
}

.pvNav__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  border: 1px solid transparent;
}

.pvNav__item.is-on {
  background: rgba(91, 135, 255, 0.08);
  border-color: rgba(91, 135, 255, 0.20);
  color: rgba(255, 255, 255, 0.92);
}

.pvNav__badge {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
}

.pvMain {
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
}

.pvMain__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.pvMain__bar strong {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.01em;
  opacity: 0.92;
}

.pvMain__bar span {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
}

.pvMain__grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 10px;
  padding: 12px;
}

.pvCard {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(11, 15, 23, 0.45);
  padding: 10px;
}

.pvCard__t {
  margin: 0 0 8px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.52);
}

.pvRow {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 7px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.78);
}

.pvRow:last-child {
  border-bottom: 0;
}

.pvRow em {
  font-style: normal;
  color: rgba(255, 255, 255, 0.52);
}

.section-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.55;
  background:
    radial-gradient(900px 540px at 20% 40%, rgba(91, 135, 255, 0.10), transparent 60%),
    radial-gradient(900px 540px at 80% 50%, rgba(122, 160, 255, 0.08), transparent 60%);
  mask-image: linear-gradient(to bottom, transparent, black 18%, black 82%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 18%, black 82%, transparent);
}

/* ============================================
   SECTION 3: DEMO / AI SHOWCASE
============================================ */
.stage {
  position: relative;
  min-height: 736px;
  height: 100vh;
  max-height: 980px;
  width: 100%;
  overflow: hidden;
  isolation: isolate;
}

.stage__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg {
  position: absolute;
  inset: -30%;
  pointer-events: none;
  z-index: 0;
}

.bg-vignette {
  inset: 0;
  background:
    radial-gradient(900px 520px at 50% 18%, rgba(255, 255, 255, 0.06), transparent 55%),
    radial-gradient(1200px 680px at 50% 70%, rgba(60, 80, 120, 0.25), transparent 60%),
    radial-gradient(900px 520px at 12% 18%, rgba(255, 255, 255, 0.035), transparent 60%),
    radial-gradient(900px 520px at 88% 22%, rgba(255, 255, 255, 0.03), transparent 60%),
    radial-gradient(1200px 900px at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.75) 78%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.35) 60%, rgba(0, 0, 0, 0.6));
  filter: blur(0.2px);
}

.bg-glow {
  background:
    radial-gradient(700px 260px at 50% 52%, rgba(255, 255, 255, 0.08), transparent 62%),
    radial-gradient(1100px 520px at 50% 110%, rgba(80, 120, 180, 0.33), transparent 60%);
  filter: blur(10px);
  opacity: 0.65;
}

.bg-grain {
  inset: 0;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}

.stage__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: clamp(44px, 6.2vh, 64px);
}

.demo-brand {
  display: flex;
  align-items: center;
  gap: 14px;
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.55));
}

.demo-icon {
  display: grid;
  place-items: center;
  transform: translateY(1px);
  opacity: 0.95;
}

.demo-title {
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.2px;
  font-size: clamp(32px, 3.6vw, 52px);
  line-height: 1;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
}

.demo-subtitle {
  margin: 14px 0 34px;
  font-weight: 500;
  font-size: clamp(16px, 1.8vw, 24px);
  color: rgba(255, 255, 255, 0.72);
  text-shadow: 0 10px 26px rgba(0, 0, 0, 0.55);
}

/* Prompt Bar */
.prompt {
  width: min(860px, calc(100% - 56px));
}

.prompt-shell {
  position: relative;
  height: 76px;
  border-radius: var(--radius-lg);
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.07));
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.prompt-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  pointer-events: none;
  background: radial-gradient(1100px 120px at 50% 0%, rgba(255, 255, 255, 0.12), transparent 55%);
  opacity: 0.7;
}

.prompt input {
  flex: 1;
  height: 56px;
  border-radius: var(--radius-md);
  border: 0;
  outline: none;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
  padding: 0 18px;
  font-size: 16px;
  font-family: inherit;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: background var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
}

.prompt input::placeholder {
  color: rgba(255, 255, 255, 0.50);
}

.prompt input:focus {
  background: rgba(255, 255, 255, 0.10);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.10),
    0 0 0 1px rgba(255, 255, 255, 0.12),
    0 18px 50px rgba(0, 0, 0, 0.45);
}

.prompt button {
  height: 56px;
  padding: 0 24px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(91, 135, 255, 0.40), rgba(91, 135, 255, 0.25));
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  font-size: 15px;
  box-shadow:
    0 18px 38px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition: transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
}

.prompt button:hover {
  transform: translateY(-1px);
  box-shadow:
    0 22px 48px rgba(0, 0, 0, 0.52),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
}

.prompt button:active {
  transform: translateY(0px) scale(0.99);
}

.helper-row {
  height: 22px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.hint {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.40);
}

/* Phone Mockups */
.phones {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 360px;
  z-index: 1;
  pointer-events: none;
}

.phones-shadow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -40px;
  width: min(1150px, 92vw);
  height: 220px;
  background: radial-gradient(closest-side, transparent, rgba(0, 0, 0, 0.70));
  filter: blur(20px);
  opacity: 0.9;
}

.phone {
  position: absolute;
  bottom: 20px;
  filter: drop-shadow(0 30px 55px rgba(0, 0, 0, 0.65));
  opacity: 0.96;
}

.device {
  position: relative;
  width: 235px;
  height: 455px;
  border-radius: 34px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.06));
  border: 1px solid rgba(255, 255, 255, 0.10);
  padding: 12px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.notch {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 22px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.07);
  z-index: 5;
}

.screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 26px;
  overflow: hidden;
  background:
    radial-gradient(260px 240px at 50% 20%, rgba(255, 255, 255, 0.10), transparent 60%),
    linear-gradient(180deg, #0d1622, #0a0f17 40%, #070b10);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.screen.light {
  background:
    radial-gradient(280px 240px at 50% 10%, rgba(255, 255, 255, 0.45), transparent 62%),
    linear-gradient(180deg, #f3f5f8, #e7edf4 35%, #d7e1ee);
}

.screen.map {
  background:
    radial-gradient(280px 220px at 50% 12%, rgba(255, 255, 255, 0.10), transparent 62%),
    linear-gradient(180deg, #0f2236, #0b1524 55%, #07101a);
}

.status {
  height: 38px;
  padding: 10px 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.82);
  opacity: 0.92;
}

.status.dark {
  color: rgba(20, 20, 22, 0.80);
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 5px;
}

.dot-status {
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  opacity: 0.9;
}

.dot-status.dark {
  background: rgba(30, 30, 33, 0.7);
}

.pill-status {
  width: 22px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  opacity: 0.85;
}

.pill-status.dark {
  background: rgba(30, 30, 33, 0.5);
}

.screen-title {
  padding: 10px 14px 6px;
  font-weight: 600;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.86);
}

.screen-title.dark {
  color: rgba(20, 20, 22, 0.84);
}

.screen-card {
  margin: 8px 12px;
  padding: 10px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.screen-card.white {
  background: rgba(255, 255, 255, 0.80);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.screen-card.mini {
  margin-top: 10px;
  opacity: 0.9;
}

.screen-card.overlay {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 56px;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.line {
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  margin: 8px 0;
}

.line.dark {
  background: rgba(25, 25, 28, 0.14);
}

.w85 { width: 85%; } .w82 { width: 82%; } .w80 { width: 80%; } .w72 { width: 72%; }
.w70 { width: 70%; } .w64 { width: 64%; } .w62 { width: 62%; } .w60 { width: 60%; }
.w58 { width: 58%; } .w55 { width: 55%; } .w54 { width: 54%; } .w52 { width: 52%; }
.w50 { width: 50%; } .w48 { width: 48%; } .w46 { width: 46%; } .w45 { width: 45%; }
.w38 { width: 38%; }

.list {
  margin: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chip-mock {
  width: 20px;
  height: 20px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.10);
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background:
    radial-gradient(16px 16px at 30% 30%, rgba(255, 255, 255, 0.25), transparent 65%),
    rgba(255, 255, 255, 0.10);
  border: 1px solid rgba(255, 255, 255, 0.10);
}

.avatar.tiny {
  width: 22px;
  height: 22px;
}

.profile {
  margin: 6px 12px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.meta {
  flex: 1;
}

.bottom-input {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 12px;
  height: 38px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.send {
  width: 26px;
  height: 26px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

/* Map */
.map-wrap {
  position: relative;
  height: 250px;
  margin: 6px 10px 0;
  border-radius: 16px;
  overflow: hidden;
  background:
    radial-gradient(200px 180px at 35% 40%, rgba(120, 160, 210, 0.18), transparent 70%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.35));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.map-grid {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.30), transparent 2px),
    radial-gradient(1px 1px at 60% 65%, rgba(255, 255, 255, 0.25), transparent 2px),
    radial-gradient(1px 1px at 80% 35%, rgba(255, 255, 255, 0.25), transparent 2px);
  opacity: 0.5;
}

.arc {
  position: absolute;
  width: 320px;
  height: 180px;
  border-radius: 999px;
  border: 2px solid rgba(120, 255, 190, 0.25);
  filter: blur(0.2px);
}

.arc.a1 { left: -90px; top: 70px; transform: rotate(-18deg); }
.arc.a2 { left: 10px; top: 40px; transform: rotate(16deg); border-color: rgba(120, 255, 190, 0.32); }
.arc.a3 { left: -10px; top: 90px; transform: rotate(38deg); border-color: rgba(120, 255, 190, 0.18); }

.pin {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(120, 255, 190, 0.95);
  box-shadow: 0 0 0 4px rgba(120, 255, 190, 0.12), 0 0 18px rgba(120, 255, 190, 0.22);
}

.pin.pA { left: 50px; top: 150px; }
.pin.pB { left: 120px; top: 115px; }
.pin.pC { left: 210px; top: 95px; }
.pin.pD { left: 190px; top: 170px; }

/* Light list */
.lightlist .row {
  padding: 8px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.ico {
  width: 18px;
  height: 18px;
  border-radius: 6px;
  background: rgba(25, 25, 28, 0.12);
  border: 1px solid rgba(25, 25, 28, 0.10);
}

.spark {
  height: 40px;
  border-radius: 12px;
  margin-top: 10px;
  background:
    radial-gradient(60px 40px at 20% 60%, rgba(60, 180, 120, 0.35), transparent 62%),
    radial-gradient(60px 40px at 60% 40%, rgba(80, 140, 220, 0.35), transparent 62%),
    radial-gradient(80px 50px at 82% 58%, rgba(200, 120, 160, 0.25), transparent 70%);
  border: 1px dashed rgba(25, 25, 28, 0.10);
}

/* Phone positions */
.p1 { left: -25px; bottom: 34px; transform: scale(0.86); opacity: 0.85; }
.p2 { left: 250px; bottom: 30px; transform: scale(0.92); opacity: 0.92; }
.p3 { left: 50%; bottom: 12px; transform: translateX(-50%) scale(1.06); }
.p4 { right: 265px; bottom: 30px; transform: scale(0.92); opacity: 0.92; }
.p5 { right: -25px; bottom: 34px; transform: scale(0.86); opacity: 0.85; }

/* Toast */
.toast {
  position: absolute;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  padding: 10px 14px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.86);
  font-size: 13px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-fast) ease, transform var(--duration-fast) ease;
  z-index: 10;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(-4px);
}

/* ============================================
   FOOTER
============================================ */
.footer {
  position: relative;
  padding: 80px 0 40px;
  background: 
    radial-gradient(800px 400px at 50% 0%, rgba(91, 135, 255, 0.06), transparent 60%),
    linear-gradient(180deg, var(--bg-primary), #050609);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer__glow {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(circle, rgba(91, 135, 255, 0.08), transparent 60%);
  pointer-events: none;
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer__top {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 80px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  font-size: 16px;
  font-weight: 600;
}

.footer__logo svg {
  color: var(--accent);
  opacity: 0.85;
}

.footer__tagline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);
  max-width: 260px;
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.footer__col h3 {
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
}

.footer__col a {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.70);
  transition: color var(--duration-fast) ease;
}

.footer__col a:hover {
  color: var(--text-primary);
}

.footer-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  font-size: 10px;
  border-radius: 999px;
  background: rgba(91, 135, 255, 0.12);
  border: 1px solid rgba(91, 135, 255, 0.25);
  color: var(--accent-light);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
}

.footer__copy {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
}

.footer__social {
  display: flex;
  gap: 12px;
}

.footer__social a {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.02);
  color: rgba(255, 255, 255, 0.60);
  transition: 
    border-color var(--duration-fast) ease,
    color var(--duration-fast) ease,
    background var(--duration-fast) ease;
}

.footer__social a:hover {
  border-color: rgba(91, 135, 255, 0.35);
  background: rgba(91, 135, 255, 0.08);
  color: var(--text-primary);
}

.footer__social svg {
  width: 18px;
  height: 18px;
}

/* ============================================
   RESPONSIVE
============================================ */
@media (max-width: 1100px) {
  .p1, .p5 {
    display: none;
  }
  
  .p2 { left: 60px; }
  .p4 { right: 60px; }
}

@media (max-width: 980px) {
  .header__nav {
    display: none;
  }
  
  .header__menu {
    display: flex;
  }
  
  .header__cta {
    display: none;
  }
  
  .platform {
    grid-template-columns: 1fr;
  }
  
  .preview {
    position: relative;
    top: 0;
  }
  
  .footer__top {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  
  .footer__links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 740px) {
  .phones {
    height: 320px;
  }
  
  .p2, .p4 {
    display: none;
  }
  
  .p3 {
    transform: translateX(-50%) scale(1.02);
  }
  
  .demo-subtitle {
    margin-bottom: 26px;
  }
  
  .prompt-shell {
    height: 72px;
  }
  
  .prompt input,
  .prompt button {
    height: 54px;
  }
  
  .hero__scroll {
    display: none;
  }
  
  .footer__links {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .footer__bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .wrap {
    width: calc(100% - 32px);
  }
  
  .header__inner {
    padding: 0 16px;
  }
  
  .hero__title {
    font-size: 36px;
  }
  
  .hero__sub {
    font-size: 16px;
  }
  
  .prompt input {
    font-size: 14px;
    padding: 0 14px;
  }
  
  .prompt button {
    padding: 0 16px;
    font-size: 14px;
  }
}

/* ============================================
   REDUCED MOTION
============================================ */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .hero__glow,
  .net-line,
  .hero__beam,
  .scroll-dot {
    animation: none !important;
  }
}
