"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import RocketHacks from "../../../public/assets/name-logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Navigation links as a constant
  const navLinks = [
    { href: "#about", label: "ABOUT US", mobileLabel: "About Us" },
    { href: "#sponsor", label: "SPONSORS", mobileLabel: "Sponsors" },
    { href: "#schedule", label: "SCHEDULE", mobileLabel: "Schedule" },
    { href: "#contact", label: "CONTACT", mobileLabel: "Contact" },
    { href: "#faq", label: "FAQ", mobileLabel: "FAQ" },
    {
      href: "https://forms.gle/RV3DVwCddkDvU5eK8",
      label: "CODE & CREATE",
      mobileLabel: "Code & Create",
      external: true
    },
    { href: "/team", label: "TEAM", mobileLabel: "Team" }
  ];

  return (
    <nav className="bg-[#030c1b] text-white text-base sticky top-0 z-20 shadow-xl">
      {/* Logo and Hamburger Menu */}
      <div className="container flex justify-around sm:justify-between sm:mx-auto md:justify-center md:space-x-20 items-center h-[3.8rem]">
        {/* Logo */}
        <div className="font-bold">
          <Link href="/">
            <RocketHacks className="h-16 w-auto" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="inline-block md:hidden z-30">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="space-x-10 hidden md:block lg:mr-20 font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              style={link.href.startsWith('#') ? { scrollBehavior: "smooth" } : undefined}
              onClick={link.external ? toggleMenu : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Full-Screen Navigation Menu */}
      {menuOpen && (
        <div className="bg-[#030c1b]/[99%] text-white inline-block xl:hidden fixed overflow-hidden inset-0 max-h-screen">
          <div className="flex flex-col space-y-10 items-center justify-center h-full text-3xl">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                onClick={toggleMenu}
              >
                {link.mobileLabel}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}