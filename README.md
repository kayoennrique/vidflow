# VidFlow

VidFlow is a video sharing platform.

![Screenshot from Vidflow.](./vidflow.png)

## 🔨 Project features

Currently, the look of the project and its functionality to search an API for video information are ready.

Now, the VidFlow development team has decided to apply the use of new tools that will improve the quality of the project's code, such as ESLint, Prettier, Axios and Vite.

To do this, we will learn how to use **Node.js**, necessary to apply all these tools.

## ✔️ Techniques and technologies used

- Node.js
-NPM
- The ESLint, Prettier, JSON Server, Axios and Vite packages
- Vercel

## Figma Link

[Access Vidflow Figma](https://www.figma.com/file/a0crwitCtGmNIQW0RVIs5H/VidFlow-%7C-Curso-Js---Consumindo-dados-de-uma-API?node-id=0%3A1&mode =dev).

## 🛠️ Open and run the project

After downloading or cloning the project from this repository, you need to have [Node.js](https://nodejs.org/) and [`json-server`](https://www.npmjs.com/package/ json-server) installed.

If you do not have `json-server` installed globally, run the following command:

```bash
npm install -g json-server@0.17.4
```

With Node.js and `json-server` installed, run the following command to make the local video API available:

```bash
json-server --watch backend/videos.json
```

Then open `index.html` in the browser and VidFlow can now be viewed!

## 📚 More project information

This repository goes as far as using ESLint and Prettier, but is not yet using Vite alongside Axios. To use Vite, it was necessary to migrate the code to a new project.