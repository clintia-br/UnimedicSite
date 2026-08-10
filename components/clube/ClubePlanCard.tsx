import { Icon } from "@/components/ui/Icon";
import { CLUBE_URL } from "@/lib/constants";
import type { clubePlanos } from "@/lib/data";

export function ClubePlanCard({ plano }: { plano: (typeof clubePlanos)[number] }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: 34,
        borderRadius: "var(--radius-xl)",
        background: "#fff",
        border: plano.popular ? "2px solid var(--uni-500)" : "1px solid var(--uni-200)",
        boxShadow: plano.popular ? "0 10px 34px rgba(8,58,42,.10)" : "0 1px 3px rgba(8,58,42,.06)",
      }}
    >
      {plano.popular ? (
        <span
          style={{
            position: "absolute",
            top: -13,
            left: 34,
            padding: "5px 14px",
            borderRadius: 999,
            background: "var(--uni-500)",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".1em",
            textTransform: "uppercase",
          }}
        >
          Mais escolhido
        </span>
      ) : null}
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--uni-900)" }}>{plano.name}</div>
      <div style={{ marginTop: 14, display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 42, letterSpacing: "-0.02em", color: "var(--uni-700)" }}>
          {plano.price}
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-muted)" }}>/mês</span>
      </div>
      <div style={{ marginTop: 6, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)" }}>Titular + 3 dependentes</div>
      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
        {plano.lines.map((l) => (
          <div key={l} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Icon name="check" size={17} style={{ color: "var(--uni-500)", flex: "0 0 auto", marginTop: 3 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--text-body)", textWrap: "pretty" }}>{l}</span>
          </div>
        ))}
      </div>
      <a
        href={CLUBE_URL}
        target="_blank"
        rel="noopener"
        className="uni-btn-solid"
        style={{ marginTop: "auto", paddingTop: 14, display: "flex", marginBottom: 0, padding: "14px 24px" }}
      >
        Assinar no site do clube
      </a>
    </div>
  );
}
