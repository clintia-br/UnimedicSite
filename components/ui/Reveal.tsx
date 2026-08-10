"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "aside";
  /** Animate direct children as a staggered group instead of the wrapper itself. */
  group?: boolean;
  y?: number;
  stagger?: number;
  delay?: number;
  duration?: number;
  start?: string;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

/**
 * Fades + lifts content into view once, the moment it crosses `start` in the
 * viewport. With `group`, staggers the wrapper's direct children instead of
 * animating the wrapper as a single block.
 */
export function Reveal({
  children,
  as = "div",
  group = false,
  y = 32,
  stagger = 0.12,
  delay = 0,
  duration = 0.9,
  start = "top 82%",
  className,
  style,
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets: Element[] = group ? Array.from(el.children) : [el];
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref }
  );

  const props = { ref, className, style, id };
  return as === "aside" ? <aside {...props}>{children}</aside> : <div {...props}>{children}</div>;
}
