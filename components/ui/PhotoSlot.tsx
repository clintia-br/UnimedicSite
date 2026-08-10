import type { CSSProperties } from "react";
import { Hospital } from "lucide-react";

type PhotoSlotProps = {
  label: string;
  height?: number | string;
  tone?: "tint" | "dark";
  className?: string;
  style?: CSSProperties;
};

/**
 * Placeholder for photography the client has not supplied yet. Never a stock
 * image — the real photos (recepção, fachada) ship separately and drop into
 * these exact slots.
 */
export function PhotoSlot({ label, height = 460, tone = "tint", className, style }: PhotoSlotProps) {
  const dark = tone === "dark";
  return (
    <div
      className={`uni-photo-slot uni-photo-slot--${tone} ${className ?? ""}`}
      style={{ height, ...style }}
    >
      <div style={{ maxWidth: 320 }}>
        <Hospital
          size={26}
          style={{ color: dark ? "rgba(255,255,255,.5)" : "var(--uni-300)", margin: "0 auto" }}
        />
        <div
          style={{
            marginTop: 14,
            fontFamily: "var(--font-body)",
            fontSize: 13,
            lineHeight: 1.6,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: dark ? "rgba(255,255,255,.55)" : "var(--uni-600)",
          }}
        >
          Foto sugerida
        </div>
        <div
          style={{
            marginTop: 8,
            fontFamily: "var(--font-body)",
            fontSize: 15,
            lineHeight: 1.6,
            color: dark ? "rgba(255,255,255,.6)" : "var(--text-muted)",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
