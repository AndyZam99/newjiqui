import React from "react";
import { NavbarTitles } from "@/constants/indext";
import { RoundedDrawerNav } from "./RoundedDrawerNav";

export const Navbar = () => {
  return (
    <div className="bg-white">
      <RoundedDrawerNav
        links={NavbarTitles}
        navBackground="bg-white"
        bodyBackground="bg-black"
      >
        <div className="flex flex-col items-center justify-center px-12 py-32">
          <p className="text-center">
            {/* TODO: Configurar banner de noticia */}
            La imagen de noticias va aquí {":)"}
          </p>
        </div>
      </RoundedDrawerNav>
    </div>
  );
};