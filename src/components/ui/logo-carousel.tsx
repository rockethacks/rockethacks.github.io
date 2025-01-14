import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Interface for Logo
interface Logo {
  id: string;
  img: React.ComponentType<{ className?: string }>;
  href?: string; // Optional href prop
}

// Props for LogoColumn
interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentTime: number;
}

// Props for LogoCarousel
interface LogoCarouselProps {
  columnCount?: number;
  logos: Logo[];
}

// Function to distribute logos into columns
function distributeLogos(logos: Logo[], columnCount: number): Logo[][] {
  const result: Logo[][] = Array.from({ length: columnCount }, () => []);
  logos.forEach((logo, index) => {
    result[index % columnCount].push(logo);
  });
  return result;
}

// LogoColumn component
const LogoColumn = React.memo<LogoColumnProps>(function LogoColumn({
  logos,
  index,
  currentTime,
}) {
  const cycleInterval = 2000;
  const columnDelay = index * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (cycleInterval * logos.length);
  const currentIndex = Math.floor(adjustedTime / cycleInterval);
  const CurrentLogo = useMemo(
    () => logos[currentIndex].img,
    [logos, currentIndex]
  );

  const logo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-20 w-32 overflow-hidden md:h-32 md:w-64"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${logo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center bg-white/10 rounded-lg p-4"
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}
        >
          {/* Wrap in a link if href exists */}
          {logo.href ? (
            <a href={logo.href} target="_blank" rel="noopener noreferrer">
              <CurrentLogo className="h-16 w-16 max-h-[90%] max-w-[90%] object-contain md:h-24 md:w-24" />
            </a>
          ) : (
            <CurrentLogo className="h-16 w-16 max-h-[90%] max-w-[90%] object-contain md:h-24 md:w-24" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});

LogoColumn.displayName = "LogoColumn";

// LogoCarousel component
export const LogoCarousel: React.FC<LogoCarouselProps> = ({
  columnCount = 2,
  logos,
}) => {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount);
    setLogoSets(distributedLogos);
  }, [logos, columnCount]);

  return (
    <div className="flex justify-center space-x-8 md:space-x-12">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
};

LogoCarousel.displayName = "LogoCarousel";
