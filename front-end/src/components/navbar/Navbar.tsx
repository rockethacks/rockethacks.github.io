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
    
    // If it's the Sponsors link, scroll to the sponsor button and trigger glow
    if (children === 'SPONSORS') {
      const sponsorButton = document.querySelector('#sponsor-interest-form');
      
      if (sponsorButton) {
        // Scroll to the sponsor button with offset
        sponsorButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Wait for scroll to complete then trigger glow
        setTimeout(() => {
          // Remove any existing glow class
          sponsorButton.classList.remove('sponsor-glow');
          // Force reflow
          void (sponsorButton as HTMLElement).offsetWidth;
          // Add glow class again
          sponsorButton.classList.add('sponsor-glow');
          
          // Optional: Remove the class after animation completes
          setTimeout(() => {
            sponsorButton.classList.remove('sponsor-glow');
          }, 1500); // Match this to your animation duration
        }, 500); // Give time for scroll to complete
      }
    } else {
      // For other links, just scroll to their sections
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left section with both logos */}
            <div className="flex items-center z-10">
              <Logo className="w-16 h-16 text-[#FFDA00]" />
              <NameLogo className="w-20 h-16 text-[#FFDA00]" />
            </div>
            
            {/* Center section with navigation links */}
            <div className="flex justify-center items-center z-10 absolute left-1/2 transform -translate-x-1/2">
              <NavLink href="#home">HOME</NavLink>
              <NavLink href="#about">ABOUT US</NavLink>
              <NavLink href="#faq">SPONSORS</NavLink>
              <NavLink href="#faq">FAQs</NavLink>
            </div>

            {/* Right section with Interest Form Button */}
            <div className="flex items-center z-10 mr-[100px]">
              <InterestFormButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;