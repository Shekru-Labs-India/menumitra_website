"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SplitTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}

export default function SplitText({
  text,
  delay = 0,
  duration = 0.6,
  className = "",
  as: Component = "div",
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");
    
    // Set initial state
    gsap.set(chars, { y: "100%", opacity: 0 });

    // Animate characters
    gsap.to(chars, {
      y: "0%",
      opacity: 1,
      duration,
      delay,
      stagger: 0.02,
      ease: "power2.out",
    });

    return () => {
      gsap.killTweensOf(chars);
    };
  }, [text, delay, duration]);

  const splitText = text.split("").map((char, index) => (
    <span
      key={index}
      className="char inline-block overflow-hidden"
      style={{ display: char === " " ? "inline" : "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <Component ref={containerRef} className={className}>
      {splitText}
    </Component>
  );
}
