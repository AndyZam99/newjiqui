import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/Hero";
import ImageGridHero from "@/components/images/Images";
import { Navbar } from "@/components/navbar/NavBar";
import { ParallaxProvider } from "react-scroll-parallax";


export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <div className="body-hero">
        <ParallaxProvider>
          <Hero />
        </ParallaxProvider>
        <ImageGridHero />
        <Footer />
      </div>
    </main>
  );
}
