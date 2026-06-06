import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-primary-dark py-8">
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-text-secondary md:mb-0">
            <p>(c) 2026 Muhammad Qasim Nouman. Software Engineer for modern web products.</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Qqasim222"
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary transition-colors duration-300 hover:text-secondary"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-qasim-nouman850/"
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary transition-colors duration-300 hover:text-secondary"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
