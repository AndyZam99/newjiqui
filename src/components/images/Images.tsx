import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { AiFillApple, AiFillFileImage } from "react-icons/ai";
import { useRef } from "react";
import Image from "next/image";

const ImageGridHero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <section ref={targetRef} className="bg-[#fcfcfc] h-[350vh]">
        <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />
          <Circles />
        </div>
      </section>
    </>
  );
};


const Copy = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
    const copyScale = useTransform(scrollYProgress, [0, 0.75], [0.5, 1]);
    const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
    const copyY = useTransform(scrollYProgress, [0, 0.75], ["7.5%", "0%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute px-8 w-full h-screen z-0 flex flex-col items-center justify-center"
    >
    <Image 
        width={1000}
        height={1000}
        src="/static/logo.gif"
        alt="Animación Logo Gobierno de Jiquilpan"
        className='h-auto w-200 border-0 '
        style={{ clipPath: 'inset(0% 2%)' }} 
      />
    </motion.div>
  );
};

const Images = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  // Invertimos los valores de transformación para cada imagen
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["0%", "-145%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      <motion.div
        className="col-span-2 relative z-10"
        style={{
          backgroundImage:
            "url(/static/1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      />
      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage:
            "url(/static/2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      />

      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage:
            "url(/static/3.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
            "url(/static/4.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
            "url(/static/5.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
            "url(/static/6.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      />
    </>
  );
};

const Circles = () => (
  <>
    <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
    <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
  </>
);

export default ImageGridHero;