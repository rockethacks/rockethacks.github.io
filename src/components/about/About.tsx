import React from "react";
import { PiTerminalWindow } from "react-icons/pi";
import { IoDiamond } from "react-icons/io5";
import { AiOutlineDiscord } from "react-icons/ai";
import localFont from "next/font/local";
const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

export default function about() {
  return (
    <div>
      <section
        id="about"
        className="about-us bg-[#030c1b] text-white py-16 px-5 md:px-10 xl:py-20 xl:px-[300px]"
      >
        <div className="container text-left">
          <h2 className="text-3xl font-bold my-[10px]">ABOUT US</h2>
          <p className="mt-4 text-base text-pretty break-normal font-normal">
            RocketHacks is a 24-hour hackathon hosted by the University of
            Toledo, dedicated to fostering innovation and problem-solving among
            students from the Midwest and beyond.{" "}
            <br className="inline-block xl:hidden" />
            <br className="inline-block xl:hidden" /> This event will gather
            talented students, from budding programmers to visionary designers,
            to build real solutions to real-world challenges. With an emphasis
            on collaboration, creativity, and technical skills, RocketHacks will
            empower students to turn their ideas into impactful projects.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center align-middle text-base space-x-4">
            <div className="border border-blue-600 border-2 mt-16 text-center">
              <div className="px-8 py-8">
                <PiTerminalWindow
                  className="mx-auto mb-2"
                  size={64}
                  color="#E4335E"
                />
                <h3
                  className={`${terminal.className} mb-5 text-[#E4335E] text-[32px] `}
                >
                  Hackers
                </h3>
                <p className="text-balance break-normal text-base">
                  Applications for RocketHacks are now <br />
                  open. Apply to be a hacker today!
                </p>
                <br />
                <button className="bg-blue-600 py-3 px-20 rounded-md">
                  APPLY NOW
                </button>
                <br />
                <br />
              </div>
            </div>
            <div className="border border-blue-600 border-2 mt-16 text-center">
              <div className="px-11 py-5">
                <IoDiamond
                  className="mx-auto mb-2"
                  size={64}
                  color="#FFDA20"
                ></IoDiamond>
                <h3
                  className={`${terminal.className} mb-5 text-[#FFDA20] text-[32px] `}
                >
                  Sponsors
                </h3>
                <p className="text-balance break-normal text-base">
                  Are you interested in <br /> sponsoring RocketHacks? <br />{" "}
                  Check out the sponsorship <br /> packet for more info!
                </p>
                <br />

                <button className="bg-blue-600 py-3 px-20 rounded-md">
                  SPONSOR US
                </button>
                <br />
              </div>
            </div>
            <div className="border border-blue-600 border-2 mt-16 text-center">
              <div className="px-8 py-8">
                <AiOutlineDiscord
                  className="mx-auto mb-2"
                  size={64}
                  color="#5865F2"
                ></AiOutlineDiscord>
                <h3
                  className={`${terminal.className} mb-5 text-[#5865F2] text-[32px] `}
                >
                  Volunteer
                </h3>
                <p className="text-balance break-normal text-base">
                  Do you want to volunteer at <br /> RocketHacks this year? Join
                  the <br /> Discord Server
                </p>
                <br />

                <button className="bg-blue-600 py-3 px-20 rounded-md">
                  JOIN DISCORD
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
