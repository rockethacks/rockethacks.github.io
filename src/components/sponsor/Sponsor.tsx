import React from "react";
import Image from "next/image";
import { FaAws } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import Mercy from "../../../public/assets/sponsors/mercy.svg";
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
            className={`${terminal.className} text-4xl md:text-6xl mb-8 text-[#FFDA20]`}
          >
            SPONSORS
          </h2>
        </div>

        <div className="mt-5">
          {/* Mobile View */}
          <div className="flex flex-col items-center justify-center space-y-2 md:hidden">
            <a
              href="https://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <DiGithubFull className="h-24 w-auto hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <FaAws className="h-20 w-auto hover:scale-110 transition-transform duration-300 mb-5" />
            </a>
            <a
              href="https://www.perplexity.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/sponsors/Perplexity.png"
                alt="Perplexity AI"
                height={180}
                width={180}
                className="hover:scale-110 transition-transform duration-300 mb-5"
              />
            </a>
            <a
              href="https://www.nysus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/sponsors/nysus.png"
                alt="Nysus Solutions"
                height={200}
                width={200}
                className="hover:scale-110 transition-transform duration-300 mt-3 mb-5"
              />
            </a>
            <a
              href="https://www.actualreality.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/sponsors/actual-tech.png"
                alt="Actual Reality"
                width={130}
                height={130}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.warp.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/sponsors/warp.png"
                alt="Warp Terminal"
                height={200}
                width={200}
                className="hover:scale-110 transition-transform duration-300 mb-2"
              />
            </a>
            <a
              href="https://www.photoroom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={"/assets/sponsors/photoroom.svg"}
                alt="Photoroom"
                width={200}
                height={200}
                className="hover:scale-110 transition-transform duration-300 mb-5"
              />
            </a>
            <a
              href="https://www.gen.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={"/assets/sponsors/xyz.svg"}
                alt=".xyz"
                width={80}
                height={80}
                className="hover:scale-110 transition-transform duration-300 mt-2 mb-5"
              />
            </a>
            <a
              href="https://www.mercy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={"/assets/sponsors/mercy.svg"}
                alt="Mercy Health"
                width={250}
                height={250}
                className="hover:scale-110 transition-transform duration-300 mb-5"
              />
            </a>
            <a
              href="https://huggingface.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={"/assets/sponsors/Hugging-Face.png"}
                alt="Hugging Face"
                width={250}
                height={250}
                className="hover:scale-110 transition-transform duration-300 mt-1 mb-5"
              />
            </a>
            <a
              href="https://www.standoutstickers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={"/assets/sponsors/Standout-Stickers.svg"}
                alt="Standout Stickers"
                width={250}
                height={250}
                className="hover:scale-110 transition-transform duration-300 mt-1 mb-5"
              />
            </a>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-3 gap-y-10 gap-x-12 justify-items-center items-center">
            <a
              href="https://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <DiGithubFull className="h-36 w-auto hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.mercy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-14"
            >
              <Mercy className="h-28 hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <FaAws className="h-28 w-auto hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.nysus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/sponsors/nysus.png"
                alt="Nysus Solutions"
                width={200}
                height={200}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.actualreality.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/sponsors/actual-tech.png"
                alt="Nysus Solutions"
                width={150}
                height={150}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.perplexity.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/sponsors/Perplexity.png"
                alt="Perplexity"
                width={200}
                height={200}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>

            <a
              href="https://www.warp.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-5"
            >
              <Image
                src="/assets/sponsors/warp.png"
                alt="Warp"
                width={200}
                height={200}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.photoroom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={"/assets/sponsors/photoroom.svg"}
                alt="Photoroom"
                width={250}
                height={250}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://gen.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-3"
            >
              <Image
                src={"/assets/sponsors/xyz.svg"}
                alt=".xyz"
                width={100}
                height={100}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://huggingface.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={"/assets/sponsors/Hugging-face.png"}
                alt="Hugging Face"
                width={250}
                height={250}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.standoutstickers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={"/assets/sponsors/standout-stickers.svg"}
                alt="Standout Stickers"
                width={250}
                height={250}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
