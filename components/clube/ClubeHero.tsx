"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { HeroPhotoNotice } from "@/components/ui/HeroPhotoNotice";
import { CLUBE_URL, WA } from "@/lib/constants";

export function ClubeHero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(ref);
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(q(".uni-clube__photo"), { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.2 })
        .fromTo(q(".uni-clube__eyebrow"), { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 }, 0.1)
        .fromTo(q(".uni-clube__title"), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
        .fromTo(q(".uni-clube__sub"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.36)
        .fromTo(q(".uni-clube__cta"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.48)
        .fromTo(q(".uni-clube__note"), { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.6);
    },
    { scope: ref }
  );

  return (
    <section ref={ref} style={{ position: "relative", minHeight: 540, overflow: "hidden", background: "var(--uni-900)" }}>
      <div className="uni-clube__photo" style={{ position: "absolute", inset: 0, background: "var(--gradient-teal)" }}>
        <HeroPhotoNotice label="fachada da Unimedic" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,41,31,.35) 0%, rgba(4,41,31,.6) 100%)" }} />
      </div>
      <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", padding: "104px 40px 88px", textAlign: "center" }}>
        <div
          className="uni-clube__eyebrow"
          style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--uni-400)" }}
        >
          Para quem quer mais
        </div>
        <h1
          className="uni-clube__title"
          style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#fff", textWrap: "pretty" }}
        >
          Unamais Vantagens
        </h1>
        <p
          className="uni-clube__sub"
          style={{ margin: "22px auto 0", fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.75, color: "rgba(255,255,255,.82)", maxWidth: 620, textWrap: "pretty" }}
        >
          Um clube de benefícios em saúde para as famílias da Região dos Lagos. Telemedicina 24h, consulta anual
          inclusa e condições especiais em consultas e exames.
        </p>
        <div className="uni-clube__cta" style={{ marginTop: 34, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={CLUBE_URL} target="_blank" rel="noopener" className="uni-btn-solid" style={{ display: "inline-flex", padding: "15px 30px", background: "#fff", color: "var(--uni-900)" }}>
            Conhecer o clube
          </a>
          <a href={WA} className="uni-btn-ghost" style={{ display: "inline-flex", padding: "14px 28px", background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,.7)" }}>
            Falar com a Unimedic
          </a>
        </div>
        <div className="uni-clube__note" style={{ marginTop: 26, fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,.6)" }}>
          Planos a partir de R$ 59,90/mês · Sem carência
        </div>
      </div>
    </section>
  );
}
