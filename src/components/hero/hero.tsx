// src/components/hero/Hero.tsx
import React from "react";

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
      <div className="relative py-64 md:py-48">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 text-center text-balance m-1 md:m-28 lg:m-16 text-4xl lg:text-6xl xl:text-8xl">
          Join the biggest <br className="hidden xl:block"/> hackathon in the midwest!
        </h1>
        <br />
      </div>
    </section>
  );
};

export default Hero;
