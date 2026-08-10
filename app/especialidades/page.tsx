import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Footer } from "@/components/layout/Footer";
import { especialidades } from "@/lib/data";

export const metadata: Metadata = {
  title: "Especialidades em Unamar | Informações | Unimedic",
  description:
    "Saiba o que cada especialidade atende na Unimedic, em Unamar. Cardiologia, pediatria, ginecologia, ortopedia e mais. Agende pelo WhatsApp.",
};

export default function EspecialidadesIndexPage() {
  return (
    <>
      <PageHero
        breadcrumb={
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--uni-400)", textDecoration: "none" }}>
            <Icon name="chevron-left" size={16} /> Voltar para a home
          </Link>
        }
        title="Nossas especialidades"
        subtitle="Escolha uma especialidade para ver as informações de atendimento."
        minHeight={300}
      />
      <Band tone="white">
        <Reveal as="div" group y={26} className="uni-esp-index">
          {especialidades.map((e) => (
            <Link key={e.slug} href={`/especialidades/${e.slug}`} className="uni-esp-index-card">
              <span className="uni-subtitle" style={{ "--uni-subtitle-size": "22px", fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--uni-900)", textWrap: "pretty" } as React.CSSProperties}>
                {e.name}
              </span>
              <span style={{ marginTop: 12, fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "var(--text-body)", textWrap: "pretty" }}>
                {e.info}
              </span>
              <span style={{ marginTop: "auto", paddingTop: 22, display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--uni-700)" }}>
                Ver informações <Icon name="chevron-right" size={16} />
              </span>
            </Link>
          ))}
        </Reveal>
      </Band>
      <Footer />
    </>
  );
}
