"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type CollapsibleProps = {
  open: boolean;
  header: ReactNode;
  children: ReactNode;
  onToggle: () => void;
  className?: string;
  headerClassName?: string;
  headerStyle?: CSSProperties;
  bodyClassName?: string;
};

/**
 * Height + fade collapse driven by GSAP (not native <details>), so every
 * accordion in the site — FAQ, specialty info, opening hours — shares one
 * smooth, interruptible animation instead of a CSS max-height hack.
 */
export function Collapsible({
  open,
  header,
  children,
  onToggle,
  className,
  headerClassName,
  headerStyle,
  bodyClassName,
}: CollapsibleProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    const panel = panelRef.current;
    const body = bodyRef.current;
    if (!panel || !body) return;

    if (!mounted.current) {
      gsap.set(panel, { height: open ? "auto" : 0 });
      mounted.current = true;
      return;
    }

    const height = body.offsetHeight;
    gsap.killTweensOf(panel);
    if (open) {
      gsap.fromTo(
        panel,
        { height: 0 },
        { height, duration: 0.42, ease: "power2.out", onComplete: () => gsap.set(panel, { height: "auto" }) }
      );
      gsap.fromTo(body, { opacity: 0 }, { opacity: 1, duration: 0.32, delay: 0.06 });
    } else {
      gsap.set(panel, { height });
      gsap.to(panel, { height: 0, duration: 0.36, ease: "power2.inOut" });
      gsap.to(body, { opacity: 0, duration: 0.16 });
    }
  }, [open]);

  return (
    <div className={className} data-open={open}>
      <button type="button" onClick={onToggle} aria-expanded={open} className={headerClassName} style={headerStyle}>
        {header}
      </button>
      <div ref={panelRef} className="uni-acc-panel">
        <div ref={bodyRef} className={bodyClassName}>
          {children}
        </div>
      </div>
    </div>
  );
}
