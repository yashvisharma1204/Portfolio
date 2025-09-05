import React, { useState } from 'react';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div id="home" className="flex flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-6rem)] bg-white">
            <h2 className="text-xl font-light text-gray-500 mb-2">I'm Yashvi Sharma</h2>
            <h1 
                className="text-6xl md:text-7xl font-serif text-black leading-tight relative max-w-5xl mx-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className="imperial-script-regular">Student</span>
                <br />
                &&nbsp;
                <span className="inline-block relative">
                    <span 
                        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 whitespace-nowrap aspiring-text mb-15 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                        aspiring
                    </span>
                    <span 
                        className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap caret-text transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                        ^
                    </span>
                </span>
                Developer<span className="inline-block ml-1 text-gray-700">*</span>
            </h1>
            <p className="mt-6 text-lg font-light text-gray-800 max-w-3xl">
                who crafts data-driven software solutions with precision and purpose.
            </p>
            <p className="mt-4 text-base font-light text-gray-600 max-w-2xl">
                I am driven by a passion for transforming complex data into intuitive and powerful software. My work is focused on building robust back-end systems, designing intelligent data pipelines, and developing applications that not only solve problems but also scale for future growth.
            </p>
            <div className="flex space-x-4 mt-12">
                <button className="flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-200 ease-in-out">
                    <a href="https://linkedin.com/in/yashvisharma1204" target='_blank'>Let's Work Together</a>
                </button>
                
            </div>
        </div>
    );
};

export default Hero;