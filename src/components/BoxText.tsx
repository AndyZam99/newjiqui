import { motion } from "framer-motion";

const BoxText = () => {
  return (
    <div className="grid place-content-center px-4 py-12">
      <SpinningBoxText />
    </div>
  );
};

const SpinningBoxText = () => {
  return (
    <span className="flex flex-col items-center justify-center gap-6 md:text-4xl text-3xl font-light text-white md:flex-row md:gap-4 text-center">
      Achieve it all with us <Box front='Monitor' bottom='Detect' back='Protect' top='Thrive' />
    </span>
  );
};

interface BoxProps {
  front: string;
  bottom: string;
  back: string;
  top: string;
}

const Box = ({ front, bottom, back, top }: BoxProps) => {
  return (
    <motion.span
      className="relative h-20 w-72 font-black uppercase"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center -40px",
      }}
      initial={{ rotateX: "0deg" }}
      animate={{
        rotateX: [
          "0deg",
          "90deg",
          "90deg",
          "180deg",
          "180deg",
          "270deg",
          "270deg",
          "360deg",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "backInOut",
        times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
      }}
    >
      {/* FRONT */}
      <span className="absolute flex h-full w-full items-center justify-center border-2 border-greenLight bg-green text-white">
        {front}
      </span>

      {/* BOTTOM */}
      <span
        style={{ transform: "translateY(5rem) rotateX(-90deg)" }}
        className="absolute flex h-full w-full origin-top items-center justify-center border-2 border-greenLight bg-green text-white"
      >
        {bottom}
      </span>

      {/* TOP */}
      <span
        style={{ transform: "translateY(-5rem) rotateX(90deg)" }}
        className="absolute flex h-full w-full origin-bottom items-center justify-center border-2 border-greenLight bg-green text-white"
      >
        {top}
      </span>

      {/* BACK */}
      <span
        style={{
          transform: "translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)",
        }}
        className="absolute flex h-full w-full origin-center items-center justify-center border-2 border-greenLight bg-green text-white"
      >
        {back}
      </span>
    </motion.span>
  );
};

export default BoxText;