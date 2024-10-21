import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import client from "@/lib/sanityClient"; 
import imageUrlBuilder from "@sanity/image-url"; 
import { useRouter } from 'next/router';

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const CardCarousel = () => {
  const router = useRouter();
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState<ItemType[]>([]); 

  const fetchNoticias = async () => {
    try {
      const results = await client.fetch(
        `*[_type == "noticia"]{titulo, contenido, imagenDestacada}`
      );
      const formattedItems = results.map((noticia: any, index: number) => ({
        id: index, 
        url: urlFor(noticia.imagenDestacada).url(), 
        category: "Noticia", 
        title: noticia.titulo,
        description: noticia.contenido[0]?.children[0]?.text || "Descripción no disponible",
      }));
      setItems(formattedItems);
    } catch (error) {
      console.error("Error al obtener noticias:", error);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="" ref={ref}>
      <div className="relative overflow-hidden mb-16 mt-24">
        <div className="max-w-6xl ml-10">
          <p className="mb-4 text-3xl text-black font-semibold">
            Noticias. <span className="text-yellow-500">Ver actualidad.</span>
          </p>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>
  
        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
  
      <div className="flex justify-center mt-8">
        <input
          type="button"
          value="Ver todo"
          className="px-2 py-3 -mt-[37px] bg-transparent text-pink-500 text-xl font-semibold rounded-2xl cursor-pointer transition-colors"
          onClick={() => router.push('/noticias')}
        />
      </div>
    </section>
  );  
};

const Card = ({ url, category, title, description }: ItemType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-[20px] bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-[20px] bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase text-violet-300">
          {category}
        </span>
        <p className="my-2 text-3xl font-bold">{title}</p>
        <p className="text-lg text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default CardCarousel;

type ItemType = {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
};
