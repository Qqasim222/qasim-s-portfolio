import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'portfolio' },
    { id: 5, link: 'contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="flex justify-between items-center w-full h-20 px-4 text-text-primary bg-primary-DEFAULT/90 backdrop-blur-sm">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-secondary-DEFAULT">Portfolio</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-text-secondary hover:scale-105 hover:text-secondary-DEFAULT duration-200">
              <Link 
                to={link} 
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-secondary-DEFAULT"
                className="cursor-pointer"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-textSecondary md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-textSecondary hover:text-secondary">
                <Link 
                  onClick={() => setNav(!nav)}
                  to={link} 
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-secondary"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar; 