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
      <nav className="flex h-20 w-full items-center justify-between border-b border-white/10 bg-primary-dark/85 px-4 text-text-primary shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl md:px-10">
        <div>
          <h1 className="text-xl font-bold tracking-normal text-secondary sm:text-2xl md:text-3xl">
            M. Qasim
          </h1>
        </div>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer rounded-full px-4 py-2 capitalize font-medium text-text-secondary duration-200 hover:bg-white/5 hover:text-secondary">
              <Link 
                to={link} 
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-secondary"
                className="cursor-pointer"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="z-10 cursor-pointer text-secondary md:hidden">
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {nav && (
          <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-primary-dark/95 backdrop-blur-xl">
            {links.map(({ id, link }) => (
              <li key={id} className="cursor-pointer px-4 py-5 text-3xl capitalize text-text-secondary hover:text-secondary sm:py-6 sm:text-4xl">
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
