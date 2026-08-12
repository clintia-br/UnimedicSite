"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import Link from "next/link";
import { clubeHero } from "@/lib/data";

/**
 * Desktop keeps the brand's split banner: brand panel left, photo right,
 * diagonal seam between. On a phone the same parts recompose as a photo with
 * the copy in a card lifted over its lower edge — a 52%-wide text column is
 * not readable at 390px, and the earlier stacked version read as two unrelated
 * blocks. The trust row closes the card in both layouts.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(q(".uni-hero__photo"), { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.3, ease: "power2.out" })
        .fromTo(q(".uni-hero__copy"), { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.9 }, 0.1)
        .fromTo(q(".uni-h1-line"), { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.1 }, 0.22)
        .fromTo(q(".uni-hero__sub"), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.65 }, 0.5)
        .fromTo(q(".uni-hero__cta"), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.65 }, 0.6)
        .fromTo(q(".uni-hero__clube"), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, 0.72);
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
          <div className="uni-hero__body">
            <h1
              className="uni-h1"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                lineHeight: 1.13,
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
              style={{ marginTop: 14, fontFamily: "var(--font-body)", fontSize: "var(--fs-lede)", lineHeight: 1.55, color: "rgba(255,255,255,.82)", maxWidth: 460, textWrap: "pretty" }}
            >
              Especialistas em Unamar, sem depender de plano de saúde.
            </p>
            <div className="uni-hero__cta" style={{ marginTop: 22 }}>
              <WhatsAppButton variant="onTeal" />
            </div>
          </div>
          {/* Partner call-out closing the hero. The panel carries the partner's
              own blue rather than Unimedic green, which is what keeps the two
              brands legible as separate — the point the footer's legal notice
              makes in words. The whole panel is the link, so the tap target is
              the block and not just the arrow. */}
          <Link href="/clube-unamais" className="uni-hero__clube">
            <Image
              src="/assets/unamais/logo-unamais.png"
              alt="Unamais Vantagens"
              width={600}
              height={564}
              priority
            />
            <span className="uni-hero__clube-texto">
              <span className="t">{clubeHero.titulo}</span>
              <span className="d">{clubeHero.detalhe}</span>
              <span className="l">{clubeHero.cta} →</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
