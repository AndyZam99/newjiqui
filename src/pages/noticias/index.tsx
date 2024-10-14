"use client";
import React, { useEffect, useState } from "react";
import client from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import Card from "@/components/NoticiaCard";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

interface Noticia {
  categoria: string | number;
  titulo: string;
  slug: { current: string };
  fechaPublicacion: string;
  imagenDestacada: any;
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const NoticiaPage = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const noticiasPorPagina = 6;

  const fetchNoticias = async () => {
    try {
      const results: Noticia[] = await client.fetch(
        `*[_type == "noticia"]{titulo, slug, fechaPublicacion, imagenDestacada, categoria}` 
      );
      setNoticias(results);
    } catch (error) {
      console.error("Error al obtener noticias:", error);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  const background: BannerLayer = {
    image: "/static/bg.webp",
    translateY: [0, 20],
    opacity: [1, 0.3],
    scale: [1.2, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const foreground: BannerLayer = {
    image: "/static/bg-right.webp",
    translateX: [0, 100],
    scale: [1, 1.4, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const foregroundTwo: BannerLayer = {
    image: "/static/bg-left.webp",
    translateX: [0, -100],
    scale: [1, 1.4, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [30, 0],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="flex flex-col items-center justify-center w-full text-center">
        <h1 className="md:text-7xl text-5xl text-black uppercase">Noticias</h1>
        <p className="text-black text-lg mt-4">Noticias, eventos y notas destacadas de la ciudad</p>
      </div>
    ),
  };

  const indexOfLastNoticia = currentPage * noticiasPorPagina;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPorPagina;
  const currentNoticias = noticias.slice(indexOfFirstNoticia, indexOfLastNoticia);
  const totalPages = Math.ceil(noticias.length / noticiasPorPagina);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ParallaxProvider>
        <div>
          <ParallaxBanner layers={[background, foreground, foregroundTwo, headline]} className="h-[90vh]" />

          <div className="absolute top-8 left-8">
            <Link href="/" passHref className="flex items-center mt-16 text-blue-600 bg-opacity-50 bg-white rounded-2xl px-2 hover:text-blue-800">
                <FaArrowLeft className="mr-2" />
                Inicio
            </Link>
          </div>

          <div className="p-10 relative text-center">
            {currentNoticias.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto max-w-6xl justify-center">
                {currentNoticias.map((noticia) => (
                  <div key={noticia.slug.current} className="w-full max-w-sm mx-auto relative mb-10">
                    <Card 
                      titulo={noticia.titulo} 
                      fecha={new Date(noticia.fechaPublicacion).toLocaleDateString()} 
                      categoria={noticia.categoria} 
                      imagenUrl={urlFor(noticia.imagenDestacada).url()} 
                      slug={noticia.slug.current}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay noticias disponibles.</p>
            )}

            <div className="flex justify-center mt-10">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-2 px-4 py-2 rounded-2xl ${currentPage === index + 1 ? 'bg-blue-100 text-white' : 'bg-gray-300 text-black'}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </ParallaxProvider>
      <Footer />
    </>
  );
};


export default NoticiaPage;
