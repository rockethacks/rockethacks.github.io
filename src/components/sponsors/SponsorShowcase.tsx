import { LogoCarousel } from "../ui/logo-carousel";
// import { MLHLogo, PerplexityLogo, WarpLogo } from "./SponsorLogos";
import { SiMajorleaguehacking } from "react-icons/si";
import { RiPerplexityFill } from "react-icons/ri";
import { SiWarp } from "react-icons/si";

const sponsors = [
  {
    name: "MLH",
    id: "1",
    img: SiMajorleaguehacking,
    href: "https://mlh.io",
  },
  {
    name: "Perplexity",
    id: "2",
    img: RiPerplexityFill,
    href: "https://perplexity.io",
  },
  {
    name: "Warp",
    id: "3",
    img: SiWarp,
    href: "https://warp.dev",
  },

  // Add more sponsor logos here
];

export const SponsorShowcase = () => {
  return (
    <div className="w-full py-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#FFDA00]">
        The best are already sponsoring RocketHacks 2025
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <div
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 
                     border border-[#FFDA00]/20 hover:border-[#FFDA00]/40 
                     transition-all duration-300
                     shadow-[0_0_15px_rgba(244,226,108,0.1)] 
                     hover:shadow-[0_0_20px_rgba(244,226,108,0.15)]"
        >
          <LogoCarousel logos={sponsors} columnCount={3} />
        </div>
      </div>
    </div>
  );
};

export default SponsorShowcase;
