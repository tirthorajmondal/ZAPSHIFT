# ZapShift Client

Frontend client for the ZapShift parcel delivery platform, built with React and Vite.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- DaisyUI
- React Router
- ESLint 9

## Prerequisites

Make sure you have installed:

- Node.js (LTS recommended)
- npm

Check versions:

```powershell
node -v
npm -v
```

## Getting Started

From inside the `Root` folder:

```powershell
cd .\client
npm install
npm run dev
```

Vite usually runs on `http://localhost:5173`.

## Available Scripts

Run these inside `client`:

```powershell
npm run dev
npm run build
npm run preview
npm run lint
```

- `dev`: Starts the development server
- `build`: Creates a production build
- `preview`: Serves the production build locally
- `lint`: Runs ESLint checks

## Project Structure

```text
client/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ contexts/
│  ├─ hooks/
│  ├─ Layouts/
│  ├─ Pages/
│  ├─ Routes/
│  ├─ index.css
│  └─ main.jsx
├─ eslint.config.js
├─ vite.config.js
└─ package.json
```

## Notes

- Static JSON/content files are under `src/assets/data`.
- Route definitions are in `src/Routes/Router.jsx`.
- Shared UI components are in `src/Pages/shared`.
