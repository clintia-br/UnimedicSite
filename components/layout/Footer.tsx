import Image from "next/image";
import Link from "next/link";
import { especialidades } from "@/lib/data";
import { WA } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const head = {
  fontFamily: "var(--font-body)",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: ".14em",
  textTransform: "uppercase" as const,
  color: "var(--uni-400)",
  marginBottom: 20,
};

const item = {
  color: "rgba(255,255,255,.82)",
  fontSize: 16,
  lineHeight: 2.05,
  textDecoration: "none",
};

const cardBlocks = [
  {
    icon: "alert-circle" as const,
    title: "Tem dúvidas?",
    body: (
      <span>
        Acesse nossas <Link href="/#faq" className="uni-foot-inline">perguntas frequentes</Link>.
      </span>
    ),
  },
  {
    icon: "message-circle" as const,
    title: "Quer agendar?",
    body: (
      <span>
        Fale com nossa equipe no <a href={WA} className="uni-foot-inline">WhatsApp</a>.
      </span>
    ),
  },
  {
    icon: "clock" as const,
    title: "Horário de atendimento",
    body: <span style={{ color: "rgba(255,255,255,.72)" }}>Segunda a sexta, 08h às 18h. Sábado, 08h às 13h.</span>,
  },
];

export function Footer({ aviso = true }: { aviso?: boolean }) {
  return (
    <footer className="uni-band" style={{ background: "var(--uni-950)", color: "#fff", paddingTop: 88 }}>
      <div className="uni-wrap">
        <Image
          src="/assets/unimedic/logo-unimedic-horizontal.png"
          alt="Unimedic"
          width={1327}
          height={300}
          style={{ height: 46, width: "auto" }}
        />
        <div style={{ marginTop: 30, borderTop: "1px solid rgba(255,255,255,.14)" }} />
        <Reveal as="div" group y={20} stagger={0.1} className="uni-footer-cols" style={{ paddingTop: 56 }}>
          <div>
            <div style={head}>Institucional</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link href="/" style={item} className="bd-flink">Home</Link>
              <Link href="/onde-estamos" style={item} className="bd-flink">Onde estamos</Link>
              <Link href="/#faq" style={item} className="bd-flink">Perguntas frequentes</Link>
            </div>
          </div>
          <div>
            <div style={head}>Especialidades</div>
            <div className="uni-foot-esp">
              {especialidades.map((e) => (
                <Link key={e.slug} href={`/especialidades/${e.slug}`} style={item} className="bd-flink">
                  {e.name}
                </Link>
              ))}
            </div>
            <Link href="/especialidades" style={{ ...item, color: "var(--uni-400)", display: "inline-block", marginTop: 12 }} className="bd-flink">
              Ver todas
            </Link>
          </div>
          <div>
            <div style={head}>Atendimento</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a href={WA} style={item} className="bd-flink">Agendar pelo WhatsApp</a>
              <Link href="/clube-unamais" style={item} className="bd-flink">Unamais Vantagens</Link>
              <Link href="/onde-estamos" style={item} className="bd-flink">Endereço e horários</Link>
            </div>
          </div>
          <div
            style={{
              padding: "34px 32px",
              borderRadius: "var(--radius-xl)",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.12)",
              display: "flex",
              flexDirection: "column",
              gap: 30,
            }}
          >
            {cardBlocks.map((b) => (
              <div key={b.title}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Icon name={b.icon} size={20} style={{ color: "var(--uni-400)", flex: "0 0 auto" }} />
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#fff" }}>
                    {b.title}
                  </span>
                </div>
                <p style={{ margin: "8px 0 0", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,.72)", textWrap: "pretty" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        {aviso ? (
          <div style={{ marginTop: 56, padding: "26px 28px", borderRadius: "var(--radius-lg)", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)" }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--uni-400)" }}>
              Aviso importante
            </div>
            <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,.72)", margin: "10px 0 0", maxWidth: 900 }}>
              Unamais Vantagens é um clube de benefícios em saúde. Não é plano de saúde nem seguro, não garante
              cobertura financeira de procedimentos médicos e não substitui um plano privado de assistência à saúde.
              Os serviços, valores e condições são definidos e prestados pela Unamais Vantagens e por seus parceiros.
            </p>
          </div>
        ) : null}
        <div
          style={{
            marginTop: 48,
            borderTop: "1px solid rgba(255,255,255,.12)",
            padding: "24px 0 20px",
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            fontSize: 14,
            color: "rgba(255,255,255,.5)",
          }}
        >
          <span>© 2026 Unimedic. Todos os direitos reservados.</span>
          <span>Saúde mais perto de você.</span>
        </div>
        <div style={{ paddingBottom: 32, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,.38)" }}>
          Razão social · CNPJ · Diretor técnico responsável: nome e CRM — dados a preencher antes da publicação
          (exigência do CFM).
        </div>
      </div>
    </footer>
  );
}
