// src/components/ProjectImageStack.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectImageStack = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Project Image ${currentIndex + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
            <div className="absolute top-1/2 left-0 w-full flex justify-between transform -translate-y-1/2 px-4">
                <button 
                    onClick={handlePrev} 
                    className="p-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    onClick={handleNext} 
                    className="p-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProjectImageStack;