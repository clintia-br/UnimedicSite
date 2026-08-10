import {
  Activity,
  AlertCircle,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Droplet,
  FileText,
  FlaskConical,
  Hospital,
  MapPin,
  Menu,
  MessageCircle,
  Percent,
  Plus,
  Stethoscope,
  User,
  Users,
  X,
  type LucideProps,
} from "lucide-react";

const GLYPHS = {
  activity: Activity,
  "alert-circle": AlertCircle,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  clock: Clock,
  droplet: Droplet,
  "file-text": FileText,
  "flask-conical": FlaskConical,
  hospital: Hospital,
  "map-pin": MapPin,
  menu: Menu,
  "message-circle": MessageCircle,
  percent: Percent,
  plus: Plus,
  stethoscope: Stethoscope,
  user: User,
  users: Users,
  x: X,
} as const;

export type IconName = keyof typeof GLYPHS;

type IconProps = Omit<LucideProps, "ref"> & { name: IconName };

/** Monochrome outline icon. Inherits currentColor. */
export function Icon({ name, size = 18, strokeWidth = 2, ...rest }: IconProps) {
  const Glyph = GLYPHS[name];
  if (!Glyph) return null;
  return <Glyph size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
