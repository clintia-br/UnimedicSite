import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { HeroPhotoNotice } from "@/components/ui/HeroPhotoNotice";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { LocalizacaoBlock, HorariosBlock } from "@/components/unidade/UnidadeBlocks";
import { Footer } from "@/components/layout/Footer";
import { WA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Onde estamos | Unimedic Unamar",
  description: "Endereço, mapa e horários de atendimento da Unimedic em Unamar, Cabo Frio.",
};

export default function OndeEstamosPage() {
  return (
    <>
      <PageHero
        breadcrumb={
          <>
            <Link href="/" style={{ color: "var(--uni-400)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span>Onde estamos</span>
          </>
        }
        title="Unimedic Unamar"
        subtitle="Atendimento em Unamar, a poucos minutos de Tamoios e região."
        photo={
          <div style={{ width: "100%", height: "100%", background: "var(--gradient-teal)" }}>
            <HeroPhotoNotice label="fachada da Unimedic em Unamar" />
          </div>
        }
      />
      <Band tone="white">
        <div className="uni-unidade-layout">
          <Reveal as="div" group y={30} style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <LocalizacaoBlock />
            <div style={{ borderTop: "1px solid var(--uni-100)", paddingTop: 48 }}>
              <HorariosBlock />
            </div>
          </Reveal>
          <Reveal as="aside" className="uni-unidade-aside" y={24} delay={0.15}>
            <div style={{ padding: 28, borderRadius: "var(--radius-xl)", background: "var(--uni-50)", border: "1px solid var(--uni-200)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--uni-900)" }}>
                Agende sua consulta
              </div>
              <p style={{ margin: "10px 0 20px", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "var(--text-body)", textWrap: "pretty" }}>
                Fale com nossa equipe pelo WhatsApp e encontre o melhor horário.
              </p>
              <a href={WA} className="uni-btn-solid" style={{ padding: "14px 22px" }}>Agendamento</a>
              <Link href="/especialidades" className="uni-btn-ghost" style={{ marginTop: 10, padding: "13px 22px" }}>
                Ver especialidades
              </Link>
            </div>
          </Reveal>
        </div>
      </Band>
      <Footer />
    </>
  );
}
