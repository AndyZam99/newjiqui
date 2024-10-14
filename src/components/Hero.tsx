"use client"
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export const Hero = () => {
    const background: BannerLayer = {
      image:
        "/static/bg.webp",
      translateY: [0, 20],
      opacity: [1, 0.3],
      scale: [1.2, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true
    };

    const foreground: BannerLayer = {
        image:
          "/static/bg-right.webp",
        translateX: [0, 100],
        scale: [1, 1.4, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
      };
    
      const foregroundTwo: BannerLayer = {
        image:
          "/static/bg-left.webp",
        translateX: [0, -100],
        scale: [1, 1.4, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
      };
  
    const headline: BannerLayer = {
      translateY: [30, 0],
      scale: [1, 1.05, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h1 className="md:text-7xl text-5xl text-neutral-700 uppercase">¡Ya está por llegar!</h1>
          <h2 className="font-[200] text-neutral-500 text-[3rem] mt-2 uppercase tracking-widest lg:tracking-[1.2rem]">Próximamente</h2>
          <a href="logo" className="z-100 text-xl mt-4 p-4 text-neutral-800 bg-green px-14 rounded-xl font-light uppercase tracking-widest hover:bg-white hover:text-green duration-300 transition">Desliza hacía abajo para ver</a>
        </div>
      )
    };
  
    const gradientOverlay: BannerLayer = {
      opacity: [0, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: <div className="gradient inset" />
    };
  
    return (
      <ParallaxBanner
        layers={[background, foregroundTwo , headline, foreground, gradientOverlay]}
        className="full"
      />
    );
  };