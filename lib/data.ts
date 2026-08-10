/* Copy fornecida pelo cliente, na íntegra. Não reescrever. */

export type Especialidade = {
  name: string;
  slug: string;
  info: string;
};

export const especialidades: Especialidade[] = [
  { name: "Cardiologia", slug: "cardiologia", info: "Prevenção, diagnóstico e acompanhamento de doenças do coração e da pressão arterial." },
  { name: "Pediatria", slug: "pediatria", info: "Acompanhamento do crescimento e da saúde de bebês, crianças e adolescentes." },
  { name: "Ginecologia", slug: "ginecologia", info: "Saúde da mulher em todas as fases da vida, incluindo consultas de rotina e acompanhamento." },
  { name: "Ortopedia", slug: "ortopedia", info: "Diagnóstico e tratamento de problemas em ossos, articulações, músculos e ligamentos." },
  { name: "Neurologia", slug: "neurologia", info: "Investigação e acompanhamento de dores de cabeça, tonturas e outras condições do sistema nervoso." },
  { name: "Dermatologia", slug: "dermatologia", info: "Cuidados com a pele, cabelos e unhas, do diagnóstico ao tratamento." },
  { name: "Endocrinologia", slug: "endocrinologia", info: "Acompanhamento de diabetes, tireoide, obesidade e outras questões hormonais." },
  { name: "Gastroenterologia", slug: "gastroenterologia", info: "Avaliação e tratamento de sintomas e doenças do sistema digestivo." },
  { name: "Urologia", slug: "urologia", info: "Saúde do sistema urinário e da saúde masculina, com foco em prevenção." },
  { name: "Psicologia", slug: "psicologia", info: "Atendimento psicológico para acolhimento, orientação e acompanhamento contínuo." },
  { name: "Psiquiatria", slug: "psiquiatria", info: "Avaliação e tratamento clínico de questões de saúde mental." },
  { name: "Exames laboratoriais", slug: "exames-laboratoriais", info: "Coleta e realização de exames para apoiar o diagnóstico e o acompanhamento do seu tratamento." },
];

export const diferenciais = [
  { title: "Você agenda sem complicação.", body: "Nada de processos difíceis ou ligações intermináveis. Nossa equipe atende pelo WhatsApp e ajuda você a encontrar o melhor horário." },
  { title: "Você é atendido perto de casa.", body: "Mais comodidade. Menos tempo na estrada. Mais tempo para cuidar de quem realmente importa." },
  { title: "Você encontra médicos experientes.", body: "Profissionais preparados para ouvir, orientar e acompanhar cada paciente com atenção." },
  { title: "Você sabe exatamente como será atendido.", body: "Sem surpresas. Sem burocracia. Com transparência desde o primeiro contato." },
  { title: "Você volta porque foi bem atendido.", body: "Nosso objetivo não é apenas realizar uma consulta. É construir uma relação de confiança para que sua família saiba onde encontrar cuidado sempre que precisar." },
];

export const passos = [
  { n: "1", title: "Fale conosco pelo WhatsApp.", body: "Nossa equipe responde rapidamente e tira suas dúvidas." },
  { n: "2", title: "Escolha o melhor horário.", body: "Encontramos a opção mais conveniente para sua rotina." },
  { n: "3", title: "Venha para sua consulta.", body: "Você será recebido por uma equipe preparada para oferecer um atendimento acolhedor e de qualidade." },
  { n: "4", title: "Conte conosco sempre que precisar.", body: "Queremos ser a clínica em que você pensa primeiro quando precisar cuidar da saúde." },
];

export const unamais = [
  "Telemedicina 24h.",
  "Consulta anual inclusa.",
  "Descontos em consultas e exames.",
  "Clube de parcerias.",
];

