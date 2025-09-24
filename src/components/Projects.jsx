import React from 'react';
import { projects } from '../data/projects.js';
import port from "../assets/image/portfolio.jpeg";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-20 px-6 bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-900 dark:via-cyan-800 dark:to-blue-900 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        My Projects
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        A selection of projects I’ve built using modern web technologies. Click on any to view code or live demo.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <a
                            key={i}
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center"
                        >
                            <img
                                src={p.image || port}
                                alt={p.title}
                                className="rounded-md mb-4 w-full h-40 object-cover"
                            />
                            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                                {p.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {p.description}
                            </p>
                            {/* Buttons Section START */}

                            <a
                                href={p.demo} // <-- This goes to project demo page
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                                🚀 View Demo
                            </a>


                            <span className="text-blue-500 dark:text-blue-400 text-sm hover:underline">
                                View Code
                            </span>


                        </a>

                    ))}
                </div>

                {/* Optional Featured Projects (Hardcoded Examples) */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        Featured Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <a href="#" className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
                            <img src="https://via.placeholder.com/150" alt="Project 1" className="rounded-md mb-4" />
                            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Job Board App</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Full-stack job board platform using React, Node.js, Express, MongoDB.
                            </p>
                        </a>

                        {/* Project 2 */}
                        <a href="#" className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
                            <img src="https://via.placeholder.com/150" alt="Project 2" className="rounded-md mb-4" />
                            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Portfolio Website</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Responsive portfolio website to showcase projects and skills.
                            </p>
                        </a>

                        {/* Project 3 */}
                        <a href="#" className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
                            <img src="https://via.placeholder.com/150" alt="Project 3" className="rounded-md mb-4" />
                            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">E-commerce App</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Complete shopping app with payment integration and admin panel.
                            </p>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
