import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "white" | "mint" | "glass";
  hoverable?: boolean;
  padding?: number;
  className?: string;
  style?: CSSProperties;
};

/** The brand has exactly three card treatments. Hover lift is CSS. */
export function Card({
  children,
  tone = "white",
  hoverable = false,
  padding = 28,
  className = "",
  style,
  ...rest
}: CardProps) {
  return (
    <div
      className={["bd-card", `bd-card--${tone}`, hoverable ? "bd-card--hoverable" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{ padding, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
