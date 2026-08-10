"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Collapsible } from "@/components/ui/Collapsible";
import { ENDERECO, HORARIOS, MAPS_Q, SERVICOS_UNIDADE } from "@/lib/constants";

export function SecTitle({ children, size = 26 }: { children: ReactNode; size?: number }) {
  return (
    <div
      className="uni-subtitle"
      style={{
        "--uni-subtitle-size": `${size}px`,
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        letterSpacing: "-0.015em",
        color: "var(--uni-900)",
      } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function LocalizacaoBlock() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard
      .writeText(ENDERECO)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      })
      .catch(() => {});
  };
  return (
    <div>
      <SecTitle>Localização</SecTitle>
      <div style={{ marginTop: 20, display: "flex", alignItems: "flex-start", gap: 12 }}>
        <Icon name="map-pin" size={19} style={{ color: "var(--uni-600)", flex: "0 0 auto", marginTop: 2 }} />
        <span style={{ flex: 1, fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--uni-900)", textWrap: "pretty" }}>
          {ENDERECO}
        </span>
        <button type="button" onClick={copy} aria-label="Copiar endereço" className="uni-copy">
          <Icon name={copied ? "check" : "file-text"} size={17} />
        </button>
      </div>
      <div style={{ marginTop: 20, borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--uni-200)", background: "#fff" }}>
        <iframe
          title="Unimedic — Unamar (Tamoios), Cabo Frio"
          src={`https://www.google.com/maps?q=${MAPS_Q}&output=embed`}
          width="100%"
          height="300"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_Q}`}
        target="_blank"
        rel="noopener"
        className="uni-wide-btn"
      >
        <Icon name="map-pin" size={18} /> Como chegar
      </a>
    </div>
  );
}

export function ServicosBlock() {
  return (
    <div>
      <SecTitle>Tipos de serviços oferecidos</SecTitle>
      <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        {SERVICOS_UNIDADE.map((s) => (
          <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Icon name={s.icon} size={19} style={{ color: "var(--uni-600)", flex: "0 0 auto" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-body)" }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HorariosBlock() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <SecTitle>Horários de funcionamento</SecTitle>
      <div style={{ marginTop: 18, borderRadius: "var(--radius-lg)", border: "1px solid var(--uni-200)", background: "#fff", overflow: "hidden" }}>
        <Collapsible
          open={open}
          onToggle={() => setOpen(!open)}
          headerClassName="uni-acc-btn"
          headerStyle={{ padding: "20px 22px" }}
          bodyClassName="uni-horarios-body"
          header={
            <>
              <Icon name="clock" size={20} style={{ color: "var(--uni-600)", flex: "0 0 auto" }} />
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--uni-900)" }}>
                  Horário de atendimento
                </span>
                <span style={{ display: "block", marginTop: 5, fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--text-muted)" }}>
                  Confira o horário para agendar sua consulta
                </span>
              </span>
              <Icon name={open ? "chevron-up" : "chevron-down"} size={20} style={{ color: "var(--uni-500)", flex: "0 0 auto" }} />
            </>
          }
        >
          {HORARIOS.map((h, i) => (
            <div
              key={h.dia}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 20,
                padding: "16px 22px",
                borderTop: "1px solid var(--uni-100)",
                background: i % 2 === 0 ? "var(--uni-50)" : "#fff",
                fontFamily: "var(--font-body)",
                fontSize: 16,
              }}
            >
              <span style={{ color: "var(--uni-900)" }}>{h.dia}</span>
              <span style={{ color: "var(--text-muted)" }}>{h.horas}</span>
            </div>
          ))}
        </Collapsible>
      </div>
    </div>
  );
}
