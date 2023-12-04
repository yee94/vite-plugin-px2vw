# vite-plugin-px2vw

A vite plugin for transform px to vw.

## Install

```bash
npm i vite-plugin-px2vw -D
```

## Usage

```js
// vite.config.js
import { defineConfig } from "vite";
import px2vw from "vite-plugin-px2vw";

export default defineConfig({
  plugins: [px2vw()],
});
```
