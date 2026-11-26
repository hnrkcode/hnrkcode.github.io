import type { Metadata } from "next";
import SceneViewer from "./scene/scene-viewer";

export const metadata: Metadata = {
  title: "GitHub Pages",
  description: "GitHub Pages site.",
};

export default function Home() {
  return (
    <main
      aria-label="Torus knot"
      className="h-dvh w-full overflow-hidden bg-[#15232c] text-white"
    >
      <SceneViewer />
    </main>
  );
}
