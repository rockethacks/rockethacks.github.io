// src/components/navbar/Navbar.tsx
import React from 'react';
import Logo from '@/assets/logo.svg';
import NameLogo from '@/assets/name-logo.svg';
import InterestFormButton from '@/components/navbar/InterestFormButton';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (children === 'SPONSORS') {
      const sponsorButton = document.querySelector('#sponsor-interest-form');
      
      if (sponsorButton) {
        sponsorButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        setTimeout(() => {
          sponsorButton.classList.remove('sponsor-glow');
          void (sponsorButton as HTMLElement).offsetWidth;
          sponsorButton.classList.add('sponsor-glow');
          
          setTimeout(() => {
            sponsorButton.classList.remove('sponsor-glow');
          }, 1500);
        }, 500);
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className="text-[#ffda00] hover:text-white transition-colors font-medium px-2 md:px-4 py-2
                text-sm md:text-base lg:text-lg"
    >
      {children}
    </a>
  );
};

export const Navbar = () => {
  return (
    <div className="relative w-full">
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left section with both logos */}
            <div className="flex items-center z-10 space-x-1 md:space-x-2">
              <Logo className="w-10 h-10 md:w-16 md:h-16 text-[#FFDA00]" />
              <NameLogo className="w-14 h-14 md:w-20 md:h-16 text-[#FFDA00]" />
            </div>
            
            {/* Center section with navigation links */}
            <div className="flex justify-center items-center z-10 absolute left-1/2 transform -translate-x-1/2
                          space-x-1 sm:space-x-2 md:space-x-4">
              <NavLink href="#home">HOME</NavLink>
              <NavLink href="#about">ABOUT US</NavLink>
              <NavLink href="#faq">SPONSORS</NavLink>
              <NavLink href="#faq">FAQs</NavLink>
            </div>

            {/* Right section with Interest Form Button */}
            <div className="flex items-center z-10 mr-[60px] md:mr-[100px]">
              <InterestFormButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;