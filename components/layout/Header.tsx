"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { Icon } from "@/components/ui/Icon";
import { CLUBE_URL, WA } from "@/lib/constants";

const NAV = [
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Unamais Vantagens", href: "/clube-unamais" },
  { label: "Onde estamos", href: "/onde-estamos" },
  { label: "Dúvidas", href: "/#faq" },
];

/* Action pills, mirroring the base brand's header: the booking CTA plus the
   club link. "Acessar Clube" goes to the club's own site — the nav entry above
   points at our information page, so the two are different destinations. */
const CTAS = [
  { label: "Agendar agora", href: WA, variant: "solid" as const, external: true },
  { label: "Acessar Clube", href: CLUBE_URL, variant: "ghost" as const, external: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (open) {
      const h = menu.scrollHeight;
      gsap.fromTo(menu, { height: 0, opacity: 0.4 }, { height: h, opacity: 1, duration: 0.36, ease: "power2.out" });
    } else {
      gsap.to(menu, { height: 0, opacity: 0, duration: 0.28, ease: "power2.inOut" });
    }
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="uni-band uni-header"
      style={{
        background: scrolled ? "rgba(255,255,255,.96)" : "rgba(255,255,255,.9)",
        boxShadow: scrolled ? "0 8px 24px rgba(8,56,48,.06)" : "none",
      }}
    >
      <Link href="/" className="uni-header__logo" onClick={() => setOpen(false)}>
        <Image
          src="/assets/unimedic/logo-unimedic-horizontal-dark.png"
          alt="Unimedic"
          width={1327}
          height={300}
          priority
          style={{ height: 42, width: "auto" }}
        />
      </Link>

      <nav className="uni-nav">
        {NAV.map((n) => (
          <Link key={n.label} href={n.href} className="bd-navlink">
            {n.label}
          </Link>
        ))}
      </nav>

      <div className="uni-header__cta">
        {CTAS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className={`uni-header__pill uni-header__pill--${c.variant}`}
            {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
          >
            {c.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="uni-burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? "x" : "menu"} size={22} />
      </button>

      <div ref={menuRef} className="uni-menu" style={{ height: 0, opacity: 0, overflow: "hidden" }}>
        {NAV.map((n) => (
          <Link key={n.label} href={n.href} className="uni-menu__link" onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        {/* The pills are hidden from the bar on narrow screens, so the menu
            carries them instead — the booking CTA must stay reachable. */}
        <div className="uni-menu__cta">
          {CTAS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className={`uni-header__pill uni-header__pill--${c.variant}`}
              onClick={() => setOpen(false)}
              {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
