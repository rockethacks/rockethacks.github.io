import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // Social media links as a constant
  const socialLinks = [
    {
      href: "https://rockethacks.devpost.com/?_gl=1*zs3ybp*_gcl_au*MjA1MjQ4MjgxNC4xNzM2ODEwMTE1*_ga*ODY0Mjg3NTg0LjE3Mjc3MTE4NjM.*_ga_0YHJK3Y10M*MTc0MDMyNzM0OC4yMi4wLjE3NDAzMjczNDguMC4wLjA.",
      ariaLabel: "Find out more on Devpost",
      icon: SiDevpost,
      size: 24
    },
    {
      href: "https://x.com/UTRocketHacks",
      ariaLabel: "Follow us on X (Twitter)",
      icon: BsTwitterX,
      size: 24
    },
    {
      href: "https://www.instagram.com/rockethacks.ut",
      ariaLabel: "Follow us on Instagram",
      icon: BsInstagram,
      size: 24
    },
    {
      href: "https://www.linkedin.com/company/rocket-hacks",
      ariaLabel: "Follow us on LinkedIn",
      icon: BsLinkedin,
      size: 24
    },
    {
      href: "https://github.com/rockethacks",
      ariaLabel: "Follow us on GitHub",
      icon: BsGithub,
      size: 24
    },
    {
      href: "https://www.tiktok.com/@ut.rockethacks",
      ariaLabel: "Follow us on TikTok",
      icon: FaTiktok,
      size: 22
    },
    {
      href: "https://www.youtube.com/@RocketHacks25",
      ariaLabel: "Subscribe to our YouTube channel",
      icon: BsYoutube,
      size: 24
    }
  ];

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
        {socialLinks.map((social, index) => (
          <div key={index} className="transition-transform hover:scale-110">
            <Link
              href={social.href}
              aria-label={social.ariaLabel}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.createElement(social.icon, {
                className: "text-white hover:text-[#FFDA20] transition-colors duration-300",
                size: social.size
              })}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
