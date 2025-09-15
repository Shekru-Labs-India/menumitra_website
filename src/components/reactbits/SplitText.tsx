"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SplitTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
  fontWeight?: string;
  fontSize?: string;
  textColor?: string;
  letterSpacing?: string;
  lineHeight?: string;
  textTransform?: string;
  textAlign?: string;
  fontStyle?: string;
  textDecoration?: string;
}

export default function SplitText({
  text,
  delay = 0,
  duration = 0.6,
  className = "",
  as: Component = "div",
  fontWeight = "font-normal",
  fontSize = "",
  textColor = "",
  letterSpacing = "",
  lineHeight = "",
  textTransform = "",
  textAlign = "",
  fontStyle = "",
  textDecoration = "",
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

  // Build the complete className string with all text properties
  const buildClassName = () => {
    const classes = [
      className,
      fontWeight,
      fontSize,
      textColor,
      letterSpacing,
      lineHeight,
      textTransform,
      textAlign,
      fontStyle,
      textDecoration,
    ].filter(Boolean); // Remove empty strings
    
    return classes.join(' ');
  };

  return (
    <Component ref={containerRef} className={buildClassName()}>
      {splitText}
    </Component>
  );
}
