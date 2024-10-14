import { styles } from "@/styles";
import React from "react";

const CTAWithOverlayText = () => {
  return (
    <div 
      className="relative bg-gray-100 max-w-7xl mx-auto h-[400px] md:h-[500px] mb-16 flex items-center justify-center rounded-[20px] overflow-hidden"
    >
      <img
        src="/static/cta.webp" 
        alt="Imagen de CTA"
        className="object-cover" 
      />

      <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50">
        <div className="ml-7">
          <h1 className={styles.h1}>
            Descubre la magia <br/> de Jiquilpan
          </h1>

          <a
            href="/" 
            className={styles.h3}
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTAWithOverlayText;
