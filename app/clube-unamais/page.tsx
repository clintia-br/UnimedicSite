import type { Metadata } from "next";
import { Band, Display, Lede } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { ClubeHero } from "@/components/clube/ClubeHero";
import { BenefitTile } from "@/components/clube/BenefitTile";
import { ClubePlanCard } from "@/components/clube/ClubePlanCard";
import { Footer } from "@/components/layout/Footer";
import { clubeBeneficios, clubePlanos } from "@/lib/data";
import { CLUBE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Unamais Vantagens | Clube de benefícios em saúde | Unimedic",
  description:
    "Telemedicina 24h, consulta anual inclusa e descontos em consultas e exames. Conheça os planos do Unamais Vantagens.",
};

export default function ClubeUnamaisPage() {
  return (
    <>
      <ClubeHero />

      <Band tone="white">
        <Reveal as="div" style={{ maxWidth: 700 }}>
          <Display size={44}>O que está incluído</Display>
          <Lede style={{ marginTop: 18 }}>
            Mais que descontos: um conjunto de serviços para cuidar da saúde da família no dia a dia.
          </Lede>
        </Reveal>
        <Reveal as="div" group y={26} className="uni-clube-grid" style={{ marginTop: 48 }}>
          {clubeBeneficios.map((b) => (
            <BenefitTile key={b.title} b={b} />
          ))}
        </Reveal>
      </Band>

      <Band tone="tint">
        <Reveal as="div" style={{ maxWidth: 700 }}>
          <Display size={44}>Escolha o plano da sua família</Display>
          <Lede style={{ marginTop: 18 }}>
            Três opções, todas para o titular e até três dependentes. A contratação acontece no site do clube.
          </Lede>
        </Reveal>
        <Reveal as="div" group y={34} className="uni-planos" style={{ marginTop: 48 }}>
          {clubePlanos.map((p) => (
            <ClubePlanCard key={p.name} plano={p} />
          ))}
        </Reveal>
        <p style={{ marginTop: 26, fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)", maxWidth: 760, textWrap: "pretty" }}>
          Taxa de adesão única de R$ 50,00. Valores e condições são definidos pela Unamais Vantagens e podem mudar
          conforme as campanhas vigentes — confirme sempre no site do clube.
        </p>
      </Band>

      <section style={{ background: "var(--gradient-teal)", padding: "96px 0" }}>
        <Reveal as="div" style={{ maxWidth: 780, margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", textWrap: "pretty" }}>
            Pronto para cuidar da família gastando menos?
          </h2>
          <p style={{ margin: "20px auto 0", fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.75, color: "rgba(255,255,255,.8)", maxWidth: 560, textWrap: "pretty" }}>
            A contratação e as dúvidas sobre planos são atendidas no site do Unamais Vantagens.
          </p>
          <div style={{ marginTop: 34, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={CLUBE_URL} target="_blank" rel="noopener" className="uni-btn-solid" style={{ display: "inline-flex", padding: "15px 30px", background: "#fff", color: "var(--uni-900)" }}>
              Ir para o site do clube
            </a>
            <a href={CLUBE_URL} target="_blank" rel="noopener" className="uni-btn-ghost" style={{ display: "inline-flex", padding: "14px 28px", background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,.7)" }}>
              Tirar dúvidas no site do clube
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
