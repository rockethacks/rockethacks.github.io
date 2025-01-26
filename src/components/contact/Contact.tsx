import React from "react";
import localFont from "next/font/local";
import { FaDiscord } from "react-icons/fa";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

export default function Contact() {
  return (
    <div className="flex items-center justify-center h-80 bg-gradient-to-b from-[#030c1b]/50 from-28% to-[#081d41]/60 to-90% text-white">
      <section
        id="contact"
        className="text-center py-16 px-5 md:px-10 xl:py-20 xl:px-[300px]"
      >
        <h2
          className={`${terminal.className} text-4xl md:text-6xl font-bold mb-8`}
        >
          HAVE ANY QUESTIONS?
        </h2>
        <a href="https://discord.gg/9NHTphRSUv">
          <button className="bg-[#2563EB] px-3 py-2 rounded-lg text-base flex mx-auto items-center justify-center">
            <FaDiscord className="h-5 w-auto px-1" /> JOIN OUR DISCORD
          </button>
        </a>
      </section>
    </div>
  );
}