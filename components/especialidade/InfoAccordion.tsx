"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Collapsible } from "@/components/ui/Collapsible";
import { infoAtendimentoItems } from "@/lib/data";

export function InfoAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, letterSpacing: "-0.015em", color: "var(--uni-900)" }}>
        Sobre o atendimento
      </div>
      <div style={{ marginTop: 24 }}>
        {infoAtendimentoItems.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.title} style={{ borderTop: i === 0 ? "0" : "1px solid var(--uni-100)" }}>
              <Collapsible
                open={isOpen}
                onToggle={() => setOpen(isOpen ? null : i)}
                headerClassName="uni-acc-btn"
                headerStyle={{ padding: "22px 0" }}
                bodyClassName="uni-info-body"
                header={
                  <>
                    <Icon name={it.icon} size={22} style={{ color: "var(--uni-600)", flex: "0 0 auto" }} />
                    <span style={{ flex: 1 }}>
                      <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--uni-900)" }}>
                        {it.title}
                      </span>
                      <span style={{ display: "block", marginTop: 6, fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--text-muted)", textWrap: "pretty" }}>
                        {it.sub}
                      </span>
                    </span>
                    <Icon name={isOpen ? "chevron-up" : "chevron-down"} size={20} style={{ color: "var(--uni-500)", flex: "0 0 auto" }} />
                  </>
                }
              >
                Conteúdo a preencher.
              </Collapsible>
            </div>
          );
        })}
      </div>
    </div>
  );
}
