import React from "react";
import { FiBriefcase, FiCpu, FiEye, FiHeart, FiMapPin, FiMinimize, FiShield, FiSmile } from "react-icons/fi";
import styles from '@/styles/bubble.module.css'; 

const BubbleText: React.FC<{ text: string }> = ({ text }) => {
  const boldWords = ["mejor", "Michoacán"]; 

  return (
    <h1 className="text-3xl text-black text-center mb-7">
      {text.split(" ").map((word, idx) => (
        <span
          className={`${boldWords.includes(word) ? "font-bold" : "font-light"} ${styles.hoverText}`}
          key={idx}
          style={{ marginRight: "0.25rem" }} 
        >
          {word} 
        </span>
      ))}
    </h1>
  );
};

interface CardProps {
  title: string;
  subtitle: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const HoverDevCards: React.FC = () => {
  return (
    <div className="mb-16">
      <BubbleText text="Descubre la mejor ciudad para vivir en la ciénega de Michoacán" />
      
      <div className="flex justify-center">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 max-w-[1300px]">
          <Card
            title="Cercanía"
            subtitle="Estar siempre disponibles y accesibles para los demás."
            href="#"
            Icon={FiMapPin}
          />
          <Card
            title="Atención"
            subtitle="Escuchar y cuidar cada detalle en lo que hacemos."
            href="#"
            Icon={FiEye}
          />
          <Card
            title="Trabajo"
            subtitle="Esfuerzo constante para lograr grandes resultados."
            href="#"
            Icon={FiBriefcase}
          />
          <Card
            title="Sencillez"
            subtitle="Mantener las cosas claras y fáciles de entender."
            href="#"
            Icon={FiMinimize}
          />
          <Card
            title="Juventud"
            subtitle="Energía y frescura en cada acción."
            href="#"
            Icon={FiSmile}
          />
          <Card
            title="Innovación"
            subtitle="Buscar nuevas ideas para mejorar continuamente."
            href="#"
            Icon={FiCpu}
          />
          <Card
            title="Fortaleza"
            subtitle="Capacidad para superar obstáculos con determinación."
            href="#"
            Icon={FiShield}
          />
          <Card
            title="Humildad"
            subtitle="Reconocer nuestras limitaciones y aprender de los demás."
            href="#"
            Icon={FiHeart}
          />
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded-[20px] border-[2px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />

      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />

      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
