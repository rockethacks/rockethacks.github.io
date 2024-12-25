"use client";
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';

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
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
        <div className="flex items-center">
          <a 
            href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-[#FFDA00] hover:underline transition-colors px-4 py-2 text-center"
          >
            MLH Code of Conduct
          </a>
        </div>
        
        <span className="hidden md:inline text-white/50">•</span>
        
        <div className="flex items-center">
          <button 
            onClick={scrollToEmailAndFocus} 
            className="text-white/90 hover:text-[#FFDA00] hover:underline transition-colors px-4 py-2 text-center"
          >
            Join our Mailing List
          </button>
        </div>
        
        <span className="hidden md:inline text-white/50">•</span>
        
        <div className="flex items-center">
          <a 
            href="mailto:RocketHacks@utoledo.edu?subject=Sponsorship%20Inquiry" 
            className="text-white/90 hover:text-[#FFDA00] hover:underline transition-colors px-4 py-2 text-center"
          >
            Sponsor Us
          </a>
        </div>
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
          <X className="w-6 h-6" />
        </a>
        <a 
          href="https://www.instagram.com/rockethacks.ut" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors p-2"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a 
          href="https://www.linkedin.com/company/rocket-hacks" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors p-2"
        >
          <Linkedin className="w-6 h-6" />
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