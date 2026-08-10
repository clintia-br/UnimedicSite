"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Band, Display, Lede } from "@/components/ui/Band";
import { Icon } from "@/components/ui/Icon";
import { especialidades } from "@/lib/data";
import { WA } from "@/lib/constants";

export function EspecialidadesBand() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = scrollerRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  useGSAP(
    () => {
      const cards = scrollerRef.current ? Array.from(scrollerRef.current.children) : [];
      if (!cards.length) return;
      gsap.set(cards, { opacity: 0, y: 30 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none none" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef}>
      <Band tone="tint" id="especialidades">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 660 }}>
            <Display size={46}>Encontre sua especialidade na Unimedic.</Display>
            <Lede style={{ marginTop: 20 }}>
              Diferentes especialidades reunidas em um único espaço, para facilitar o cuidado com a saúde da sua família.
            </Lede>
          </div>
          <div className="uni-carousel-nav">
            <button type="button" aria-label="Anterior" onClick={() => scroll(-1)} className="uni-arrow">
              <Icon name="chevron-left" size={20} />
            </button>
            <button type="button" aria-label="Próximo" onClick={() => scroll(1)} className="uni-arrow">
              <Icon name="chevron-right" size={20} />
            </button>
          </div>
        </div>
        <div className="uni-carousel" ref={scrollerRef} style={{ marginTop: 48 }}>
          {especialidades.map((e) => (
            <div key={e.slug} className="uni-esp-card">
              <div
                className="uni-subtitle"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  color: "var(--uni-900)",
                  textWrap: "pretty",
                }}
              >
                {e.name}
              </div>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 32 }}>
                <a href={WA} className="uni-btn-solid">Agendamento</a>
                <Link href={`/especialidades/${e.slug}`} className="uni-btn-ghost">Informações</Link>
              </div>
            </div>
          ))}
        </div>
      </Band>
    </div>
  );
}
