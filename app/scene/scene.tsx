"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas
      aria-label="A jade-green torus knot"
      camera={{ position: [3, 2, 5], fov: 45 }}
      dpr={[1, 2]}
      frameloop="demand"
      fallback={<p>This scene requires WebGL 2.</p>}
    >
      <hemisphereLight args={["#ffffff", "#96b2c0", 1.2]} />
      <directionalLight position={[4, 5, 3]} intensity={3} />
      <mesh>
        <torusKnotGeometry args={[1, 0.32, 128, 24]} />
        <meshStandardMaterial color="#59c9a5" roughness={0.32} />
      </mesh>
      <OrbitControls enablePan={false} minDistance={10} maxDistance={100} />
    </Canvas>
  );
}
