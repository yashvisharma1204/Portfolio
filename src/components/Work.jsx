import React, { useEffect, useState } from "react";

const Work = () => {
    const [showHighlight, setShowHighlight] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHighlight(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="projects" className="bg-white py-12 md:py-24 flex justify-center min-h-screen">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start px-4">
                
                {/* Left Column: Smaller Folder/Sticky Note */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mb-12 md:mb-0">
                    {/* The folder element is still a bit static, but we'll make it responsive below */}
                    <div className="mt-8 relative w-full max-w-[600px] h-[350px] md:w-[500px] md:h-[420px]  transform -rotate-6 md:-translate-x-20">
                        {/* Folder Shadow/Back */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg shadow-md"></div>

                        {/* Main Folder Body */}
                        <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-xl border border-blue-300">
                            {/* Folder Tab */}
                            <div className="absolute -top-3 left-8 w-20 h-6 bg-gradient-to-br from-blue-200 to-blue-300 rounded-t-lg shadow-sm border-t border-l border-r border-blue-300"></div>

                            {/* Folder Content */}
                            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                                <h1 className="text-3xl font-bold text-blue-800 mb-2 kapakana-two md:kapakana-three">
                                    My Work
                                </h1>
                            </div>

                            {/* Subtle Inner Glow */}
                            <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
                
                {/* Right Column: Bigger Text and Projects */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start p-6 text-left">
                    <h2 className="text-sm font-semibold text-gray-500 tracking-wider">AN OVERVIEW</h2>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-3xl md:text-4xl font-serif italic text-black">
                            <span className="imperial-script-mini text-black leading-tight">W</span>hat I do?
                        </h1>
                        <img 
                            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dwd3R6MTVkZXJtdGdsY3Y2NjV5NmM4ZHNlN25wc3dha2VuNDF1eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aNqEFrYVnsS52/giphy.gif"
                            alt="Meme" 
                            className="mt-5 h-7 rounded-sm cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12" 
                        />
                    </div>
                    <p className="text-base md:text-m font-serif font-light text-gray-700 mt-2">
                        I work with <span className="font-mono font-bold">Python, Java, React, Flask, Spring Boot, MySQL, MongoDB, Docker, AWS </span> 
                        with a strong focus on <span className={`highlight-text ${showHighlight ? 'active' : ''}`}>development and applied machine learning</span>
                    </p>

                    {/* Projects Section */}
                    <div className="w-full mt-3">
                        <ul className="space-y-1">
                            {/* Project 1 */}
                            <li>
                                <a href="https://github.com/yashvisharma1204/JobSyncPro" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center w-full cursor-pointer group">
                                    <span className="flex-1 text-m md:text-m text-gray-500 font-light transition-all duration-300 group-hover:text-blue-800 group-hover:underline">
                                        💳 Financial Fraud Detection System
                                    </span>
                                    <span className="ml-4 font-bold text-xl md:text-2xl text-gray-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-800">
                                        →
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/yashvisharma1204/Premium_chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-between items-center w-full cursor-pointer group"
                                >
                                    <span className="flex-1 text-m text-gray-500 font-light transition-all duration-300 group-hover:text-blue-800 group-hover:underline">
                                        💬 Premium Chat App
                                    </span>
                                    <span className="ml-4 font-bold text-2xl text-gray-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-800">
                                        →
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/yashvisharma1204/financial_fraud_detection"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-between items-center w-full cursor-pointer group"
                                >
                                    <span className="flex-1 text-m text-gray-500 font-light transition-all duration-300 group-hover:text-blue-800 group-hover:underline">
                                        💼 JobSyncPro
                                    </span>
                                    <span className="ml-4 font-bold text-2xl text-gray-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-800">
                                        →
                                    </span>
                                </a>
                            </li>
                            {/* New List Items */}
                            <li>
                                <a
                                    href="https://gist.github.com/yashvisharma1204/02f2962ebc64e93068507b372db61fa3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-between items-center w-full cursor-pointer group"
                                >
                                    <span className="flex-1 text-m text-gray-500 transition-all  duration-300 group-hover:text-blue-800 group-hover:underline">
                                        🌱 Open Source Contributions
                                    </span>
                                    <span className="ml-4 font-bold text-2xl text-gray-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-800">
                                        →
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.datascienceportfol.io/yashvisharma"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-between items-center w-full cursor-pointer group"
                                >
                                    <span className="flex-1 text-m text-gray-500 transition-all  duration-300 group-hover:text-blue-800 group-hover:underline">
                                        📊 Data Science Work
                                    </span>
                                    <span className="ml-4 font-bold text-2xl text-gray-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-800">
                                        →
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://codolio.com/profile/yashvi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-between items-center w-full cursor-pointer group"
                                >
                                    <span className="flex-1 text-m text-gray-500 transition-all  duration-300 group-hover:text-blue-800 group-hover:underline">
                                        💻 Codolio
                                    </span>
                                    <span className="ml-4 font-bold text-2xl text-gray-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-800">
                                        →
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;