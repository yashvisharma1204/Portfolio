// src/components/ConnectionOrb.jsx
import React from 'react';

const ConnectionOrb = () => {
    // This component simulates a dynamic, abstract visual representation of connection.
    // It uses Tailwind CSS animation utilities (animate-spin, animate-pulse)
    // and subtle overlapping circles to create visual interest and movement.

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Outer Abstract Circle 1 (Slow Spin) */}
            <div className="absolute w-64 h-64 border-4 border-dashed border-blue-300 rounded-full animate-spin-slow opacity-50"></div>
            
            {/* Middle Abstract Circle 2 (Medium Spin and Pulse) */}
            <div className="absolute w-48 h-48 border-4 border-double border-blue-500 rounded-full animate-spin-medium animate-pulse-slow"></div>
            
            {/* Inner Core (Static, represents the center of connection) */}
            <div className="relative w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white text-3xl font-bold">@</span>
            </div>

            {/* Floating 'Data Points' (Small pulsing elements representing ideas/data) */}
            <div className="absolute w-4 h-4 rounded-full bg-blue-400 animate-pulse-fast transform translate-x-12 -translate-y-24"></div>
            <div className="absolute w-3 h-3 rounded-full bg-pink-400 animate-pulse-fastest transform -translate-x-16 translate-y-16"></div>
            <div className="absolute w-5 h-5 rounded-full bg-blue-400 animate-pulse-slowest transform translate-x-20 translate-y-0"></div>

            {/* Placeholder Text */}
            <p className="absolute bottom-4 text-sm font-semibold text-blue-900 opacity-80">
                Connection Visualizer Active
            </p>
        </div>
    );
};

export default ConnectionOrb;

// **Note:** You might need to define custom Tailwind animation utilities
// (animate-spin-slow, animate-spin-medium, animate-pulse-slowest, etc.) in your 
// tailwind.config.js file for these classes to work as intended.
// For example:
// animation: {
//   'spin-slow': 'spin 10s linear infinite',
//   'spin-medium': 'spin 5s linear infinite',
//   'pulse-slowest': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
// },