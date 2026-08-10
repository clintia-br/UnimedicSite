import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "onTeal" | "glass";
  size?: "sm" | "md" | "lg";
  icon?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const ICON_SIZE = { sm: 16, md: 18, lg: 20 };

/** Pill button. Every button in the brand is fully rounded. */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  href,
  className = "",
  style,
  ...rest
}: ButtonAsLink | ButtonAsButton) {
  const classes = ["bd-btn", `bd-btn--${size}`, `bd-btn--${variant}`, className]
    .filter(Boolean)
    .join(" ");
  const finalStyle: CSSProperties = {
    display: fullWidth ? "flex" : undefined,
    width: fullWidth ? "100%" : undefined,
    ...style,
  };
  const content = (
    <>
      {icon ? <Icon name={icon} size={ICON_SIZE[size]} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={ICON_SIZE[size]} /> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} style={finalStyle} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} style={finalStyle} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
