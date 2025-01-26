import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row px-10 items-center">
      <div className="flex-1">
        <h1 className="text-2xl text-white">
          <Image
            src="/assets/name-logo.svg"
            alt="RocketHacks"
            height={80}
            width={80}
          />
        </h1>
      </div>
      <div className="flex flex-row space-x-10 mb-10 lg:mb-0">
        <div className="transition-transform hover:scale-110">
          <a
            href="https://x.com/UTRocketHacks"
            aria-label="Follow us on X (Twitter)"
          >
            <BsTwitterX
              className="text-white hover:text-[#FFDA20] transition-colors duration-300"
              size={24}
            />
          </a>
        </div>
        <div className="transition-transform hover:scale-110">
          <a
            href="https://www.instagram.com/rockethacks.ut"
            aria-label="Follow us on Instagram"
          >
            <BsInstagram
              className="text-white hover:text-[#FFDA20] transition-colors duration-300"
              size={24}
            />
          </a>
        </div>
        <div className="transition-transform hover:scale-110">
          <a
            href="https://www.linkedin.com/company/rocket-hacks"
            aria-label="Follow us on LinkedIn"
          >
            <BsLinkedin
              className="text-white hover:text-[#FFDA20] transition-colors duration-300"
              size={24}
            />
          </a>
        </div>
        <div className="transition-transform hover:scale-110">
          <a
            href="https://github.com/rockethacks"
            aria-label="Follow us on GitHub"
          >
            <BsGithub
              className="text-white hover:text-[#FFDA20] transition-colors duration-300"
              size={24}
            />
          </a>
        </div>
        <div className="transition-transform hover:scale-110">
          <a
            href="https://www.tiktok.com/@ut.rockethacks"
            aria-label="Follow us on TikTok"
          >
            <FaTiktok
              className="text-white hover:text-[#FFDA20] transition-colors duration-300"
              size={22}
            />
          </a>
        </div>
        <div className="transition-transform hover:scale-110">
          <a
            href="https://www.youtube.com/@RocketHacks25"
            aria-label="Subscribe to our YouTube channel"
          >
            <BsYoutube
              className="text-white hover:text-[#FFDA20] transition-colors duration-300"
              size={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
