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
        {/* Si necesitas pasar contenido adicional, lo harías aquí */}
      </RoundedDrawerNav>
    </div>
  );
};
