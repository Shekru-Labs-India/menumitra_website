"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ShinyTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  shineColor?: string;
  duration?: number;
}

export default function ShinyText({
  text,
  className = "",
  as: Component = "div",
  shineColor = "#ffffff",
  duration = 2,
}: ShinyTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !shineRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    
    tl.to(shineRef.current, {
      x: "100%",
      duration,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [duration]);

  return (
    <Component
      ref={containerRef}
      className={`relative inline-block overflow-hidden ${className}`}
    >
      <span className="relative z-10">{text}</span>
      <div
        ref={shineRef}
        className="absolute inset-0 -translate-x-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${shineColor}, transparent)`,
          mixBlendMode: "overlay",
        }}
      />
    </Component>
  );
}
