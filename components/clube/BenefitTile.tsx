import { Icon } from "@/components/ui/Icon";
import type { clubeBeneficios } from "@/lib/data";

export function BenefitTile({ b }: { b: (typeof clubeBeneficios)[number] }) {
  return (
    <div style={{ padding: 28, borderRadius: "var(--radius-xl)", background: "var(--uni-50)", border: "1px solid var(--uni-100)" }}>
      <Icon name={b.icon} size={22} style={{ color: "var(--uni-600)" }} />
      <div style={{ marginTop: 16, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, lineHeight: 1.3, color: "var(--uni-900)", textWrap: "pretty" }}>
        {b.title}
      </div>
      <p style={{ margin: "10px 0 0", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "var(--text-body)", textWrap: "pretty" }}>
        {b.body}
      </p>
    </div>
  );
}
