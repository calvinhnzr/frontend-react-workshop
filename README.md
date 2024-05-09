# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

1. Install the dependencies

```bash
npm i
```

2. Start the development server

```bash
npm run dev
```

## Folder Structure

1. **dist/** - The output directory for the build
2. **public/** - The directory where all the static files are stored. e.g. images, fonts, etc.
3. **src/** - The directory where all the source code is stored. e.g. components, styles, etc.

```
.
└── my-app/
    ├── dist
    ├── node_modules
    ├── public/
    │   └── assets/
    │       ├── fonts/
    │       │   └── ...
    │       ├── images/
    │       │   └── ...
    │       └── vite.svg
    ├── src/
    │   ├── components/
    │   │   ├── Button.jsx
    │   │   └── ...
    │   ├── helpers/
    │   │   ├── fetchData.jsx
    │   │   └── ...
    │   ├── styles/
    │   │   ├── base.css
    │   │   └── ...
    │   ├── App.jsx
    │   ├── main.css
    │   └── main.jsx
    ├── .gitignore
    ├── index.html
    ├── jsonfig.json
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```
