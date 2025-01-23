"use client";
import React from "react";
import { Squares } from "@/components/ui/squares-background";
import Image from "next/image";

function faq() {
  return (
    <div className="space-y-8">
      {/* Fullscreen background section */}
      <section id="faq">
        <div className="h-screen bg-cover bg-center relative">
          {/* <Squares
            direction="down"
            speed={0.0}
            squareSize={40}
            borderColor="#182B53"
            hoverFillColor="#030C1B"
          /> */}
          <Image
            src="/assets/backdrop.gif"
            alt="backdrop"
            width={10000}
            height={10000}
            className="opacity-60 hidden lg:inline-block"
          />
          <Image
            src="/assets/backdrop-mobile.png"
            alt="backdrop"
            width={10000}
            height={10000}
            className="opacity-60 lg:hidden"
          />
          {/* FAQ text positioned at the top */}
          <div className="absolute top-8 py-10 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-white text-5xl z-20 hidden lg:block">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <h1 className="text-white text-5xl z-20 block lg:hidden">FAQ</h1>
            {/* <Image
              src={"/assets/macos-dark.png"}
              alt="window"
              width={3000}
              height={3000}
              className="z-20 w-full h-full mt-10"
            ></Image> */}
            <div className="mt-10 bg-[#202020] hidden xl:inline-block xl:h-[700px] xl:w-[1000px] shadow-xl shadow-black/20">
              <div className="inline">
                <Image
                  src={"/assets/buttons.svg"}
                  width={50}
                  height={50}
                  alt="MacOS Buttons"
                  loading="lazy"
                  className="pt-2 ml-3"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default faq;
