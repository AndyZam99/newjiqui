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
        <div>
          <h1 className="text-lg text-white">Jiji</h1>
        </div>
      </RoundedDrawerNav>
    </div>
  );
};
