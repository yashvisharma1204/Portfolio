import React from 'react';
import { ContainerScroll } from './ContainerScroll';

const New = () => {
  return (
    <section className="mt-20 bg-white min-h-screen">
      <div className="py-20 md:py-40">
        <ContainerScroll>
          <div className="p-4 md:p-8 rounded-2xl bg-white border border-gray-300">
            {/* Top Section - Headline and Subtitle */}
            <div className="pb-4 mb-4 border-b-2 border-black">
              <h2 className="text-sm font-semibold text-gray-500 tracking-wider">
                AT CURRENT
              </h2>
              <h1 className="text-3xl md:text-4xl font-serif italic text-black">
                <span className="imperial-script-mini text-black leading-tight">W</span>hat I am doing right now?
              </h1>
            </div>

            {/* Main Newspaper Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Column 1: Best Cold Coffee */}
              <div className="p-4 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-400">
                <h3 className="text-lg font-bold font-serif mb-2">
                  Best Cold Coffee
                </h3>
                <img
                  className="h-30 w-full object-cover mb-4"
                  src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnloMWs1cXhzdGVvanNreDRzbmR3M2g2c2xyNWFtcWZwc3A0ZGwxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/zossGwSPqkwGi5jqwk/giphy.gif"
                  alt="Cold Coffee GIF"
                />
                <p className="text-sm font-serif font-light text-gray-700">
                  1. Brew strong coffee and let it cool.
                  <br />
                  2. In a blender, combine the chilled coffee, milk, and your favorite sweetener.
                  <br />
                  3. Blend with ice until smooth and frothy, then pour and enjoy!
                </p>
              </div>

              {/* Column 2: Currently Reading */}
              <div className="p-4 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-400">
                <h3 className="font-serif text-xl font-bold mb-4 underline">
                  Currently Reading
                </h3>
                <div className='flex flex-col sm:flex-row items-start sm:space-x-4'>
                    <a
                      href='https://mohitmishra786687.medium.com/the-curse-of-local-minima-how-to-escape-and-find-the-global-minimum-fdabceb2cd6a'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-4 sm:mb-0"
                    >
                      {/* Placeholder Image */}
                      <img
                        src="https://via.placeholder.com/200x150.png?text=Article"
                        alt="Medium Article"
                        className="w-full sm:w-48 h-auto object-cover rounded"
                      />
                    </a>
                    {/* Placeholder for the book image */}
                    <img
                      src="https://via.placeholder.com/150x200.png?text=Book"
                      alt="Book Cover"
                      className="w-full sm:w-40 h-auto object-cover rounded"
                    />
                </div>
              </div>

              {/* Column 3: Currently Learning & Quote of the Week (Stacked) */}
              <div className="p-4">
                {/* Currently Learning Section */}
                <div className="pb-4 border-b-2 border-dashed border-gray-400">
                  <h3 className="text-lg font-bold font-serif mb-2">
                    Currently Learning
                  </h3>
                  <img
                    src="https://img.icons8.com/fluency/240/amazon-web-services.png"
                    alt="AWS Logo"
                    className="h-20 w-auto mb-4"
                  />
                  <p className="text-sm font-serif font-light text-gray-700">
                    Diving deep into <span className="font-semibold">Cloud Computing & Data Engineering</span> 🌩️.
                    Exploring AWS S3, Lambda, and Redshift as part of my coursework.
                    Hands-on labs are the best part 🚀.
                  </p>
                </div>

                {/* Quote of the Week Section */}
                <div className="pt-4">
                  <h3 className="text-lg font-bold font-serif mb-2">Quote of the Week</h3>
                  <blockquote className="italic text-gray-800 border-l-4 pl-4 border-black">
                    "First, solve the problem. Then, write the code."
                  </blockquote>
                  <p className="text-xs text-gray-500 mt-2">— John Johnson</p>
                </div>
              </div>

            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default New;