"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { Icon } from "@/components/ui/Icon";

const NAV = [
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Unamais Vantagens", href: "/clube-unamais" },
  { label: "Onde estamos", href: "/onde-estamos" },
  { label: "Dúvidas", href: "/#faq" },
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
      className="uni-band"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: scrolled ? "rgba(255,255,255,.96)" : "rgba(255,255,255,.88)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border-subtle)",
        height: 96,
        display: "flex",
        alignItems: "center",
        gap: 32,
        boxShadow: scrolled ? "0 8px 24px rgba(8,56,48,.06)" : "none",
        transition: "background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      }}
    >
      <Link href="/" style={{ flex: "0 0 auto", display: "flex" }} onClick={() => setOpen(false)}>
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
      </div>
    </header>
  );
}
