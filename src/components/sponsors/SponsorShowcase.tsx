import { SiMajorleaguehacking } from "react-icons/si";
import { RiPerplexityFill } from "react-icons/ri";
import { SiWarp } from "react-icons/si";
import { FaAws } from "react-icons/fa";

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
  {
    name: "AWS",
    id: "4",
    img: FaAws,
    href: "https://aws.amazon.com",
  },
];

export const SponsorShowcase = () => {
  return (
    <div className="w-full py-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#FFDA00]">
        Our Sponsors 
      </h2>

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 
                     bg-white/5 backdrop-blur-sm rounded-xl p-10 
                     border border-[#FFDA00]/20 hover:border-[#FFDA00]/40 
                     transition-all duration-300 
                     shadow-[0_0_15px_rgba(244,226,108,0.1)] 
                     hover:shadow-[0_0_20px_rgba(244,226,108,0.15)]"
        >
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.href}
              className="flex flex-col items-center gap-4 hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex items-center justify-center w-24 h-24 bg-white/20 rounded-full 
                           shadow-md border border-[#FFDA00]/30"
              >
                <sponsor.img className="text-6xl text-white" />
              </div>
              <span className="text-lg font-semibold text-white">
                {sponsor.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorShowcase;
