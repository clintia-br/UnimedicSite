import { Band, Display, Lede } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function BlogBand() {
  return (
    <Band tone="white" py={96}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 620 }}>
          <Display size={40}>Conteúdo e saúde.</Display>
          <Lede style={{ marginTop: 18 }}>
            Orientações da nossa equipe sobre consultas, exames e cuidados do dia a dia.
          </Lede>
        </div>
      </div>
      <Reveal as="div" group y={26} className="uni-trio" style={{ marginTop: 36 }}>
        {[1, 2, 3].map((i) => (
          <Card key={i} padding={0}>
            <PhotoSlot height={180} label="Imagem do artigo" style={{ borderRadius: 0, border: "none", background: "var(--uni-50)" }} />
            <div style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--uni-600)" }}>
                A preencher
              </div>
              <div style={{ marginTop: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, lineHeight: 1.3, color: "var(--text-muted)" }}>
                Título do artigo
              </div>
              <div style={{ marginTop: 6, fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-muted)" }}>
                Resumo em duas linhas.
              </div>
            </div>
          </Card>
        ))}
      </Reveal>
    </Band>
  );
}
