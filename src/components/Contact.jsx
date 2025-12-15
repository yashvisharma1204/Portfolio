import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="bg-white p-8 md:p-24 flex flex-col items-center overflow-hidden">
            <div className="max-w-7xl w-full relative min-h-[55rem] md:min-h-[40rem]">
                
                {/* Background Layer: Contact Details and Links (Stretched, anchored bottom-left) */}
                <div className="absolute top-0 md:top-16 left-0 w-full md:w-[60%] h-auto md:h-[calc(100%-4rem)] bg-white p-8 md:p-16 rounded-xl">
                    
                    <h2 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Let's Connect</h2>
                    <h1 className="text-5xl font-serif italic text-black leading-tight mt-3">
                        <span className="imperial-script-mini text-black">R</span>each Out.
                    </h1>

                    <p className="mt-8 text-lg font-serif font-light text-gray-700 max-w-lg leading-relaxed">
                        I thrive on connecting ideas and people. Whether it's discussing research, data engineering challenges, or exploring new creative projects, I'm always open to a conversation.
                    </p>

                    {/* Contact Details Grid */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                        <div>
                            <h3 className="text-xl font-semibold text-black mb-3">Professional Channels</h3>
                            <div className="space-y-3 text-base font-light text-gray-700">
                                <a href="https://linkedin.com/in/yashvisharma1204" className="block hover:text-blue-700 transition-colors">LinkedIn Profile</a>
                                <a href="https://github.com/yashvisharma1204" className="block hover:text-black transition-colors">GitHub Repos</a>
                                <a href="https://yashvisharma2027.tiiny.site/" className="block hover:text-black transition-colors">My Resume (PDF)</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-black mb-3">Direct Mail</h3>
                            <div className="space-y-3 text-base font-light text-gray-700">
                                <p>
                                    <span className="font-medium text-black">Email:</span> 
                                    <a href="mailto:your.email@example.com" className='ml-2 hover:underline'>yashvi.sharma1204@gmail.com</a>
                                </p>
                                <p>
                                    <span className="font-medium text-black">Location:</span> 
                                    <span className='ml-2'>Delhi, India</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Artistic Detail - Abstract line element for visual break */}
                </div>

                {/* Foreground Layer: Contact Form (Floating, anchored top-right) */}
                <div className="absolute top-32 md:top-0 right-0 w-full md:w-[45%] bg-gray-50 p-6 md:p-10 rounded-xl shadow-2xl z-10 border border-gray-200 transform md:translate-x-0 translate-y-0">
                    <h3 className="text-2xl font-serif italic text-black mb-6">Send Me a Message</h3>
                    <ContactForm />
                </div>
                
                {/* Secondary Detail/Quote Block (Offset bottom-right) */}
                <div className="absolute bottom-0 right-0 w-auto p-4 bg-black text-white rounded-lg shadow-lg z-20 transform translate-x-4 translate-y-4 hidden md:block">
                    <p className="text-sm font-light italic max-w-xs">
                        "Creativity is intelligence having fun. Let's make something smart."
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Contact;