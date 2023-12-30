import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import resume from '../files/Kenneth Choi Resume 2023.pdf';
import download_icon from '../images/download_icon.png';

const MobileNav = ({ setMenuOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="container pt-20 p-6 fixed top-0 left-0 right-0 bottom-0  z-40 bg-black text-white"
        initial={{ opacity: 0, scale: 0.75, y: -200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <ul className="">
            <li className="text-center">
              <NavLink
                to="/"
                id="home_nav_item"
                className={({ isActive }) =>
                  (isActive ? 'bg-white text-black ' : '') +
                  'px-6 py-4 rounded-full transition-all duration-150 inline-block hover:bg-white hover:text-black'
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  (isActive ? 'bg-white text-black ' : '') +
                  'inline-block px-6 py-4 rounded-full transition-all duration-150 hover:bg-white hover:text-black  sm:hidden'
                }
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  (isActive ? 'bg-white text-black  ' : '') +
                  'inline-block px-6 py-4 rounded-full transition-all duration-150  hover:bg-white hover:text-black sm:hidden'
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li className="text-center">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-4 rounded-full hover:bg-white hover:cursor-pointer hover:text-black transition-all duration-150 sm:hidden"
                onClick={() => setMenuOpen(false)}
              >
                Resume{' '}
                {/* <img
                  src={download_icon}
                  alt="download"
                  className="w-6 inline-block text-white"
                /> */}
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNav;
