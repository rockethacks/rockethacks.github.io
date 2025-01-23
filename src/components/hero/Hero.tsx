import React from "react";
import localFont from "next/font/local";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

export default function hero() {
  return (
    <div>
      <section
        id="home"
        className="home text-white relative text-center h-screen overflow-hidden"
      >
        <img
          src={"/assets/Retro_Futuristic_Moebius.png"}
          alt="Rocky"
          className="mx-auto opacity-40 absolute inset-0 h-full w-full object-cover md:object-"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div>
            <h1 className={`${terminal.className} text-5xl uppercase`}>
              presenting
            </h1>
          </div>
          <div>
            <h1 className="text-5xl">
              <span className="text-blue-700">{"{ "}</span>
              <span className="text-[#FFDA1F]">RocketHacks</span>
              <span className="text-blue-700">{" }"}</span>
            </h1>
          </div>
          <div>
            <h1 className={`${terminal.className} text-5xl uppercase mt-2`}>
              The biggest Hackathon <br /> in the midwest
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
