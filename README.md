# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Pre Stack dependencies
## SWC for build
### Installed swc
+ npm i -D @swc/cli @swc/core
#### Transpile JavaScript file and emit to stdout
+ npx swc ./file.js

**package.json**
```javascript
"scripts": {
  "build:swc": "swc src -d dist"
}
```
