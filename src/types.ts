export interface DesktopLinksProps {
    links: Array<{ title: string; sublinks: Array<{ title: string; href: string }> }>;
    setHovered: (title: string) => void;
    hovered: string | null;
    activeSublinks: Array<{ title: string; href: string }>;
  }
  
  export interface MobileLinksProps {
    links: Array<{ title: string; sublinks: Array<{ title: string; href: string }> }>;
    open: boolean;
  }
  
  export interface RoundedDrawerNavProps {
    children: React.ReactNode;
    navBackground: string;
    bodyBackground: string;
    links: Array<{ title: string; sublinks: Array<{ title: string; href: string }> }>;
  }
  
  export interface TopLinkProps {
    children: React.ReactNode;
    setHovered: (title: string) => void;
    title: string;
  }
  