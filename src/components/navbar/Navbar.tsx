import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo.svg";
import NameLogo from "@/assets/name-logo.svg";
import Link from "next/link";
import Codeandcreate from "@/assets/CodeAndCreate.svg";
// import InterestFormButton from "@/components/navbar/InterestFormButton";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  closeMenu: () => void;
};

const NavLink = ({ href, children, closeMenu }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    closeMenu();

    if (children === "SPONSORS") {
      const sponsorButton = document.querySelector("#sponsor-interest-form");

      if (sponsorButton) {
        sponsorButton.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
          sponsorButton.classList.remove("sponsor-glow");
          void (sponsorButton as HTMLElement).offsetWidth;
          sponsorButton.classList.add("sponsor-glow");

          setTimeout(() => {
            sponsorButton.classList.remove("sponsor-glow");
          }, 1500);
        }, 500);
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-[#ffda00] hover:text-white transition-colors 
                text-xs sm:text-sm md:text-base lg:text-lg
                font-bold 
               px-2 py-2"
    >
      {children}
    </a>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add useEffect to handle body scroll locking
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative w-full">
      <nav className="bg-n-8/90 background-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center z-10 space-x-1 sm:space-x-2">
              <Logo className="w-16 h-16 text-[#FFDA00]" />
              <NameLogo className="w-24 h-24 text-[#FFDA00]" />
            </div>

            <div className="flex justify-center items-center z-10 absolute left-1/2 transform -translate-x-1/2 space-x-1 sm:space-x-2 md:space-x-4 hidden lg:flex">
              <NavLink href="#home" closeMenu={closeMenu}>
                <h1 className="lg:text-lg xl:text-2xl">HOME</h1>
              </NavLink>
              <NavLink href="#about" closeMenu={closeMenu}>
                <h1 className="lg:text-lg xl:text-2xl">ABOUT US</h1>
              </NavLink>
              <NavLink href="#sponsor" closeMenu={closeMenu}>
                <h1 className="lg:text-lg xl:text-2xl">SPONSORS</h1>
              </NavLink>
              <NavLink href="#faq" closeMenu={closeMenu}>
                <h1 className="lg:text-lg xl:text-2xl">FAQs</h1>
              </NavLink>
              <Link
                href="/documents/RocketHacks High School Flyer.pdf"
                className="mt-2"
              >
                <Codeandcreate className="w-32 h-32 text-[#FFDA00]" />
              </Link>
            </div>

            <div className="lg:hidden z-40">
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <RxCross2 className="w-6 h-6 text-[#FFDA00]" />
                ) : (
                  <RxHamburgerMenu className="w-6 h-6 text-[#FFDA00]" />
                )}
              </button>
            </div>

            {/* <div className="flex items-center z-10 mr-[40px] sm:mr-[60px] md:mr-[80px] lg:mr-[100px] hidden xl:inline-block">
              <InterestFormButton />
            </div> */}
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:hidden fixed top-0 left-0 w-full h-screen bg-[#030014] z-20`}
          >
            <div className="flex flex-col items-center justify-center space-y-6 h-full">
              <NavLink href="#home" closeMenu={closeMenu}>
                <h1 className="text-3xl">HOME</h1>
              </NavLink>
              <NavLink href="#about" closeMenu={closeMenu}>
                <h1 className="text-3xl">ABOUT US</h1>
              </NavLink>
              <NavLink href="#sponsor" closeMenu={closeMenu}>
                <h1 className="text-3xl">SPONSOR US</h1>
              </NavLink>
              <Link
                href="/documents/RocketHacks High School Flyer.pdf"
                target="_blank"
              >
                <h1
                  className="
                text-[#ffda00] hover:text-white transition-colors 
                px-2 sm:px-3 md:px-4 
                py-1 sm:py-1.5 md:py-2 text-3xl font-bold
                "
                >
                  CODE {"&"} CREATE
                </h1>
              </Link>
              <NavLink href="#faq" closeMenu={closeMenu}>
                <h1 className="text-3xl">FAQ</h1>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
