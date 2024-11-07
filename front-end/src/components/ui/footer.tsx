"use client";
import { Facebook, Instagram, Twitter , Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToEmailAndFocus = () => {
    const homeSection = document.querySelector('#home');
    const emailInput = document.querySelector<HTMLInputElement>('#email-input');
    
    if (homeSection && emailInput) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        emailInput.focus();
      }, 1000);
    }
  };

  return (
    <footer className="relative w-full py-8 px-4 mt-20 z-10">
      {/* Top Links */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <a href="/code-of-conduct" className="text-white/90 hover:text-white transition-colors">
          Code of Conduct
        </a>
        <span className="hidden md:inline text-white/50">•</span>
        <button 
          onClick={scrollToEmailAndFocus} 
          className="text-white/90 hover:text-white transition-colors cursor-pointer"
        >
          Join our Mailing List
        </button>
        <span className="hidden md:inline text-white/50">•</span>
        <a href="/sponsor" className="text-white/90 hover:text-white transition-colors">
          Sponsor Us
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-8 mb-8">
        <a 
          href="https://www.instagram.com/rockethacks.ut" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/80 hover:text-white transition-colors p-2"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a 
          href="https://x.com/UTRocketHacks" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors p-2"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a 
          href="https://facebook.com/rockethacks" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors p-2"
        >
          <Facebook className="w-6 h-6" />
        </a>
      </div>

      {/* Made with Love */}
      <div className="text-center text-white/90">
        <p>Made with ❤️ by RocketHacks Team</p>
      </div>
    </footer>
  );
};

export default Footer;