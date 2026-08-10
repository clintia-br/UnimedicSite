"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Split hero: solid brand panel left, full-bleed photo right, diagonal seam. */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(q(".uni-hero__photo"), { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.3, ease: "power2.out" })
        .fromTo(q(".uni-h1-line"), { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, 0.15)
        .fromTo(q(".uni-hero__sub"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.55)
        .fromTo(q(".uni-hero__cta"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.68);
    },
    { scope: rootRef }
  );

  return (
    <section
      id="topo"
      ref={rootRef}
      className="uni-hero"
      style={{ position: "relative", background: "var(--uni-900)", overflow: "hidden" }}
    >
      <div className="uni-hero__photo">
        {/* object-position is tuned in CSS: the frame is very wide and the
            interesting half sits right of centre. */}
        <Image
          src="/assets/unimedic/fotos/recepcao.jpg"
          alt="Recepção da Unimedic em Unamar"
          fill
          priority
          sizes="(max-width: 760px) 100vw, 56vw"
        />
      </div>
      <div className="uni-hero__inner">
        <div className="uni-hero__copy">
          <h1
            className="uni-h1"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#fff",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            <span className="uni-h1-line" style={{ display: "block" }}>Você não precisa esperar meses</span>
            <span className="uni-h1-line" style={{ display: "block" }}>
              para cuidar da <span style={{ color: "var(--uni-400)" }}>saúde de quem ama</span>.
            </span>
          </h1>
          <p
            className="uni-hero__sub"
            style={{ marginTop: 16, fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,.8)", maxWidth: 460, textWrap: "pretty" }}
          >
            Especialistas em Unamar, sem depender de plano de saúde.
          </p>
          <div className="uni-hero__cta" style={{ marginTop: 28 }}>
            <WhatsAppButton variant="onTeal" />
          </div>
        </div>
      </div>
    </section>
  );
}
