// Navbar

import { Dispatch, ReactNode, SetStateAction } from "react";

export interface LinkType {
    title: string;
    sublinks: { title: string; href: string }[];
};

export interface RoundedDrawerNavProps {
    navBackground: string;
    bodyBackground: string;
    children?: ReactNode;
    links: LinkType[];
}

export interface DesktopLinksProps {
    links: LinkType[];
    setHovered: Dispatch<SetStateAction<string | null>>;
    hovered: string | null;
    activeSublinks: LinkType["sublinks"];
}

export interface MobileLinksProps {
    links: LinkType[]; 
    open: boolean
}

export interface TopLinkProps {
    children: string;
    setHovered: Dispatch<SetStateAction<null | string>>;
    title: string;
}