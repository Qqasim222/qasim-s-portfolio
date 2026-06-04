import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-primary-dark py-8">
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-text-secondary md:mb-0">
            <p>(c) 2024 Muhammad Qasim Nouman. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary transition-colors duration-300 hover:text-secondary"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary transition-colors duration-300 hover:text-secondary"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary transition-colors duration-300 hover:text-secondary"
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
