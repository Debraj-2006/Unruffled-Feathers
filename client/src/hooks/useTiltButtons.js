import { useEffect } from "react";

export function useTiltButtons() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const setVars = (el, vars) => {
      Object.entries(vars).forEach(([key, value]) => el.style.setProperty(key, value));
    };

    const onMove = (e) => {
      const target = e.target.closest(".btn");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      setVars(target, {
        "--tilt-x": `${(0.5 - py) * 18}deg`,
        "--tilt-y": `${(px - 0.5) * 22}deg`,
        "--tilt-z": target.dataset.pressed ? "2px" : "10px",
        "--tilt-lift": target.dataset.pressed ? "0px" : "-4px",
      });
    };

    const onLeave = (e) => {
      const target = e.target.closest(".btn");
      if (!target || (e.relatedTarget && target.contains(e.relatedTarget))) return;
      delete target.dataset.pressed;
      setVars(target, {
        "--tilt-x": "0deg",
        "--tilt-y": "0deg",
        "--tilt-z": "0px",
        "--tilt-lift": "0px",
        "--tilt-scale": "1",
      });
    };

    const onDown = (e) => {
      const target = e.target.closest(".btn");
      if (!target) return;
      target.dataset.pressed = "1";
      setVars(target, { "--tilt-z": "1px", "--tilt-lift": "0px", "--tilt-scale": "0.96" });
    };

    const onUp = (e) => {
      const target = e.target.closest(".btn");
      if (!target) return;
      delete target.dataset.pressed;
      setVars(target, { "--tilt-z": "10px", "--tilt-lift": "-4px", "--tilt-scale": "1" });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onLeave, { passive: true });
    document.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerup", onUp, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
    };
  }, []);
}
