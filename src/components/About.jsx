import React from 'react';
import mypic from "../assets/image/home.jpeg";
import Port from "../assets/image/portfolio.jpeg";
import Travel from "../assets/image/travel.jpeg";
import Quiz from "../assets/image/quiz.png";

export default function About() {
    return (
        <section id="about" className="py-16 px-6 bg-gradient-to-r from-teal-100 via-gray-100 to-gray-50 dark:from-teal-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        I’m a passionate full-stack developer who loves turning ideas into interactive web applications. I enjoy learning new technologies and building products that make a difference.
                    </p>
                </div>

                {/* Profile & Skills */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">

                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={mypic}
                            alt="Profile"
                            className="w-60 h-60 mx-auto rounded-full border-4 border-white shadow-lg mb-0 mt-20"
                        />
                    </div>

                    {/* Bio and Skills */}
                    <div className="flex-1 text-center md:text-left-30 mt-20">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Hi, I’m Mainuddin!</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            I specialize in creating **responsive, user-friendly websites** using React, Node.js, and modern web technologies. I love coding, learning new things, and solving complex problems.
                        </p>

                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white mt-12 mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                            <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                            <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                            <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">My Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Project 1 */}
                        <a href="https://moinkhan6207.github.io/Travel_Agency/" className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
                            <img src={Travel} alt="Project 1" className="rounded-md mb-4" />
                            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Travel Agency</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                MERN-based travel booking platform with Tailwind UI.
                            </p>
                        </a>

                        {/* Project 2 */}
                        <a href="https://moinkhan6207.github.io/Quiz_app/" className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
                            <img src={Quiz} alt="Project 2" className="rounded-md mb-4" />
                            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Quiz App</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Interactive quiz app with score tracking.
                            </p>
                        </a>

                        {/* Project 3 */}
                        <a href="https://react-portfolio-r9zf.onrender.com" className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
                            <img src={Port} alt="Project 3" className="rounded-md mb-4" />
                            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">My Portfolio</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Responsive personal portfolio built with React.
                            </p>
                        </a>

                    </div>
                </div>

                {/* Fun Closing Statement */}
                <div className="mt-16 text-center">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                        “Passionate about coding, learning, and building products that create impact.”
                    </p>
                </div>
            </div>
        </section>
    );
}
