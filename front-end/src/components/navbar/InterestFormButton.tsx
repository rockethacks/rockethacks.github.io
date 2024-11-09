// src/components/buttons/InterestFormButton.tsx
import React from 'react';

interface InterestFormButtonProps {
  className?: string;
}

const InterestFormButton: React.FC<InterestFormButtonProps> = ({ className = '' }) => {
  return (
    <div className={`flex justify-end ${className}`}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSepdYbwcXgkbKY6oCprN8e4nJyyE_v7DqNOt1Qi-PaD8uvoMw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent text-[#FFDA00] px-4 py-2 rounded-md font-medium 
                 border-2 border-[#FFDA00]
                 transform hover:scale-105
                 transition-all duration-300
                 shadow-lg hover:shadow-[0_0_20px_rgba(244,226,108,0.3)]
                 flex items-center gap-2 backdrop-blur-sm
                 hover:bg-[#FFDA00]/10"
      >
        <span className="tracking-wide">Interest Form</span>
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
};

export default InterestFormButton;