import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch("https://script.google.com/macros/s/AKfycbzvrbdK1jOhTf4pG_awVfUicEio4nVhARLM2c5wxrrZmVagL50IGTnMS8s8yNnPVA7M/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            alert("Message sent successfully!");
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            alert("Something went wrong. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses =
        "w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-gray-800 placeholder-gray-500 text-sm";
    const labelClasses =
        "block text-sm font-medium text-gray-700 mb-1";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className={labelClasses}>Your Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputClasses}
                />
            </div>

            <div>
                <label className={labelClasses}>Your Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className={inputClasses}
                />
            </div>

            <div>
                <label className={labelClasses}>Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Collaboration"
                    className={inputClasses}
                />
            </div>

            <div>
                <label className={labelClasses}>Message</label>
                <textarea
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
                disabled={isSubmitting}
                className="w-full py-3 px-6 text-sm font-semibold text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
};

export default ContactForm;
