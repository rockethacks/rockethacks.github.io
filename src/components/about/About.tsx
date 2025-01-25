import React from "react";
import { PiTerminalWindow } from "react-icons/pi";
import { IoDiamond } from "react-icons/io5";
import { AiOutlineDiscord } from "react-icons/ai";
import localFont from "next/font/local";
import Link from "next/link";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

export default function About() {
  return (
    <div>
      <section
        id="about"
        className="about-us bg-gradient-to-b from-[#030c1b] from-50% to-[#081d41] to-90% text-white py-16 px-5 md:px-10 xl:py-20 xl:px-[300px]"
      >
        <div className="container text-left">
          <h2
            className={`${terminal.className} text-4xl md:text-6xl my-[10px] text-center`}
          >
            ABOUT US
          </h2>
          <p className="mt-4 text-base text-pretty font-normal text-center">
            RocketHacks is a 24-hour hackathon hosted by the University of
            Toledo, dedicated to fostering innovation and problem-solving among
            students from the Midwest and beyond. This event will gather
            talented students, from budding programmers to visionary designers,
            to build real solutions to real-world challenges. With an emphasis
            on collaboration, creativity, and technical skills, RocketHacks will
            empower students to turn their ideas into impactful projects.
          </p>
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 mt-10 max-w-5xl mx-auto">
            {/* Box 1 */}
            <div className="flex-1 border-2 border-blue-600 rounded-lg text-center p-8 flex flex-col items-center justify-between">
              <div>
                <PiTerminalWindow
                  className="mx-auto mb-4"
                  size={64}
                  color="#E4335E"
                />
                <h3
                  className={`${terminal.className} mb-4 text-[#E4335E] text-[32px]`}
                >
                  HACKERS
                </h3>
                <p className="text-base">
                  Applications for RocketHacks are now open.&nbsp; Apply to be a
                  hacker today!
                </p>
              </div>
              <Link href="https://portal.rockethacks.org/">
                <button className="bg-blue-600 py-3 px-20 rounded-md mt-6">
                  APPLY NOW
                </button>
              </Link>
            </div>
            {/* Box 2 */}
            <div className="flex-1 border-2 border-blue-600 rounded-lg text-center p-8 flex flex-col items-center justify-between">
              <div>
                <IoDiamond className="mx-auto mb-4" size={64} color="#FFDA20" />
                <h3
                  className={`${terminal.className} mb-4 text-[#FFDA20] text-[32px]`}
                >
                  SPONSORS
                </h3>
                <p className="text-base">
                  Are you interested in sponsoring RocketHacks? Check out the
                  sponsorship packet for more info!
                </p>
              </div>
              <Link href="/documents/sponsorship-packet.pdf" target="_blank">
                <button className="bg-blue-600 py-3 px-20 rounded-md mt-6">
                  SPONSOR
                </button>
              </Link>
            </div>
            {/* Box 3 */}
            <div className="flex-1 border-2 border-blue-600 rounded-lg text-center p-8 flex flex-col items-center justify-between">
              <div>
                <AiOutlineDiscord
                  className="mx-auto mb-4"
                  size={64}
                  color="#5865F2"
                />
                <h3
                  className={`${terminal.className} mb-4 text-[#5865F2] text-[32px]`}
                >
                  VOLUNTEER
                </h3>
                <p className="text-base">
                  Do you want to volunteer at RocketHacks this year? Join the
                  Discord Server.
                </p>
              </div>
              <Link href="https://discord.gg/9NHTphRSUv">
                <button className="bg-blue-600 py-3 px-20 rounded-md mt-6">
                  JOIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
