// src/components/buttons/InterestFormButton.tsx
import React from 'react';

interface InterestFormButtonProps {
  className?: string;
}

const InterestFormButton: React.FC<InterestFormButtonProps> = ({ className = '' }) => {
  return (
    <div className={`flex justify-end ${className}`}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe5Nt8T60O27BlTSM17a6BQQ4WNS7TgQA5Y4qJd8XgmY0VoXg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent text-[#FFDA00] 
                  px-3 py-1.5 md:px-4 md:py-2
                  text-sm md:text-base
                  rounded-md font-medium 
                  border-2 border-[#FFDA00]
                  transform hover:scale-105
                  transition-all duration-300
                  shadow-lg hover:shadow-[0_0_20px_rgba(244,226,108,0.3)]
                  flex items-center gap-2 backdrop-blur-sm
                  hover:bg-[#FFDA00]/10"
      >
        <span className="tracking-wide">Pre-Register</span>
      </a>
    </div>
  );
};

export default InterestFormButton;