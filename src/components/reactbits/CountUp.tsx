"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function CountUp({
  end,
  duration = 2,
  delay = 0,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!countRef.current) return;

    const obj = { value: 0 };
    
    gsap.to(obj, {
      value: end,
      duration,
      delay,
      ease: "power2.out",
      onUpdate: () => {
        setCount(obj.value);
      },
    });

    return () => {
      gsap.killTweensOf(obj);
    };
  }, [end, duration, delay]);

  const formatNumber = (num: number) => {
    return num.toFixed(decimals);
  };

  return (
    <span ref={countRef} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}
