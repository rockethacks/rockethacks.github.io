// src/components/navbar/Navbar.tsx
import React from 'react';
import Logo from '@/assets/logo.svg';
import NameLogo from '@/assets/name-logo.svg';
import InterestFormButton from '@/components/navbar/InterestFormButton';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isSponsors?: boolean;
};

const NavLink = ({ href, children, isSponsors }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSponsors) {
      const sponsorLink = document.querySelector('#sponsor-link');
      if (sponsorLink) {
        sponsorLink.scrollIntoView({ behavior: 'smooth' });
        sponsorLink.classList.remove('sponsor-glow'); // Remove existing animation if any
        void (sponsorLink as HTMLElement).offsetWidth; // Trigger reflow to restart animation
        sponsorLink.classList.add('sponsor-glow');
      }
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className="text-[#ffda00] hover:text-white transition-colors text-lg font-medium px-4 py-2"
    >
      {children}
    </a>
  );
};

export const Navbar = () => {
  return (
    <div className="relative">
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Left section with both logos */}
            <div className="flex items-center z-10">
              <Logo className="w-16 h-16 text-[#FFDA00]" />
              <NameLogo className="w-20 h-16 text-[#FFDA00]" />
            </div>
            
            {/* Right section */}
            <div className="flex justify-end items-center z-10">
              <NavLink href="#home">HOME</NavLink>
              <NavLink href="#about">ABOUT US</NavLink>
              <NavLink href="#sponsors" isSponsors={true}>SPONSOR US</NavLink>
              <NavLink href="#faq">FAQs</NavLink>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Interest Form Button */}
      <InterestFormButton className="absolute left-0 right-0 -bottom-16" />
    </div>
  );
};