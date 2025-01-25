import React from "react";
import Image from "next/image";
import { FaAws } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import localFont from "next/font/local";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

export default function Sponsor() {
  return (
    <div>
      <section
        id="sponsor"
        className="sponsor bg-gradient-to-b from-[#081d41] from-10% to-[#030c1b] to-80% text-white py-16 px-5 md:px-10 xl:py-20 xl:px-[300px]"
      >
        <div className="text-center">
          <h2
            className={`${terminal.className} text-4xl md:text-6xl font-bold mb-8`}
          >
            OUR SPONSORS
          </h2>
        </div>

        <div className="mt-12">
          {/* Mobile View */}
          <div className="flex flex-col items-center justify-center space-y-3 md:hidden">
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAws className="h-16 w-auto" />
            </a>
            <a
              href="https://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiGithubFull className="h-24 w-auto" />
            </a>
            <a
              href="https://www.perplexity.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/sponsors/perplexity.png"
                alt="Perplexity"
                className="h-10 w-44 lg:w-auto"
              />
            </a>
            <a
              href="https://www.warp.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/sponsors/warp.png"
                alt="Warp"
                className="h-24 w-auto"
              />
            </a>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex flex-row gap-x-6 justify-center items-center">
            {/* AWS */}
            <div className="flex items-center justify-center h-24 w-24 rounded-xl transform hover:scale-105 transition duration-300">
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaAws className="h-16 w-16" />
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center justify-center h-24 w-40 rounded-xl transform hover:scale-105 transition duration-300">
              <a
                href="https://www.github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGithubFull className="h-24 w-auto" />
              </a>
            </div>

            {/* Perplexity */}
            <div className="flex items-center justify-center h-24 w-40 rounded-xl transform hover:scale-105 transition duration-300">
              <a
                href="https://www.perplexity.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/sponsors/Perplexity.png"
                  alt="Perplexity"
                  width={150}
                  height={150}
                />
              </a>
            </div>

            {/* Warp */}
            <div className="flex items-center justify-center  h-24 w-40 rounded-xl transform hover:scale-105 transition duration-300">
              <a
                href="https://www.warp.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/sponsors/warp.png"
                  alt="Warp"
                  width={200}
                  height={200}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
