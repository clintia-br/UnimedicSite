import { Band, Display } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { faq } from "@/lib/data";

export function FaqBand() {
  return (
    <Band tone="tint" id="faq">
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <Display size={48} align="center">
          Perguntas frequentes
        </Display>
      </div>
      <Reveal as="div" style={{ maxWidth: 900, margin: "48px auto 0" }}>
        <Accordion items={faq} defaultOpen={0} />
      </Reveal>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
        <WhatsAppButton>Ainda tenho dúvidas — falar no WhatsApp</WhatsAppButton>
      </div>
    </Band>
  );
}
