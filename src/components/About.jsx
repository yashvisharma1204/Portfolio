import React from 'react';
import ImageStack from './ImageStack';
import BuildPhilosophy from './BuildPhilosophy';

const About = () => {
    return (
        <section id="about" className="bg-white p-8 md:p-24 flex flex-col items-center">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12 items-center">
                {/* Left Column: Bio & Experience */}
                <div className="col-span-1">
                    <h2 className="text-sm font-semibold text-gray-500 tracking-wider">A GLIMPSE</h2>
                    <div className="flex items-center space-x-4 mt-2">
                        <h1 className="text-3xl md:text-4xl font-serif italic text-black">
                            <span className="imperial-script-mini text-black leading-tight">W</span>ho am I?
                        </h1>
                        <img src="idk.jpg" alt="Profile" className="w-14 h-14 rounded-full border border-gray-300" />
                    </div>
                    <p className="mt-6 text-lg font-serif font-light text-gray-700 max-w-sm leading-relaxed">
                        I’m Yashvi Sharma, a B.Tech CSE student specializing in AI & Data Engineering. An introvert at heart yet opinionated and creative, I find purpose in gaining knowledge and aspire to become an ML researcher.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-6 border border-gray-200 max-w-sm">
                        <h3 className="text-base font-semibold text-black">My Journey</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            <span className='font-bold'>Now:</span> As a Data Science Intern at Futurense, I tackle datasets with ML, Power BI and AWS. <br/><span className='font-bold'>2024: </span>At Headstarter AI as a fellow, I crafted Pantry Insight, AI support Bot and CoBuildr.ai, a project tool with 150+ waitlist signups.
                        </p>
                    </div>
                    <div className="mt-6 text-sm text-gray-500 font-light space-y-2 max-w-sm">
                        <p className="flex items-center space-x-2">🌍 <span>Delhi, India</span></p>
                        <p className="flex items-center space-x-2">📚 <span>Lovely Professional University</span></p>
                        <p className="flex items-center space-x-2">🎓 <span>CGPA: 8.72 (B.Tech '27)</span></p>
                    </div>
                </div>

                {/* Middle Column: Image Stack */}
                <div className="col-span-1 flex justify-center items-center relative">
                    <div className="relative w-full max-w-xs min-h-[30rem]">
                        <ImageStack />
                    </div>
                </div>

                {/* Right Column: Skills & Philosophy */}
                <div className="col-span-1">
                    <div className="text-base font-light text-gray-600 space-y-8">
                        <div>
                            <p>
                                I thrive on learning and exploring new ideas, blending research with hands-on building to expand my understanding. Creativity drives me to experiment on the frontend, while my problem-solving mindset pushes me to tackle complex challenges in backend systems and data structures.
                            </p>
                        </div>
                    </div>
                    <div className="mt-15">
                        <h3 className="text-base font-semibold text-black mb-4">My Build Philosophy</h3>
                        <BuildPhilosophy />
                    </div>
                    <div className="mt-15">
                        <h3 className="text-base font-semibold text-black mb-2">A Bit About Me</h3>
                        <p className="text-sm font-light text-black">
                            I love coffee and discovering new cafés, often with a book in hand. K-Dramas and Studio Ghibli films comfort me. Dressing up and exploring new styles is my way of bringing a little art into everyday life.
                        </p>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-sm font-light text-gray-500">Let’s Connect</p>
                        <div className="flex justify-center space-x-4 mt-2">
                            <a href="https://github.com/yashvisharma1204" aria-label="GitHub" className="text-black-500 font-bold hover:text-black">GH</a>
                            <a href="https://linkedin.com/in/yashvisharma1204" aria-label="LinkedIn" className="text-black-500 font-bold hover:text-black">in</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;