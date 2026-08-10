import { especialidades } from "./data";

/** MedicalClinic JSON-LD, ported from the original index.html. */
export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Unimedic",
  description:
    "Clínica médica particular em Unamar (Tamoios), Cabo Frio, com atendimento em diversas especialidades e agendamento pelo WhatsApp.",
  telephone: "+5522999800123",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Independência, s/n — Shopping UNApark, Bloco 01, Sala 01",
    addressLocality: "Cabo Frio",
    addressRegion: "RJ",
    postalCode: "28927-000",
    addressCountry: "BR",
  },
  areaServed: ["Unamar", "Tamoios", "Cabo Frio", "Região dos Lagos"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
  ],
  availableService: especialidades.map((e) => ({ "@type": "MedicalSpecialty", name: e.name })),
};
