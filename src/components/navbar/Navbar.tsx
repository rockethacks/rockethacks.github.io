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

  return (
    <nav className="bg-[#030c1b] text-white text-base sticky top-0 z-20 shadow-xl">
      {/* Logo and Hamburger Menu */}
      <div className="container flex justify-around sm:justify-between sm:mx-auto  md:justify-center space-x-10 items-center h-[3.8rem]">
        {/* Logo */}
        <div className="font-bold">
          <Link href="/">
            <RocketHacks className="h-16 w-auto" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden z-30">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none" // Added right margin
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="space-x-10 hidden md:block lg:mr-20">
          <Link href="#about" style={{ scrollBehavior: "smooth" }}>
            About Us
          </Link>
          <Link href="#faq">FAQ</Link>
          <Link href="/sponsor">Sponsor</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>

      {/* Mobile Full-Screen Navigation Menu */}
      {menuOpen && (
        <div className="bg-[#030c1b]/[99%] text-white xl:hidden fixed overflow-hidden inset-0  max-h-screen">
          <div className="flex flex-col space-y-10 items-center justify-center h-full text-3xl">
            <Link href="#about" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="#faq" onClick={toggleMenu}>
              FAQ
            </Link>
            <Link href="/sponsor" onClick={toggleMenu}>
              Sponsor
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
