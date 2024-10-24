import React, { useEffect, useState } from "react";
import client from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import Card from "@/components/NoticiaCard";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Noticia {
  categoria: string; 
  titulo: string;
  slug: { current: string };
  fechaPublicacion: string;
  imagenDestacada: any;
}

interface Categoria {
  _id: string;
  nombre: string;
  slug: { current: string };
}

const ThreeColumnLayout = () => {
  const [currentNoticias, setCurrentNoticias] = useState<Noticia[]>([]);
  const [categories, setCategories] = useState<Categoria[]>([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredItems, setFilteredItems] = useState<Categoria[]>([]); 

  const fetchCategories = async () => {
    try {
      const result = await client.fetch(`*[_type == "categoria"]{_id, nombre, slug}`);
      setCategories(result); 
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  const fetchNoticiasRecientes = async () => {
    try {
      const result = await client.fetch(
        `*[_type == "noticia"] | order(fechaPublicacion desc)[0...2]{
          titulo, 
          fechaPublicacion, 
          "categoria": categoria->nombre, // Expandir la referencia para obtener el nombre de la categoría
          imagenDestacada, 
          slug
        }`
      );
      setCurrentNoticias(result);
    } catch (error) {
      console.error("Error al obtener la noticia más reciente:", error);
    }
  };

  useEffect(() => {
    fetchCategories(); 
    fetchNoticiasRecientes(); 
  }, []);

  useEffect(() => {
    const filtered = categories.filter((item) =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, categories]);

  return (
    <div className="mt-24 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl w-full">

        {currentNoticias.length > 0 && (
          <div className="md:col-span-1 w-full max-w-sm h-auto mx-auto relative mb-10">
            <Card 
              titulo={currentNoticias[0].titulo} 
              fecha={new Date(currentNoticias[0].fechaPublicacion).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })} 
              categoria={currentNoticias[0].categoria}
              imagenUrl={urlFor(currentNoticias[0].imagenDestacada).url()} 
              slug={currentNoticias[0].slug.current}
            />
          </div>
        )}

        <div className="md:col-span-1 p-5 bg-gray-100 rounded-xl shadow-md transition-transform hover:scale-105"
            style={{ maxHeight: '400px', maxWidth: '350px' }}>
          <input
            type="text"
            placeholder="Buscar categoría"
            className="p-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categorías</h2>

          <ul className="space-y-2 overflow-y-auto" style={{ maxHeight: '250px' }}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <li
                  key={item._id}
                  className="text-lg text-gray-800 cursor-pointer hover:text-blue-600"
                >
                  {item.nombre}
                </li>
              ))
            ) : (
              <li className="text-lg text-gray-800">No se encontraron categorías</li>
            )}
          </ul>
        </div>

        {currentNoticias.length > 1 && (
          <div className="md:col-span-1 w-full max-w-sm h-auto mx-auto relative mb-10">
            <Card 
              titulo={currentNoticias[1].titulo} 
              fecha={new Date(currentNoticias[1].fechaPublicacion).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })} 
              categoria={currentNoticias[1].categoria}
              imagenUrl={urlFor(currentNoticias[1].imagenDestacada).url()} 
              slug={currentNoticias[1].slug.current}
            />
          </div>
        )}
      </div>
    </div>
  ); 
};

export default ThreeColumnLayout;
