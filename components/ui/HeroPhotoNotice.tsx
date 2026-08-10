import { Hospital } from "lucide-react";

/**
 * Small corner tag used on full-bleed hero bands that still await a real
 * photo. A centered PhotoSlot would fight the headline for attention here —
 * this stays out of the way of the copy instead.
 */
export function HeroPhotoNotice({ label }: { label: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px",
        borderRadius: 999,
        background: "rgba(255,255,255,.06)",
        border: "1px dashed rgba(255,255,255,.22)",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        letterSpacing: ".03em",
        color: "rgba(255,255,255,.55)",
      }}
    >
      <Hospital size={14} />
      Foto sugerida: {label}
    </div>
  );
}
