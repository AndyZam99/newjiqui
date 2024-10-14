import { AnimatePresence, motion } from "framer-motion";
import { TopLink } from "./TopLink";
import { DesktopLinksProps } from "@/types";

export const DesktopLinks = ({ links, setHovered, hovered, activeSublinks }: DesktopLinksProps) => {
    return (
      <div className="ml-9 mt-0.5 hidden md:block">
        <div className="flex gap-6">
          {links.map((l) => (
            <TopLink key={l.title} setHovered={setHovered} title={l.title}>
              {l.title}
            </TopLink>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="space-y-4 py-6"
            >
              {activeSublinks.map((l) => (
                <a
                  className="block text-xl font-semibold text-neutral-500 transition-colors hover:text-neutral-500"
                  href={l.href}
                  key={l.title}
                >
                  {l.title}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };