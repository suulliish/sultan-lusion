"use client";
// Glossy solid-color primitive cluster — captures Lusion's real stylistic DNA
// (tumbling glossy 3D primitives, not translucent/organic) without copying their
// exact cross geometry or blue/white/black brand. Gold-tone, Sultan's brand.
import { useEffect, useRef } from "react";
import type * as THREE from "three";

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let disposed = false;

    (async () => {
      const THREE = await import("three");
      if (disposed || !canvas) return;

      const parent = canvas.parentElement!;
      const w = parent.clientWidth, h = parent.clientHeight;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.set(0, 0, 6);

      // gold-tone palette, glossy solid primitives (torus/capsule/icosahedron mix)
      const palette = [0xC9A24B, 0xE8C878, 0x8A6B2E, 0x1A1A1A, 0xF0E6C8];
      const group = new THREE.Group();
      const geoms = [
        new THREE.TorusGeometry(0.55, 0.22, 24, 48),
        new THREE.CapsuleGeometry(0.32, 0.7, 8, 16),
        new THREE.IcosahedronGeometry(0.5, 1),
        new THREE.TorusGeometry(0.4, 0.16, 20, 40),
      ];
      const meshes: THREE.Mesh[] = [];
      for (let i = 0; i < 9; i++) {
        const geo = geoms[i % geoms.length];
        const mat = new THREE.MeshStandardMaterial({
          color: palette[i % palette.length],
          metalness: 0.55,
          roughness: 0.28,
        });
        const m = new THREE.Mesh(geo, mat);
        const a = (i / 9) * Math.PI * 2;
        m.position.set(Math.cos(a) * 1.5, Math.sin(a) * 1.0, (Math.random() - 0.5) * 1.2);
        m.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
        m.userData.spin = { x: (Math.random() - 0.5) * 0.006, y: (Math.random() - 0.5) * 0.006 };
        group.add(m);
        meshes.push(m);
      }
      scene.add(group);

      const key = new THREE.DirectionalLight(0xffffff, 2.2);
      key.position.set(4, 5, 4);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xC9A24B, 0.9);
      fill.position.set(-4, -2, 2);
      scene.add(fill);
      scene.add(new THREE.AmbientLight(0x404040, 0.6));

      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const onMove = (e: PointerEvent) => {
        const r = parent.getBoundingClientRect();
        mouse.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
        mouse.ty = ((e.clientY - r.top) / r.height) * 2 - 1;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      const onResize = () => {
        const W = parent.clientWidth, H = parent.clientHeight;
        camera.aspect = W / H; camera.updateProjectionMatrix();
        renderer.setSize(W, H);
      };
      window.addEventListener("resize", onResize);

      function frame() {
        mouse.x += (mouse.tx - mouse.x) * 0.05;
        mouse.y += (mouse.ty - mouse.y) * 0.05;
        group.rotation.y += 0.0022 + mouse.x * 0.001;
        group.rotation.x = mouse.y * 0.15;
        meshes.forEach((m) => { m.rotation.x += m.userData.spin.x; m.rotation.y += m.userData.spin.y; });
        renderer.render(scene, camera);
        if (!reduced) raf = requestAnimationFrame(frame);
      }
      if (reduced) { renderer.render(scene, camera); } else { frame(); }

      return () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("resize", onResize);
      };
    })();

    return () => { disposed = true; if (raf) cancelAnimationFrame(raf); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}
