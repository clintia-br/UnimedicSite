"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { WA } from "@/lib/constants";

const ATALHOS = [
  { title: "Agendamento", body: "Marque sua consulta com especialistas pelo WhatsApp, sem depender de plano de saúde.", cta: "Agendar agora", href: WA },
  { title: "Unamais Vantagens", body: "Clube de benefícios em saúde: telemedicina 24h, consulta anual inclusa e descontos em consultas e exames.", cta: "Saber mais", href: "/clube-unamais" },
  { title: "Onde estamos", body: "Informações sobre nossa unidade, horário de funcionamento e localização.", cta: "Ver unidade", href: "/onde-estamos" },
];

export function AtalhosBand() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);
      gsap.set(q(".uni-atalho"), { opacity: 0, y: 28 });
      gsap.set(q(".uni-atalho-line"), { scaleY: 0 });
      gsap.to(q(".uni-atalho"), {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      });
      gsap.to(q(".uni-atalho-line"), {
        scaleY: 1,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="atalhos" ref={sectionRef} style={{ background: "var(--uni-700)", padding: "72px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div className="uni-atalhos">
          {ATALHOS.map((a, i) => (
            <div key={a.title} className="uni-atalho" style={{ position: "relative" }}>
              {i > 0 ? (
                <span
                  className="uni-atalho-line"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 1,
                    background: "rgba(255,255,255,.22)",
                    transformOrigin: "top",
                  }}
                />
              ) : null}
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, letterSpacing: "-0.015em", color: "#fff" }}>
                {a.title}
              </div>
              <p style={{ margin: "18px 0 0", fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,.82)", textWrap: "pretty", marginBottom: 28 }}>
                {a.body}
              </p>
              <a
                href={a.href}
                style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "13px 26px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(255,255,255,.85)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#fff",
                  textDecoration: "none",
                  transition: "background var(--dur-base) var(--ease-standard)",
                }}
              >
                {a.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
