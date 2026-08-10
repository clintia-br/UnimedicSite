import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { InfoAccordion } from "@/components/especialidade/InfoAccordion";
import { Footer } from "@/components/layout/Footer";
import { especialidades } from "@/lib/data";
import { WA } from "@/lib/constants";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return especialidades.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const esp = especialidades.find((e) => e.slug === slug);
  if (!esp) return {};
  return {
    title: `${esp.name} em Unamar | Unimedic`,
    description: `${esp.name} na Unimedic, em Unamar. Informações de preparo, jejum e restrições. Agende sua consulta pelo WhatsApp.`,
  };
}

export default async function EspecialidadePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const esp = especialidades.find((e) => e.slug === slug);
  if (!esp) notFound();

  const outras = especialidades.filter((e) => e.slug !== esp.slug);

  return (
    <>
      <PageHero
        breadcrumb={
          <>
            <Link href="/" style={{ color: "var(--uni-400)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/especialidades" style={{ color: "var(--uni-400)", textDecoration: "none" }}>Especialidades</Link>
            <span>/</span>
            <span>{esp.name}</span>
          </>
        }
        title={esp.name}
        subtitle={esp.info}
        cta={<WhatsAppButton variant="onTeal" />}
        minHeight={320}
      />
      <Band tone="white">
        <div className="uni-esp-page">
          <Reveal as="div">
            <InfoAccordion />
            <div style={{ marginTop: 44, padding: "28px 32px", borderRadius: "var(--radius-xl)", background: "var(--uni-50)", border: "1px solid var(--uni-100)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--uni-900)" }}>
                Pronto para agendar?
              </div>
              <p style={{ margin: "10px 0 22px", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--text-body)", maxWidth: 460, textWrap: "pretty" }}>
                Fale com nossa equipe pelo WhatsApp e encontre o melhor horário para sua consulta.
              </p>
              <a href={WA} className="uni-btn-solid" style={{ display: "inline-flex", padding: "14px 28px" }}>Agendamento</a>
            </div>
          </Reveal>
          <Reveal as="aside" delay={0.15}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--uni-900)" }}>
              Outras especialidades
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 16 }}>
              {outras.map((o) => (
                <Link key={o.slug} href={`/especialidades/${o.slug}`} className="uni-esp-link">
                  {o.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Band>
      <Footer />
    </>
  );
}
