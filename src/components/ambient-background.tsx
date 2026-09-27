"use client";

import { useEffect, useState } from "react";

/**
 * AmbientBackground — calm sunset-cyberpunk atmosphere.
 * Three soft color fields (amber, coral, teal) drift slowly.
 * Mouse parallax is enabled only on fine pointers (desktop),
 * disabled for touch devices and reduced-motion users.
 */
export function AmbientBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden="true" className="ambient">
      <div
        className="ambient-field ambient-amber"
        style={{ transform: `translate3d(${offset.x * -18}px, ${offset.y * -12}px, 0)` }}
      />
      <div
        className="ambient-field ambient-coral"
        style={{ transform: `translate3d(${offset.x * 22}px, ${offset.y * 14}px, 0)` }}
      />
      <div
        className="ambient-field ambient-teal"
        style={{ transform: `translate3d(${offset.x * -12}px, ${offset.y * 18}px, 0)` }}
      />
      <div className="ambient-grid" />
      <div className="ambient-grain" />
    </div>
  );
}
