import React from "react";
import mypic from "../assets/image/home.jpeg";
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export default function Hero({ setCurrentSection }) {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Decorative background circles */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400 rounded-full opacity-30 blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
                {/* Profile Image */}
                <img
                    src={mypic}
                    alt="Profile"
                    className="w-60 h-60 mx-auto rounded-full border-4 border-white shadow-lg mb-6 mt-20"
                />

                {/* Heading */}
                <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                    Hi, I'm <span className="text-yellow-300">Moin Khan</span>
                </h2>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6">
                    🚀 Full Stack Developer | 🎨 UI Engineer | 🌍 Open Source Contributor
                </p>

                {/* Small Intro */}
                <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8">
                    I love building scalable web apps and crafting modern UI experiences.
                    Currently exploring Cloud, AI, and Next.js 🚀
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 text-white text-3xl">
                    <FaReact className="hover:text-cyan-400 transition" title="React" />
                    <FaNodeJs className="hover:text-green-500 transition" title="Node.js" />
                    <SiMongodb className="hover:text-green-400 transition" title="MongoDB" />
                    <SiTailwindcss className="hover:text-sky-400 transition" title="TailwindCSS" />
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => setCurrentSection("projects")}
                        className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition"
                    >
                        View Projects
                    </button>

                    <button
                        onClick={() => setCurrentSection("contact")}
                        className="bg-white/20 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-white/30 transition"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-8 text-white text-2xl">
                    <a
                        href="https://github.com/dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 transition mb-6 "
                    >
                        <FaTwitter />
                    </a>
                </div>


            </div>
        </section>
    );
}
