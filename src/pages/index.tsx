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
        <Footer />
      </div>
    </main>
  );
}
