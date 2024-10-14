import { TopLinkProps } from "@/types";

export const TopLink = ({ children, setHovered, title }: TopLinkProps) => (
    <span
      onMouseEnter={() => setHovered(title)}
      className="cursor-pointer text-neutral-500 transition-colors hover:text-neutral-500 mt-1"
    >
      {children}
    </span>
);