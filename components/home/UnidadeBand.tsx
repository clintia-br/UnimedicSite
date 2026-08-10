import { Band, Display, Lede } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { LocalizacaoBlock, ServicosBlock, HorariosBlock } from "@/components/unidade/UnidadeBlocks";
import { WA } from "@/lib/constants";

export function UnidadeBand() {
  return (
    <Band tone="tint" id="unidade">
      <Reveal as="div" style={{ maxWidth: 620 }}>
        <Display size={44}>Onde estamos.</Display>
        <Lede style={{ marginTop: 18 }}>Atendimento em Unamar, a poucos minutos de Tamoios e região.</Lede>
      </Reveal>
      <Reveal as="div" y={40} className="uni-unidade-card" style={{ marginTop: 40 }}>
        <LocalizacaoBlock />
        <div style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid var(--uni-100)" }}>
          <ServicosBlock />
        </div>
        <div style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid var(--uni-100)" }}>
          <HorariosBlock />
        </div>
        <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={WA} className="uni-btn-solid" style={{ display: "inline-flex", padding: "14px 26px" }}>
            Agendamento
          </a>
        </div>
      </Reveal>
    </Band>
  );
}
