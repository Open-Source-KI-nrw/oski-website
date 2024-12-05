// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/static` can be served as a static site.

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const manifest = JSON.parse(
  fs.readFileSync(toAbsolute("dist/static/.vite/ssr-manifest.json"), "utf-8")
);
const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

// determine routes to pre-render from src/pages
const routesToPrerender = fs
  .readdirSync(toAbsolute("src/pages"))
  .map((file) => {
    const name = file.replace(/\.vue$/, "").toLowerCase();
    return name === "home" ? `/` : `/${name}`;
  });

(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const [appHtml, preloadLinks, header] = await render(url, manifest);

    const html = template
      .replace(`<!--app-head-->`, header.headTags)
      .replace(`<!--preload-links-->`, preloadLinks)
      .replace(`<!--app-html-->`, appHtml);

    // const filePath = `dist/static${url === "/" ? "/index" : url}.html`;

    // Workaround for our environment
    let filePath = "dist/static";

    if (url === "/") {
      filePath += "/index.html";
    } else {
      fs.mkdirSync(toAbsolute(`${filePath}${url}`));
      filePath += `${url}/index.html`;
    }
    // End workaround

    fs.writeFileSync(toAbsolute(filePath), html);
    console.log("pre-rendered:", filePath);
  }

  // done, delete .vite directory including ssr manifest
  fs.rmSync(toAbsolute("dist/static/.vite"), { recursive: true });
})();
