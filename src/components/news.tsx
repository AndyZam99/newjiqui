import React, { useEffect, useState } from "react";
import client from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Noticia {
  imagenDestacada: any;
  contenido: any;
  titulo: string;
  fechaPublicacion: string;
  slug: {
    current: string;
  };
}

const ThreeColumnLayout = () => {
  const [noticiaReciente, setNoticiaReciente] = useState<Noticia | null>(null);

  const fetchNoticiaReciente = async () => {
    try {
      const result = await client.fetch(
        `*[_type == "noticia"] | order(fechaPublicacion desc)[0]{imagenDestacada, contenido, titulo, fechaPublicacion, slug}`
      );
      console.log("Noticia reciente:", result);
      setNoticiaReciente(result);
    } catch (error) {
      console.error("Error al obtener la noticia más reciente:", error);
    }
  };

  useEffect(() => {
    fetchNoticiaReciente();
  }, []);

  const items = ["Categoría 1", "Categoría 2", "Categoría 3", "Categoría 4"];

  return (
    <div className="flex justify-center items-center mt-7 mb-16">
      <div className="flex flex-col md:flex-row justify-between mx-auto max-w-6xl w-full">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 p-4 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Categorías</h2>
          <ul className="list-none space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-lg text-gray-800 cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3 mb-6 md:mb-0 relative flex flex-col items-center p-4 transition-transform transform hover:scale-105">
          {noticiaReciente && noticiaReciente.imagenDestacada ? (
            <>
              <img
                src={urlFor(noticiaReciente.imagenDestacada).url()}
                alt="Imagen de la Noticia"
                className="w-full h-auto rounded-[20px] shadow-md mb-4"
              />
              <p className="absolute bottom-2 right-2 text-lg text-gray-800 bg-white p-1 rounded-[20px] shadow">
                {format(new Date(noticiaReciente.fechaPublicacion), "dd/MM/yyyy")}
              </p>
            </>
          ) : (
            <p>Cargando imagen...</p>
          )}
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-start p-4 transition-transform transform hover:scale-105">
          {noticiaReciente ? (
            <>
              <h2 className="text-3xl font-bold text-gray-800 text-start mb-4">
                {noticiaReciente.titulo}
              </h2>
              <div className="text-lg text-gray-800 text-justify">
                <PortableText value={noticiaReciente.contenido} />
              </div>
              <Link href={`/noticias/${noticiaReciente.slug.current}`}>
                <button className="-mt-4 px-2 py-2 text-gray-400 text-xs">Leer más</button>
              </Link>
            </>
          ) : (
            "Cargando descripción..."
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
