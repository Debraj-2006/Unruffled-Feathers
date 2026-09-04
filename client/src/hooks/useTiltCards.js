import { useEffect } from "react";

const SELECTOR = ".service-card, .team-card, .opportunity-card, .market-card";

export function useTiltCards() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e) => {
      const card = e.target.closest(SELECTOR);
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * 9;
      const ry = (px - 0.5) * 11;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) translateZ(16px)`;
      card.style.setProperty("--spot-x", `${px * 100}%`);
      card.style.setProperty("--spot-y", `${py * 100}%`);
      card.style.setProperty("--spot-o", "1");
    };

    const onLeave = (e) => {
      const card = e.target.closest(SELECTOR);
      if (!card || (e.relatedTarget && card.contains(e.relatedTarget))) return;
      card.style.transform = "";
      card.style.removeProperty("--spot-o");
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onLeave, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
    };
  }, []);
}
