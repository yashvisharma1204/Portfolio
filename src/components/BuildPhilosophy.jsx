import React from 'react';

const steps = [
    { title: "Learn" },
    { title: "Build" },
    { title: "Scale" },
    { title: "Collaborate" },
];

const BuildPhilosophy = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 text-center items-center lg:items-start">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className="relative flex-1 bg-gray-100 p-3 rounded-lg shadow-md border border-gray-300 border-dashed"
                >
                    <p className="text-base md:text-xs font-mono text-gray-800">{step.title}</p>
                    {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute right-[-1.25rem] top-1/2 transform -translate-y-1/2">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BuildPhilosophy;