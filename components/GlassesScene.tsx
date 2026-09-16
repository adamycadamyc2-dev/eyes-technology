"use client";
import { useState, useRef, useEffect } from "react";

export default function GlassesScene() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      setRotation({
        x: y * 10,
        y: x * 15,
      });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center py-4 cursor-grab active:cursor-grabbing"
      style={{ perspective: "2000px" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/8 rounded-full blur-3xl" />
      </div>

      {/* 3D Container */}
      <div
        className="relative w-full max-w-3xl transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Main product image */}
        <img
          src="/images/glasses-case.png"
          alt="MT5 Ultra Smart Glasses with Charging Case"
          className="relative w-full h-auto object-contain"
          style={{
            filter: `
              drop-shadow(0 40px 80px rgba(0, 240, 255, 0.25))
              drop-shadow(0 20px 40px rgba(176, 38, 255, 0.15))
              drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4))
            `,
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}