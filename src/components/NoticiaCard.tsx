import React from "react";
import Link from "next/link";

interface CardProps {
  titulo: string;
  fecha: string;
  categoria: string | number;
  imagenUrl: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({ titulo, fecha, categoria, imagenUrl, slug }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imagenUrl} alt={titulo} className="w-full h-48 object-cover rounded-t-2xl" />
      </div>
      <div className="card__content p-4">
        <h2 className="card__title text-lg font-semibold">{titulo}</h2>
        <h4 className="card__subtitle">{fecha}</h4>
        <div className="flex justify-between">
            <p className="card__description">Categoría: {categoria}</p>
            <Link href={`/noticias/${slug}`}>
            <button className="-mt-4 px-2 py-2 text-gray-400 text-xs">Leer más</button>
            </Link>
        </div>
        </div>
        </div>
  );
};

export default Card;
