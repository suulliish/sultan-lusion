"use client";
// Lenis smooth-scroll + GSAP ScrollTrigger reveals — brings site 4 to the same
// scroll-polish level as sites 1-3. Single ticker (lesson from tonight's site-1
// jank fix): Lenis piped through gsap.ticker, no competing RAF loops.
import { useEffect } from "react";

export default function ScrollFX() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cleanup: (() => void) | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });

      let lenis: import("lenis").default | undefined;
      if (!reduced) {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((t) => lenis!.raf(t * 1000));
        gsap.ticker.lagSmoothing(0);
      }

      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      els.forEach((el, i) => {
        if (reduced) { el.style.opacity = "1"; return; }
        gsap.set(el, { opacity: 0, y: 24 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: (i % 3) * 0.06 }),
        });
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      window.addEventListener("load", () => ScrollTrigger.refresh());

      cleanup = () => { lenis?.destroy(); ScrollTrigger.getAll().forEach((t) => t.kill()); };
    })();

    return () => cleanup?.();
  }, []);

  return null;
}
