@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;400;500&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Base */
  --bg: #F6F4F0;
  --surface: #EDEAE3;
  --surface-2: #E2DED5;
  --border: #CCC8BE;

  /* Text */
  --text-primary: #141210;
  --text-secondary: #5C5850;
  --text-muted: #9A9690;

  /* Primary accent — vivid teal */
  --accent: #0F8A7E;
  --accent-light: #DCF2EF;
  --accent-hover: #0A6D63;

  /* Second accent — warm amber, used sparingly */
  --amber: #C8761A;
  --amber-light: #FDF0E0;

  /* Deep navy — used for dark section bg & strong contrast moments */
  --navy: #111827;
  --navy-surface: #1C2535;
  --navy-border: #2D3748;
  --navy-text: #E8E6E1;
  --navy-text-muted: #8896AB;

  --font-display: 'DM Serif Display', serif;
  --font-body: 'DM Sans', sans-serif;

  --radius: 4px;
  --radius-lg: 10px;

  --transition: 200ms ease;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: var(--accent);
  color: #fff;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}
