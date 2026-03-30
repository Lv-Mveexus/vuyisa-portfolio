# Vuyisa Mpinda — Portfolio

Minimal, professional developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- React 18
- TypeScript 5
- Tailwind CSS 3
- Vite 5

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Nav.tsx         # Fixed navigation with scroll behaviour
│   ├── Hero.tsx        # Landing section with intro and certifications
│   ├── Skills.tsx      # Technical skills grouped by category
│   ├── Projects.tsx    # Project cards with stack tags
│   ├── Contact.tsx     # Contact links (email + LinkedIn)
│   └── Footer.tsx      # Minimal footer
├── data/
│   └── portfolio.ts    # All content in one place — edit here
├── styles/
│   └── globals.css     # CSS variables, reset, typography
├── App.tsx
└── main.tsx
```

## Customisation

All content lives in `src/data/portfolio.ts`. To update the portfolio:

- Edit `personal` to change name, title, email, LinkedIn, or location
- Edit `skills` to add/remove skill categories and items
- Edit `projects` to update project cards
- Edit `certifications` to update the cert strip in the Hero section

## Deployment

Works out of the box with **Vercel**, **Netlify**, or any static host:

```bash
npm run build
# Deploy the /dist folder
```