export const faq = [
  { q: "Preciso ter plano de saúde para ser atendido?", a: "Não. Você pode agendar sua consulta particular diretamente pelo WhatsApp e escolher a especialidade que precisa." },
  { q: "Como faço para marcar uma consulta?", a: "É simples. Clique no botão de WhatsApp, converse com nossa equipe e escolha o melhor horário disponível." },
  { q: "Quanto custa a consulta?", a: "Os valores variam conforme a especialidade. Nossa equipe informa todas as condições antes do agendamento, com total transparência." },
  { q: "A clínica atende crianças?", a: "Sim. Contamos com especialidades voltadas para o atendimento de toda a família." },
  { q: "Posso realizar exames pela clínica?", a: "Sim. Consulte nossa equipe para conhecer os exames disponíveis e as condições de atendimento." },
  { q: "O Unamais Vantagens é um plano de saúde?", a: "Não. É um clube de benefícios em saúde, com telemedicina 24h, uma consulta anual inclusa e condições especiais em consultas e exames. Não é plano de saúde nem seguro, e não substitui um plano privado de assistência à saúde." },
];

export const provaSocialPendente = [
  "Avaliações do Google.",
  "Depoimentos em vídeo.",
  "Fotos de pacientes (com autorização).",
  "Logos de empresas e parceiros.",
  "Número de atendimentos realizados.",
  "Tempo de atuação da equipe médica.",
];

export const especialidadesRodape =
  "Clínica Médica • Cardiologia • Pediatria • Ginecologia • Ortopedia • Dermatologia • Neurologia • Gastroenterologia • Endocrinologia • Psicologia • Psiquiatria • Urologia • Exames.";

export const clubeBeneficios = [
  { icon: "activity" as const, title: "Telemedicina 24h", body: "Consultas por vídeo com clínico geral, ilimitadas, a qualquer hora e sem sair de casa." },
  { icon: "hospital" as const, title: "Pronto atendimento online", body: "Atendimento de urgência por vídeo, ilimitado, 24 horas por dia." },
  { icon: "stethoscope" as const, title: "Consulta anual gratuita", body: "Uma consulta com clínico geral por ano, já inclusa no plano." },
  { icon: "flask-conical" as const, title: "Descontos em exames", body: "Condições especiais em exames de imagem e laboratoriais, que crescem conforme o plano." },
  { icon: "user" as const, title: "Descontos em consultas", body: "Consultas com especialistas em valores abaixo do particular." },
  { icon: "clock" as const, title: "Sem carência", body: "Você começa a usar os benefícios logo após a contratação." },
  { icon: "users" as const, title: "Para toda a família", body: "Um plano cobre o titular e até três dependentes." },
  { icon: "percent" as const, title: "Clube de Parcerias", body: "Descontos em uma rede de estabelecimentos e serviços parceiros no dia a dia." },
];

export const clubePlanos = [
  { name: "Básico", price: "R$ 59,90", popular: false, lines: ["Telemedicina 24h ilimitada (clínico geral)", "Pronto atendimento 24h online ilimitado", "1 consulta gratuita por ano", "Até 30% off em exames", "Até 20% off em consultas com especialistas", "Clube de Parcerias"] },
  { name: "Plus", price: "R$ 69,90", popular: true, lines: ["Telemedicina 24h ilimitada (clínico geral)", "Pronto atendimento 24h online ilimitado", "1 consulta gratuita por ano", "Até 40% off em exames", "Até 30% off em consultas com especialistas", "Clube de Parcerias"] },
  { name: "Premium", price: "R$ 99,90", popular: false, lines: ["Telemedicina 24h: clínico geral e especialidades", "Assistência PET, residencial e veicular 24h", "1 consulta gratuita por ano", "Até 50% off em exames", "Até 40% off em consultas com especialistas", "Clube de Parcerias + Assistência Plus inclusos"] },
];

export const infoAtendimentoItems = [
  { icon: "file-text" as const, title: "Como se preparar", sub: "Entenda as informações de preparo com antecedência" },
  { icon: "droplet" as const, title: "Jejum", sub: "Confira a necessidade de jejum prévio e restrições de alimentos ou água" },
  { icon: "alert-circle" as const, title: "Restrições", sub: "Confira o que pode impedir você de fazer o exame" },
];
