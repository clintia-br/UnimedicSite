import type { CSSProperties, ReactNode } from "react";

type BandProps = {
  tone?: "white" | "tint" | "mint" | "dark";
  children: ReactNode;
  py?: number;
  narrow?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
};

/** Full-bleed band. Unimedic rhythm is roomier than the base system: 136px. */
export function Band({ tone = "white", children, py = 136, narrow, id, className, style }: BandProps) {
  const bg = { white: "#fff", tint: "var(--uni-50)", mint: "var(--uni-100)", dark: "var(--gradient-teal)" }[tone];
  /* The desktop rhythm is deliberately roomy, but held at 64px on a phone it
     turned into 128px of dead space between every band — the page ran to ten
     screens. The floor drops; the desktop figure is untouched. */
  const pad = `clamp(46px, ${py / 14}vw, ${py}px)`;
  return (
    <section
      id={id}
      className={`uni-band ${className ?? ""}`}
      style={{
        background: bg,
        paddingTop: pad,
        paddingBottom: pad,
        ...style,
      }}
    >
      <div className={`uni-wrap${narrow ? " uni-wrap--narrow" : ""}`}>{children}</div>
    </section>
  );
}

type DisplayProps = {
  children: ReactNode;
  tone?: "ink" | "onDark";
  size?: number;
  align?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3";
  style?: CSSProperties;
  className?: string;
};

/** Big display heading. Sentence case, tight, generous space beneath. */
export function Display({ children, tone = "ink", size = 56, align = "left", as = "h2", style, className }: DisplayProps) {
  const Tag = as;
  return (
    <Tag
      className={`uni-display ${className ?? ""}`}
      style={{
        /* Read by --fs-display as the upper bound; the fluid scale handles
           everything below it. */
        "--uni-display-size": `${size}px`,
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        lineHeight: 1.12,
        letterSpacing: "-0.02em",
        textAlign: align,
        color: tone === "onDark" ? "#fff" : "var(--uni-900)",
        margin: 0,
        textWrap: "pretty",
        ...style,
      } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

type LedeProps = {
  children: ReactNode;
  tone?: "ink" | "onDark";
  size?: number;
  align?: "left" | "center" | "right";
  maxWidth?: number;
  style?: CSSProperties;
  className?: string;
};

/** Body paragraph, sized for the short one-line copy beats it renders. */
export function Lede({ children, tone = "ink", size = 19, align = "left", maxWidth = 720, style, className }: LedeProps) {
  return (
    <p
      className={`uni-lede ${className ?? ""}`}
      style={{
        /* Upper bound for --fs-lede; on a phone it scales down so the gap to
           the heading above stays legible instead of both meeting near 28px. */
        "--uni-lede-size": `${size}px`,
        fontFamily: "var(--font-body)",
        textAlign: align,
        color: tone === "onDark" ? "rgba(255,255,255,.78)" : "var(--text-body)",
        maxWidth,
        margin: 0,
        textWrap: "pretty",
        ...style,
      } as CSSProperties}
    >
      {children}
    </p>
  );
}

type BeatsProps = {
  lines: ReactNode[];
  tone?: "ink" | "onDark";
  size?: number;
  gap?: number;
  align?: "left" | "center" | "right";
  style?: CSSProperties;
};

export function Beats({ lines, tone = "ink", size = 19, gap = 10, align = "left", style }: BeatsProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap, ...style }}>
      {lines.map((l, i) => (
        <Lede key={i} tone={tone} size={size} align={align}>
          {l}
        </Lede>
      ))}
    </div>
  );
}
