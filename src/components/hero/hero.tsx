// src/components/hero/Hero.tsx
import React from "react";

export const Hero = () => {
  // Add connection verification on component mount

  return (
    <section
      id="home"
      className="pb-40 w-full flex flex-col items-center justify-center"
    >
      <video
        src="/blackhole.webm"
        autoPlay
        loop
        muted
        className="opacity-50 -z-10 absolute inset-y-0 h-screen "
        // className="opacity-40 -z-10 "
      ></video>
      <div className="relative py-52">
        <h1 className="text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 text-center text-balance m-0 md:m-10">
          Join the biggest hackathon in the midwest!
        </h1>
        <br />
      </div>
    </section>
  );
};

export default Hero;
