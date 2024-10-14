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
    <div className="mt-24 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl w-full">
        
        {/* Columna de categorías */}
        <div className="p-6 bg-gray-100 rounded-xl shadow-md transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categorías</h2>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="text-lg text-gray-800 cursor-pointer hover:text-blue-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna con imagen destacada de la noticia reciente */}
        <div className="relative p-6 bg-white rounded-xl shadow-md transition-transform hover:scale-105">
          {noticiaReciente && noticiaReciente.imagenDestacada ? (
            <>
              <img
                src={urlFor(noticiaReciente.imagenDestacada).url()}
                alt="Imagen de la Noticia"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="absolute bottom-4 right-4 text-sm text-white bg-gray-800 p-2 rounded-full">
                {format(new Date(noticiaReciente.fechaPublicacion), "dd/MM/yyyy")}
              </p>
            </>
          ) : (
            <p>Cargando imagen...</p>
          )}
        </div>

        {/* Columna con contenido de la noticia reciente */}
        <div className="p-6 bg-white rounded-xl shadow-md transition-transform hover:scale-105">
          {noticiaReciente ? (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{noticiaReciente.titulo}</h2>
              <div className="text-gray-700 mb-4">
                <PortableText value={noticiaReciente.contenido} />
              </div>
              <Link href={`/noticias/${noticiaReciente.slug.current}`} className="text-blue-600 hover:underline">
                Leer más
              </Link>
            </>
          ) : (
            <p>Cargando descripción...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
