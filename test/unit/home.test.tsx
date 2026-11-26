import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Home from "@/app/page";

afterEach(cleanup);

test("the homepage tells visitors where to start editing", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  expect(main.getByRole("heading", { level: 1 }).textContent).toBe(
    "To get started, edit the page.tsx file.",
  );
});

test("visitors can find the Next.js documentation from the homepage", () => {
  render(<Home />);
  const link = screen.getByRole<HTMLAnchorElement>("link", {
    name: "Documentation",
  });
  const destination = new URL(link.href);
  expect(destination.origin).toBe("https://nextjs.org");
  expect(destination.pathname).toBe("/docs");
});
