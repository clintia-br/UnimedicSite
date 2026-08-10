import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Clínica em Unamar | Especialistas e Consultas Particulares | Unimedic",
  description:
    "Agende sua consulta com especialistas em Unamar. Atendimento humanizado, diversas especialidades e agendamento rápido pelo WhatsApp. Conheça a Unimedic.",
  openGraph: {
    type: "website",
    siteName: "Unimedic",
    locale: "pt_BR",
    title: "Clínica em Unamar | Especialistas e Consultas Particulares | Unimedic",
    description:
      "Agende sua consulta com especialistas em Unamar. Atendimento humanizado, diversas especialidades e agendamento rápido pelo WhatsApp. Conheça a Unimedic.",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/assets/unimedic/logo-unimedic-mark-alpha.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="theme-unimedic">
        <Header />
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
