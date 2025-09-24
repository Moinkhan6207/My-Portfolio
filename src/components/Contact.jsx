import React from 'react';

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
        >
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        📬 Contact Me
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
                        I’d love to hear from you! Whether you have a question, want to collaborate, or just say hi — feel free to drop a message.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12">

                    {/* Contact Info */}
                    <div className="w-full md:w-1/2 bg-white dark:bg-blue-900 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 text-center md:text-left transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                            Get in Touch
                        </h3>
                        <p className="text-gray-700 dark:text-white mb-4 text-lg flex items-center justify-center md:justify-start gap-2">
                            📧 Email: <a href="mailto:mdmainuddin1289@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">mdmainuddin1289@gmail.com</a>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg flex items-center justify-center md:justify-start gap-2">
                            📱 Phone: +91 6207086776
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-lg flex items-center justify-center md:justify-start gap-2">
                            💼 LinkedIn: <a href="https://www.linkedin.com/in/md-mainuddin-99967b2b4/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                linkedin.com/in/md-mainuddin
                            </a>
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form className="w-full md:w-1/2 bg-white dark:bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col gap-5 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="dark:text-black p-3 sm:p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="p-3 sm:p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition w-full"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            required
                            className="p-3 sm:p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition w-full"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition transform w-full"
                        >
                            ✉️ Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
