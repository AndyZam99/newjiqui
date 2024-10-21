"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import client from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from 'next/router';
import { styles } from "@/styles";

interface Banner {
  titulo: string;
  contenido: any[];
  imagenDestacada: any;
  slug: { current: string }; 
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export const NewsContainer = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const router = useRouter();

  const fetchBanners = async () => {
    try {
      const results: Banner[] = await client.fetch(
        `*[_type == "banner"]{titulo, contenido, imagenDestacada, slug}` 
      );
      setBanners(results);
    } catch (error) {
      console.error("Error al obtener banners:", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleLeftClick = () => {
    if (banners.length > 1) { 
      if (currentIndex === 0) {
        setShowBanner(false);
      } else {
        setCurrentIndex((prev) => prev - 1);
        setShowBanner(true);
      }
    }
  };
  
  const handleRightClick = () => {
    if (banners.length > 1) { 
      const nextIndex = currentIndex < banners.length - 1 ? currentIndex + 1 : 0;
      setCurrentIndex(nextIndex);
      setShowBanner(true);
    }
  };
  

  const handleVerMasClick = () => {
    const slug = banners[currentIndex].slug.current; 
    router.push(`/rel/${slug}`); 
  };

  return (
    <div className="flex items-center justify-center mb-16">
      <div
        className="flex flex-col items-start justify-start px-6 py-12 overflow-hidden"
        style={{
          backgroundImage: showBanner && banners.length > 0
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${urlFor(banners[currentIndex].imagenDestacada).url()})`
            : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/static/hero.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "70vh",
          width: "95%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
    >
        <div className="relative z-10 p-10">
          {showBanner && banners.length > 0 ? (
            <div className="text-left text-white">
              <h2 className="text-4xl">{banners[currentIndex].titulo}</h2>
              <div className="mt-4 text-xl">
                {banners[currentIndex].contenido.map((block) => {
                  if (block._type === "block") {
                    return block.children.map(
                      (child: { _key: React.Key | null | undefined; text: string }) => (
                        <p key={child._key}>{child.text}</p>
                      )
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ) : (
            <div className="text-left mb-10 text-white">
              <h1 className={styles.h1}>
                En Jiquilpan, juntos somos más
              </h1>
              <br />
              <div className="mt-4">
                <p className={styles.h2}>
                  Cuna del General Lázaro Cárdenas donde la historia y progreso se unen.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6"> 
            <input
              type="button"
              value="Ver más"
              className={styles.h3}
              onClick={handleVerMasClick}
            />

            <div className="flex items-center justify-start mt-28 space-x-4">
              <button
                className="p-2 bg-transparent border-2 border-white rounded-full hover:bg-yellow-100 transition-colors"
                onClick={handleLeftClick}
              >
                <ChevronLeftIcon className="w-4 h-4 text-white" />
              </button>
              <button
                className="p-2 bg-white border-2 border-white rounded-full hover:bg-yellow-100 transition-colors"
                onClick={handleRightClick}
              >
                <ChevronRightIcon className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
