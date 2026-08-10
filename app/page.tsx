import { Hero } from "@/components/home/Hero";
import { AtalhosBand } from "@/components/home/AtalhosBand";
import { EspecialidadesBand } from "@/components/home/EspecialidadesBand";
import { UnidadeBand } from "@/components/home/UnidadeBand";
import { BlogBand } from "@/components/home/BlogBand";
import { FaqBand } from "@/components/home/FaqBand";
import { Footer } from "@/components/layout/Footer";
import { clinicSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <Hero />
      <AtalhosBand />
      <EspecialidadesBand />
      <UnidadeBand />
      <BlogBand />
      <FaqBand />
      <Footer aviso={false} />
    </>
  );
}
