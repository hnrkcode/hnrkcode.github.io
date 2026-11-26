import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { expect, test } from "vitest";

const html = await readFile("out/index.html", "utf8");
const page = new DOMParser().parseFromString(html, "text/html");

test("the static homepage identifies the scene before JavaScript runs", () => {
  expect(page.querySelector("main")?.getAttribute("aria-label")).toBe(
    "Torus knot",
  );
});

test("the export includes the local assets referenced by the homepage", async () => {
  const homepage = new URL("https://hnrkcode.github.io/");
  const stylesheets = page.querySelectorAll<HTMLLinkElement>(
    'link[rel~="stylesheet"][href]',
  );
  expect(stylesheets.length).toBeGreaterThan(0);

  const sources = [
    ...Array.from(stylesheets, (link) => link.getAttribute("href")!),
    ...Array.from(page.querySelectorAll("script[src], img[src]"), (element) =>
      element.getAttribute("src")!,
    ),
  ];
  for (const source of sources) {
    const url = new URL(source, homepage);
    if (url.origin === homepage.origin) {
      const file = join("out", decodeURIComponent(url.pathname));
      expect((await stat(file)).isFile(), file).toBe(true);
    }
  }
});
