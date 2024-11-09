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
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 ">
        <a href="/code-of-conduct" className="text-white/90 hover:text-white transition-colors border-[#FFDA00] border-2 px-4 py-2 rounded-md">
          Code of Conduct
        </a>
        <span className="hidden md:inline text-white/50">•</span>
        <button 
          onClick={scrollToEmailAndFocus} 
          className="text-white/90 hover:text-white border-[#FFDA00] border-2 px-4 py-2 rounded-md transition-all duration-300"
        >
          Join our Mailing List
        </button>
        <span className="hidden md:inline text-white/50">•</span>
        <a 
          id="sponsor-link"
          href="mailto:RocketHacks@utoledo.edu?subject=Sponsorship%20Inquiry&body=Hi%20RocketHacks%20Team,%0D%0A%0D%0AI'm%20interested%20in%20learning%20more%20about%20sponsorship%20opportunities%20for%20RocketHacks." 
          className="text-white/90 hover:text-white border-[#FFDA00] border-2 px-4 py-2 rounded-md transition-all duration-300"
        >
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

      {/* Add styles for enhanced glow effect */}
      <style jsx global>{`
        .sponsor-glow {
          animation: glowPulse 10s ease-in-out forwards;
        }

        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 5px rgba(255, 218, 0, 0);
            transform: scale(1);
          }
          15% {
            box-shadow: 0 0 30px rgba(255, 218, 0, 0.8);
            transform: scale(1.03);
          }
          30% {
            box-shadow: 0 0 25px rgba(255, 218, 0, 0.6);
            transform: scale(1.02);
          }
          45% {
            box-shadow: 0 0 20px rgba(255, 218, 0, 0.4);
            transform: scale(1.01);
          }
          60% {
            box-shadow: 0 0 15px rgba(255, 218, 0, 0.3);
            transform: scale(1.005);
          }
          100% {
            box-shadow: 0 0 0px rgba(255, 218, 0, 0);
            transform: scale(1);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;