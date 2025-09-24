import React from 'react';

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 px-6 bg-gray-50 dark:bg-white-900 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-black mb-4">
                        📬 Contact Me
                    </h2>
                    <p className="text-gray-600 dark:text-black-300 text-lg sm:text-xl max-w-3xl mx-auto">
                        I’d love to hear from you! Whether you have a question, want to collaborate, or just say hi — feel free to drop a message.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Contact Info */}
                    <div className="flex-1 bg-white dark:bg-blue-900 rounded-2xl shadow-xl p-10 text-center md:text-left transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                            Get in Touch
                        </h3>
                        <p className="text-white-700 dark:text-white mb-5 text-lg flex items-center justify-center md:justify-start gap-2">
                            📧 Email: <a href="mailto:mdmainuddin1289@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">mdmainuddin1289@gmail.com</a>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-5 text-lg flex items-center justify-center md:justify-start gap-2">
                            📱 Phone: +91 6207086776
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-lg flex items-center justify-center md:justify-start gap-2">
                            💼 LinkedIn: <a href="https://www.linkedin.com/in/md-mainuddin-99967b2b4/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                linkedin.com/in/md-mainuddin
                            </a>
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form className="flex-1 bg-white dark:bg-white rounded-2xl shadow-xl p-10 flex flex-col gap-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className=" dark:text-black p-4 rounded-xl border dark:border-gray-600 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="6"
                            required
                            className="p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition transform"
                        >
                            ✉️ Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
