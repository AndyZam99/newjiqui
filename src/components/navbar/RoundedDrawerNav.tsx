import { motion } from "framer-motion";
import { RoundedDrawerNavProps } from "@/types"; 
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { DesktopLinks } from "./DesktopLinks";
import { FiMenu } from "react-icons/fi";
import { MobileLinks } from "./MobileLinks";
import { BsCloud, BsCloudFog, BsCloudLightning, BsCloudRain, BsCloudSun, BsSnow, BsSun } from "react-icons/bs";

export const RoundedDrawerNav = ({
  children,
  navBackground,
  bodyBackground,
  links,
}: RoundedDrawerNavProps) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [weatherData, setWeatherData] = useState<string | null>(null);
  const [icon, setIcon] = useState<JSX.Element | null>(null);

  const activeSublinks = useMemo(() => {
    if (!hovered) return [];
    const link = links.find((l) => l.title === hovered);
    return link ? link.sublinks : [];
  }, [hovered]);
  
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://wttr.in/Jiquilpan?format=%C+%t');
        const data = await response.text();
        const condition = data.split(' ');
        setWeatherData(condition[condition.length - 1]);
        const iconElement = getWeatherIcon(condition[0]);
        setIcon(iconElement);
      } catch (error) {
        console.error('Error fetching the weather data', error);
      }
    };
    
    fetchWeather();
  }, []);

  const getWeatherIcon = (condition: string): JSX.Element => {
    switch (condition) {
      case 'Clear':
        return <BsSun size={20} />; 
      case 'Partly':
        return <BsCloudSun size={20} />; 
      case 'Cloudy':
      case 'Overcast':
        return <BsCloud size={20} />; 
      case 'Light':
        return <BsCloudRain size={20} />; 
      case 'Heavy':
        return <BsCloudRain size={20} />; 
      case 'Thunderstorm':
        return <BsCloudLightning size={20} />; 
      case 'Snow':
        return <BsSnow size={20} />; 
      case 'Fog':
        return <BsCloudFog size={20} />; 
      default:
        return <BsCloud size={20} />; 
    }
  };
  
  return (
    <>
      <nav onMouseLeave={() => setHovered(null)} className={`${navBackground} p-4`}>
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <Image
              src="/static/logo.gif"
              width={200}
              height={200}
              alt="Logo de Jiquilpan"
              className="w-24"
            />
            <DesktopLinks
              links={links}
              setHovered={setHovered}
              hovered={hovered}
              activeSublinks={activeSublinks}
            />
          </div>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <p className="text-neutral-500">{weatherData}</p>
              <div className="bg-blue-400 p-2 rounded-lg text-white">
                {icon}
              </div>
            </div>
            <button
              onClick={() => setMobileNavOpen((pv) => !pv)}
              className="mt-0.5 block text-2xl text-neutral-200 md:hidden"
            >
              <FiMenu />
            </button>
          </div>
        </div>
        <MobileLinks links={links} open={mobileNavOpen} />
      </nav>
      <motion.main layout className={`${navBackground} px-2 pb-2`}>
        <div className={`${bodyBackground} rounded-3xl`}>
          {children}
        </div>
      </motion.main>
    </>
  );
};
