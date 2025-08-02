import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-textSecondary/20">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-textSecondary mb-4 md:mb-0">
            <p>© 2024 Muhammad Qasim Nouman. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 