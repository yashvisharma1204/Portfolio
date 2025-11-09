// src/components/ImageStack.jsx
import React, { useState } from 'react';

const images = [
  'nine.jpg',
  'four.jpg',
  'ten.jpg',
  'five.jpg',
  'six.jpg',
  'eight.jpg'
];

const ImageStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div 
      className="relative w-full max-w-xs min-h-[30rem] flex flex-col items-center justify-center cursor-pointer"
      onClick={handleNext}
    >
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const isNext = index === (currentIndex + 1) % images.length;
        const isPrev = index === (currentIndex - 1 + images.length) % images.length;

        return (
          <img
            key={index}
            src={image}
            alt={`Stack Image ${index + 1}`}
            className={`
              absolute w-full rounded-lg shadow-xl transform-gpu transition-all duration-700 ease-in-out
              ${isActive
                ? 'z-10 scale-100 opacity-100 rotate-0'
                : 'z-0 scale-90 opacity-80'
              }
              ${isNext
                ? 'z-[9] translate-x-4 translate-y-4 -rotate-3 scale-95 opacity-90'
                : ''
              }
              ${isPrev
                ? 'z-[9] -translate-x-4 translate-y-4 rotate-3 scale-95 opacity-90'
                : ''
              }
            `}
          />
        );
      })}
    </div>
  );
};

export default ImageStack;