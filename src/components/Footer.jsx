import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="py-10 px-6 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 dark:from-purple-900 dark:via-pink-800 dark:to-red-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto text-center">

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://www.linkedin.com/in/md-mainuddin-99967b2b4/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-blue-400 transition text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/mdmainuddin" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-white transition text-2xl">
                        <FaGithub />
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#sent?compose=new" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition text-2xl">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Footer Text */}
                <p className="text-blue-600 dark:text-gray-300 text-sm">
                    © {new Date().getFullYear()} Md Mainuddin. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
