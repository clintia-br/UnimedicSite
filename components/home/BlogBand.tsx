import Image from "next/image";
import { Band, Display, Lede } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { artigos } from "@/lib/data";

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
        {artigos.map((a) => (
          <Card key={a.slug} padding={0}>
            <div style={{ position: "relative", width: "100%", height: "clamp(150px, 26vw, 190px)" }}>
              <Image
                src={a.imagem}
                alt=""
                fill
                sizes="(max-width: 820px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--uni-600)" }}>
                {a.categoria}
              </div>
              <h3
                className="uni-subtitle"
                style={{ marginTop: 10, "--uni-subtitle-size": "20px", fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1.3, color: "var(--uni-900)", textWrap: "pretty" } as React.CSSProperties}
              >
                {a.titulo}
              </h3>
              <p style={{ marginTop: 8, fontFamily: "var(--font-body)", fontSize: "var(--fs-body)", lineHeight: 1.65, color: "var(--text-body)", textWrap: "pretty" }}>
                {a.resumo}
              </p>
            </div>
          </Card>
        ))}
      </Reveal>
    </Band>
  );
}
