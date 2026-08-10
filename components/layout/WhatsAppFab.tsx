"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { WA } from "@/lib/constants";

export function WhatsAppFab() {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.set(ref.current, { opacity: 0, scale: 0.6, y: 16 });
      gsap.to(ref.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        delay: 0.6,
        ease: "power3.out",
      });
      gsap.to(ref.current, {
        boxShadow: "0 10px 30px rgba(8,56,48,.22), 0 0 0 10px rgba(37,211,102,.16)",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    },
    { scope: ref }
  );

  return (
    <a
      ref={ref}
      href={WA}
      aria-label="WhatsApp"
      className="bd-fab"
      style={{
        position: "fixed",
        right: 28,
        bottom: 28,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--uni-whatsapp)",
        color: "#fff",
      }}
    >
      <Image src="/assets/unimedic/whatsapp-mark-white.svg" alt="" width={30} height={30} style={{ display: "block" }} />
    </a>
  );
}
