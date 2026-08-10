"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type PageHeroProps = {
  breadcrumb?: ReactNode;
  title: string;
  subtitle?: ReactNode;
  cta?: ReactNode;
  photo?: ReactNode;
  minHeight?: number;
  align?: "left" | "center";
};

/** Dark hero band used by every secondary page: breadcrumb, headline, lede, optional CTA. */
export function PageHero({ breadcrumb, title, subtitle, cta, photo, minHeight = 340, align = "left" }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(ref);
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (photo) tl.fromTo(q(".uni-pagehero__photo"), { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.1 });
      tl.fromTo(q(".uni-pagehero__crumb"), { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 }, 0.1)
        .fromTo(q(".uni-pagehero__title"), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, 0.18)
        .fromTo(q(".uni-pagehero__sub"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.32)
        .fromTo(q(".uni-pagehero__cta"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.44);
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      style={{ position: "relative", minHeight, overflow: "hidden", background: "var(--uni-900)" }}
    >
      {photo ? <div className="uni-pagehero__photo" style={{ position: "absolute", inset: 0 }}>{photo}</div> : null}
      <div
        style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(56px, 8vw, 80px) clamp(20px, 5vw, 40px) clamp(48px, 6vw, 64px)",
          textAlign: align,
        }}
      >
        {breadcrumb ? (
          <nav
            className="uni-pagehero__crumb"
            style={{ display: "flex", alignItems: "center", justifyContent: align === "center" ? "center" : "flex-start", gap: 8, fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,.6)" }}
          >
            {breadcrumb}
          </nav>
        ) : null}
        <h1
          className="uni-pagehero__title"
          style={{
            margin: breadcrumb ? "20px 0 0" : 0,
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(32px, 4.2vw, 54px)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#fff",
            maxWidth: align === "center" ? 820 : 760,
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
            textWrap: "pretty",
          }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className="uni-pagehero__sub"
            style={{
              margin: "18px 0 0",
              fontFamily: "var(--font-body)",
              fontSize: 19,
              lineHeight: 1.7,
              color: "rgba(255,255,255,.78)",
              maxWidth: align === "center" ? 620 : 620,
              marginLeft: align === "center" ? "auto" : undefined,
              marginRight: align === "center" ? "auto" : undefined,
              textWrap: "pretty",
            }}
          >
            {subtitle}
          </p>
        ) : null}
        {cta ? (
          <div className="uni-pagehero__cta" style={{ marginTop: 30, display: "flex", justifyContent: align === "center" ? "center" : "flex-start", gap: 14, flexWrap: "wrap" }}>
            {cta}
          </div>
        ) : null}
      </div>
    </section>
  );
}
