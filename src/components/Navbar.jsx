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
                <ul className="space-x-6 hidden md:flex text-sm font-medium text-gray-700 dark:text-gray-200">
                    <li><button onClick={() => handleClick('home')} className="hover:text-blue-500 transition">Home</button></li>
                    <li><button onClick={() => handleClick('about')} className="hover:text-blue-500 transition">About</button></li>
                    <li><button onClick={() => handleClick('projects')} className="hover:text-blue-500 transition">Projects</button></li>
                    <li><button onClick={() => handleClick('contact')} className="hover:text-blue-500 transition">Contact</button></li>
                    <li><button onClick={() => handleClick('feedback')} className="hover:text-blue-500 transition">Feedback</button></li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-gray-700 dark:text-gray-200 text-xl" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-white dark:bg-gray-800 text-center space-y-4 py-6 shadow-lg">
                    <li><button onClick={() => handleClick('home')} className="block hover:text-blue-500 transition">Home</button></li>
                    <li><button onClick={() => handleClick('about')} className="block hover:text-blue-500 transition">About</button></li>
                    <li><button onClick={() => handleClick('projects')} className="block hover:text-blue-500 transition">Projects</button></li>
                    <li><button onClick={() => handleClick('contact')} className="block hover:text-blue-500 transition">Contact</button></li>
                    <li><button onClick={() => handleClick('feedback')} className="block hover:text-blue-500 transition">Feedback</button></li>
                </ul>
            )}
        </nav>
    );
}
