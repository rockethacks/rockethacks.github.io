import React from "react";
import Image from "next/image";
import { FaAws } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import { terminal } from "@/app/fonts/fonts";

// defining SponsorType and SponsorProps
export type SponsorType = {
  type: "image" | "icon";
  src?: string;
  icon?: "github" | "aws";
  alt: string;
  link: string;
};

interface SponsorProps {
  sponsors: SponsorType[];
}

const Sponsor: React.FC<SponsorProps> = ({ sponsors }) => {
  return (
    <div>
      <section
        id="sponsor"
        className="sponsor bg-gradient-to-b from-[#051735] from-10% to-[#030c1b] to-80% text-white py-16 px-5 md:px-10 xl:py-10 xl:px-[300px]"
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
          <div className="flex flex-col items-center justify-center gap-y-2 md:hidden">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                {sponsor.type === "image" && sponsor.src ? (
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={180}
                    height={180}
                    className={`hover:scale-110 transition-transform duration-300 object-contain ${sponsor.src.includes("xyz") ? "w-28 h-28" : ""
                      } ${sponsor.src.includes("spoke") ? "bg-white p-3" : ""}`}
                  />
                ) : sponsor.type === "icon" ? (
                  sponsor.icon === "github" ? (
                    <DiGithubFull className="h-28 w-28 hover:scale-110 transition-transform duration-300" />
                  ) : sponsor.icon === "aws" ? (
                    <FaAws className="h-28 w-28 hover:scale-110 transition-transform duration-300" />
                  ) : null
                ) : null}
              </a>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-5 justify-items-center items-center gap-8">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                {sponsor.type === "image" && sponsor.src ? (
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={180}
                    height={180}
                    className={`hover:scale-110 transition-transform duration-300 object-contain ${sponsor.src.includes("xyz") ? "w-28 h-28" : ""
                      } ${sponsor.src.includes("spoke") ? "bg-white p-3" : ""}`}
                  />
                ) : sponsor.type === "icon" ? (
                  sponsor.icon === "github" ? (
                    <DiGithubFull className="h-28 w-28 hover:scale-110 transition-transform duration-300" />
                  ) : sponsor.icon === "aws" ? (
                    <FaAws className="h-28 w-28 hover:scale-110 transition-transform duration-300" />
                  ) : null
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsor;
