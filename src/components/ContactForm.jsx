import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // **TODO: Integrate your form submission logic here (e.g., using a serverless function, Formspree, or backend endpoint)**
        console.log('Form Data Submitted:', formData);
        alert('Message sent successfully! (Simulated)');
        
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-gray-800 placeholder-gray-500 text-sm";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className={labelClasses}>Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputClasses}
                />
            </div>

            <div>
                <label htmlFor="email" className={labelClasses}>Your Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className={inputClasses}
                />
            </div>

            <div>
                <label htmlFor="subject" className={labelClasses}>Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Collaboration"
                    className={inputClasses}
                />
            </div>

            <div>
                <label htmlFor="message" className={labelClasses}>Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="I'm interested in discussing..."
                    className={`${inputClasses} resize-none`}
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-semibold text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;