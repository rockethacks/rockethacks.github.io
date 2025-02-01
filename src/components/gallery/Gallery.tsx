"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Importing terminal font
import localFont from "next/font/local";
const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

type ImageType = {
  src: string;
  alt: string;
  index: number;
};

type GalleryProps = {
  images?: ImageType[];
};

const exampleImages: ImageType[] = [
  {
    src: "/assets/event/001.jpg",
    alt: "🚀 Github Basics Workshop",
    index: 0,
  },
  {
    src: "/assets/event/002.jpg",
    alt: "Basics of Github Pages",
    index: 1,
  },
  {
    src: "/assets/event/003.jpg",
    alt: "🚀 Github Basics Workshop",
    index: 2,
  },
  {
    src: "/assets/event/004.jpg",
    alt: "🚀 Github Basics Workshop",
    index: 3,
  },
  {
    src: "/assets/event/005.jpg",
    alt: "🚀 Github Basics Workshop",
    index: 4,
  },
  {
    src: "/assets/event/006.jpg",
    alt: "🚀 Github Basics Workshop",
    index: 5,
  },
  {
    src: "/assets/event/007.jpg",
    alt: "🚀 Github Basics Workshop",
    index: 6,
  },
];

const Gallery: React.FC<GalleryProps> = ({ images = exampleImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Use keyboard navigation - Left and Right arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <section id="gallery">
      <div className="relative w-full flex flex-col items-center p-4 xl:h-[90vh] mt-10 xl:mt-20">
        <h2
          className={`${terminal.className} text-4xl md:text-6xl mb-8 text-[#FFDA20]`}
        >
          GALLERY
        </h2>
        <div className="relative w-full max-w-4xl h-auto flex justify-center items-center overflow-hidden">
          <button
            className="absolute left-4 bg-white p-2 rounded-full shadow-md z-50"
            onClick={handlePrev}
          >
            <FaArrowLeft size={24} />
          </button>
          <div className="relative flex items-center justify-center w-full">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={800}
              height={500}
              priority
              className="w-full max-w-[80vw] h-auto max-h-[80vh] xl:max-h-[90vh] object-cover rounded-lg shadow-md transition-all duration-300"
            />
            <div className="absolute inset-0 p-20 flex items-center justify-center text-center text-white text-lg xl:text-3xl opacity-0 hover:opacity-100 hover:bg-black/70 hover:bg-opacity-50 transition-opacity backdrop-blur-sm">
              {images[currentIndex].alt}
            </div>
          </div>
          <button
            className="absolute right-4 bg-white p-2 rounded-full shadow-md"
            onClick={handleNext}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
        <div className="flex mt-4 space-x-2">
          {images.map((image) => (
            <button
              key={image.index}
              className={`w-5 h-5 rounded-full ${
                currentIndex === image.index ? "bg-gray-900" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(image.index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
