// src/components/hero/Hero.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  // Add connection verification on component mount

  return (
    <section
      id="home"
      className="pb-40 w-full flex flex-col items-center justify-center min-h-screen"
    >
      <video
        width="1920"
        height="1080"
        autoPlay
        loop
        muted
        className="opacity-40 absolute"
        // className="opacity-40 -z-10 "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="relative py-44 md:py-36">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 text-center text-balance m-1 md:m-28 lg:m-16 text-4xl lg:text-6xl xl:text-8xl">
          Join the biggest <br className="hidden xl:block" /> hackathon in the
          midwest!
        </h1>
        <br />
      </div>
      <Link href="https://portal.rockethacks.org">
        <Button
          variant="default"
          className={`bg-transparent text-white rounded-md
               border-2 border-[#FFDA00]
               transform hover:scale-105
               transition-all duration-300
               backdrop-blur-sm
               hover:bg-[#FFDA00]/10 text-md md:text-2xl p-4 md:p-7
               `}
        >
          Apply Now
        </Button>
      </Link>
    </section>
  );
};

export default Hero;
