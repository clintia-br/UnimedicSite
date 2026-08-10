import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Button } from "./Button";
import { WA } from "@/lib/constants";

type WhatsAppButtonProps = {
  children?: ReactNode;
  variant?: "primary" | "onTeal";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: CSSProperties;
};

/** The one CTA the whole page drives to. */
export function WhatsAppButton({
  children = "Agendar consulta pelo WhatsApp",
  variant = "primary",
  size = "lg",
  className,
  style,
}: WhatsAppButtonProps) {
  const mark = variant === "primary" ? "whatsapp-mark-white" : "whatsapp-mark";
  const px = size === "sm" ? 18 : 22;
  return (
    <Button
      href={WA}
      variant={variant}
      size={size}
      className={className}
      style={{ boxShadow: variant === "primary" ? "var(--shadow-pill)" : undefined, ...style }}
    >
      <Image
        src={`/assets/unimedic/${mark}.svg`}
        alt=""
        width={px}
        height={px}
        style={{ display: "block", flex: "0 0 auto" }}
      />
      {children}
    </Button>
  );
}
