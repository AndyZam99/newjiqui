import { styles } from "@/styles";
import React from "react";
import Link from 'next/link'; 

const CTAWithOverlayText = () => {
  return (
    <div 
      className="relative mt-24 bg-gray-100 mx-auto h-[70vh] w-[95%] mb-16 flex items-center justify-center rounded-[20px] overflow-hidden"
    >
      <img
        src="/static/cta.webp" 
        alt="Imagen de CTA"
        className="object-cover" 
      />


      <div className="absolute inset-0 flex flex-col justify-center text-center bg-black bg-opacity-50">
        <div className="ml-7">
          <h1 className={`text-3xl text-black text-center mb-7 ${styles.h1}`}>
            Descubre la magia de Jiquilpan
          </h1>

          <div className="mt-20">
            <Link 
              href="/" 
              className={styles.h3}
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAWithOverlayText;
