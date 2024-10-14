"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import client from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url"; 
import { motion } from "framer-motion";  
import styles from '@/styles/bubble.module.css'; 
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/footer/Footer";


interface Noticia {
  autorNombre: string;
  titulo: string;
  contenido: any[]; 
  fechaPublicacion: string; 
  imagenDestacada: any; 
}

const builder = imageUrlBuilder(client); 

function urlFor(source: any) { 
  return builder.image(source);
}

const NoticiaDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const fetchNoticia = async () => {
    if (slug) {
      try {
        const result: Noticia = await client.fetch(
          `*[_type == "noticia" && slug.current == $slug][0]{titulo, contenido, fechaPublicacion, "autorNombre": autor->nombre, imagenDestacada}`,
          { slug }
        );
        setNoticia(result);
      } catch (error) {
        console.error("Error al obtener la noticia:", error);
      }
    }
  };

  useEffect(() => {
    fetchNoticia();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { top } = contentRef.current.getBoundingClientRect();
        if (top < window.innerHeight / 1.5) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!noticia) {
    return <p>Cargando noticia...</p>; 
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="absolute top-8 left-8 z-50"> 
        <Link href="/noticias" className="flex items-center mt-16 text-blue-600 bg-opacity-50 bg-white rounded-2xl px-2 hover:text-blue-800">
          <FaArrowLeft className="mr-2" />
          Noticias
        </Link>
      </div>
      {noticia.imagenDestacada && (
        <motion.div className="relative h-screen w-full overflow-hidden">
          <motion.img
            src={urlFor(noticia.imagenDestacada).url()}
            alt={noticia.titulo} 
            className="w-full h-full object-cover"
            initial={{ filter: "none" }} 
            animate={{ filter: isScrolled ? "blur(8px)" : "none" }} 
            exit={{ filter: "none" }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              className="text-6xl text-white font-extrabold text-center mb-7 mt-96"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.5 }} 
              transition={{ duration: 0.5 }}
            >
              {noticia.titulo.split(" ").map((word, idx) => (
                <span
                  className={`${styles.hoverText}`} 
                  key={idx}
                  style={{ marginRight: "0.25rem" }} 
                >
                  {word} 
                </span>
              ))}
            </motion.h1>
          </div>
        </motion.div>
      )}

      <div ref={contentRef} className="px-10 py-20 max-w-4xl mx-auto">
      {(noticia.fechaPublicacion || noticia.autorNombre) && (
          <motion.p 
            className="text-gray-400 text-lg mb-4"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 20 }} 
            transition={{ duration: 0.5 }}
          >
            {noticia.fechaPublicacion && `Publicado el: ${new Date(noticia.fechaPublicacion).toLocaleDateString()}`}
            {noticia.autorNombre && ` por ${noticia.autorNombre}`}
          </motion.p>
        )}

        <motion.div 
          className="text-lg leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 20 }} 
          transition={{ duration: 0.8 }}
        >
          {noticia.contenido.map((block) => {
            if (block._type === 'block') {
              return block.children.map((child: { _key: React.Key | null | undefined; text: string }) => (
                <p key={child._key} className="text-gray-700 text-justify">
                  {child.text}
                </p>
              ));
            }
            return null; 
          })}
        </motion.div>
      </div>
      <Footer />
    </div>
    
  );
};

export default NoticiaDetailPage;
