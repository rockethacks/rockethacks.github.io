import React from "react";
import localFont from "next/font/local";
import { FaDiscord } from "react-icons/fa";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

export default function Contact() {
  return (
    <div>
      <section
        id="contact"
        className="sponsor bg-gradient-to-b from-[#081d41]/50 from-10% to-[#030c1b] to-80% text-white py-16 px-5 md:px-10 xl:py-20 xl:px-[300px]"
      >
        <div className="text-center">
          <h2
            className={`${terminal.className} text-4xl md:text-6xl font-bold mb-8`}
          >
            MORE QUESTIONS?
          </h2>
          <button className="bg-[#2563EB] px-3 py-2 rounded-lg text-base flex mx-auto items-center justify-center">
            <FaDiscord className="h-5 w-auto px-1" /> JOIN OUR DISCORD
          </button>
        </div>
      </section>
    </div>
  );
}
