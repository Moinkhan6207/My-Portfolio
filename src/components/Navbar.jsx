import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ setCurrentSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleClick = (section) => {
        setCurrentSection(section);
        setIsOpen(false); // close mobile menu
    };

    return (
        <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 dark:from-purple-900 dark:via-pink-800 dark:to-red-900 shadow-lg transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    MyPortfolio
                </h1>

                {/* Desktop Menu */}
                <ul className="space-x-6 hidden md:flex text-sm font-medium text-red-700 dark:text-gray-200">
                    <li><button onClick={() => handleClick('home')} className="hover:text-blue-500 transition">Home</button></li>
                    <li><button onClick={() => handleClick('about')} className="hover:text-blue-500 transition">About</button></li>
                    <li><button onClick={() => handleClick('projects')} className="hover:text-blue-500 transition">Projects</button></li>
                    <li><button onClick={() => handleClick('contact')} className="hover:text-blue-500 transition">Contact</button></li>
                    <li><button onClick={() => handleClick('feedback')} className="hover:text-blue-500 transition">Feedback</button></li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-amber-50 text-gray-700 dark:text-gray-200 text-xl" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-white dark:bg-white py-6 shadow-lg flex flex-col items-center space-y-4">
                    <li>
                        <button onClick={() => handleClick('home')} className="w-11/12 text-left px-6 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition font-medium">
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleClick('about')} className="w-11/12 text-left px-6 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition font-medium">
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleClick('projects')} className="w-11/12 text-left px-6 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition font-medium">
                            Projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleClick('contact')} className="w-11/12 text-left px-6 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition font-medium">
                            Contact
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleClick('feedback')} className="w-11/12 text-left px-6 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition font-medium">
                            Feedback
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
}
