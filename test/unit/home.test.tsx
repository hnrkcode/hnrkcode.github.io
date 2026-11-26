import { render, screen, within } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Home from "@/app/page";

vi.mock("@/app/scene/scene-viewer", () => ({
  default: () => <canvas aria-label="Scene viewer" />,
}));

test("the scene viewer fills the homepage without accompanying text", () => {
  render(<Home />);
  const main = screen.getByRole("main", { name: "Torus knot" });
  expect(within(main).getByLabelText("Scene viewer")).toBeDefined();
  expect(main.textContent).toBe("");
});
