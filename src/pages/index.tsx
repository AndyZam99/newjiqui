import CTA from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";
import News from "@/components/news";
import { NewsContainer } from "@/components/NewsContainer";
import Noticia from "@/components/noticia";
import Valor from "@/components/valor";


export default function Home() {
  return (
    <main>
      <div className="body-hero">
        <NewsContainer />
        <Valor />
        <Noticia />
        <News />
        <CTA />
        <div className="flex justify-center items-center w-full">
          <a
            href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/?idSujetoObigadoParametro=3463&idEntidadParametro=16&idSectorParametro=21"
            target='_blank'
            rel='noreferrer'
            className='text-center text-neutral-400 text-lg mb-14'
          >
            Transparencia
          </a>
        </div>
        <Footer />
      </div>
    </main>
  );
}
