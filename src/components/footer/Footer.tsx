import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
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
        <div>
          <a href="https://x.com/UTRocketHacks">
            <BsTwitterX color="white" size={24} />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/rockethacks.ut">
            <BsInstagram color="white" size={24} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/rocket-hacks">
            <BsLinkedin color="white" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
