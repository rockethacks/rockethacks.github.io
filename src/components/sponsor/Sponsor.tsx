import React from "react";
import Image from "next/image";
import { FaAws } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import { RiPerplexityLine } from "react-icons/ri";
import localFont from "next/font/local";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

export default function Sponsor() {
  return (
    <div>
      <section
        id="sponsor"
        className="sponsor h-screen text-white bg-cover bg-center relative py-16 px-5 md:px-10 xl:py-20 xl:px-[300px]"
      >
        {/* <Image
          src="/assets/backdrop.gif"
          alt="Person in space"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-60"
        /> */}
        <div className="text-3xl">
          <h2 className={`${terminal.className} text-center text-5xl`}>
            OUR SPONSORS
          </h2>
        </div>
        <div className="flex flex-row gap-x-3 items-start"></div>
        <main className="flex flex-row flex-wrap gap-3 justify-center md:justify-start lg:items-start">
          <div className="">
            <div className="relative  backdrop-blur-md rounded-xl bg-card-nested p-2.5 hover:scale-105 transition-transform">
              <a href="https://aws.amazon.com/">
                <FaAws
                  className="hover:scale-105 transition-transform mx-auto h-14 mt-6 min-w-16"
                  size={19}
                />
              </a>
            </div>
          </div>
          <div className="">
            <div className="relative rounded-xl  p-2.5 hover:scale-105 transition-transform">
              <a href="https://www.github.com/">
                <DiGithubFull
                  className="hover:scale-105 transition-transform mx-auto h-24 min-w-44"
                  size={24}
                />
              </a>
            </div>
          </div>
          <div className="">
            <div className="relative rounded-xl  p-2.5 hover:scale-105 transition-transform">
              <a href="https://www.perplexity.ai/">
                <img
                  src="/assets/sponsors/perplexity.png"
                  alt="Perplexity"
                  className="h-10 mt-7"
                />
              </a>
            </div>
          </div>
          <div className="">
            <div className="relative rounded-xl  p-2.5 hover:scale-105 transition-transform">
              <a href="https://www.perplexity.ai/">
                <img
                  src="/assets/sponsors/warp.png"
                  alt="Perplexity"
                  className="h-20 mt-2"
                />
              </a>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
