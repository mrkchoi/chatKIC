import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';
import { MediaQuery } from '../utill/MediaQuery';
import { motion } from 'framer-motion';

import MobileNav from './MobileNav';

import resume from '../files/Kenneth Choi Resume 2023.pdf';
import download_icon from '../images/download_icon.png';

import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobileDevice = useMediaQuery(MediaQuery.TABLET_MED);

  const headerText = isMobileDevice ? 'KC' : 'Kenneth Choi';

  const handleMenuClick = () => {
    setMenuOpen((s) => !s);
  };

  return (
    <motion.div
      className="header_wrapper relative"
      initial={{ opacity: 0, scale: 0.75, y: -200 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
    >
      <div className="relative container mx-auto flex flex-row min-w-full items-center justify-between z-50">
        <div className="bg-white flex rounded-full">
          <ul className="flex flex-row">
            <li className="font-bold">
              <NavLink
                to="/"
                id="home_nav_item"
                className={({ isActive }) =>
                  (isActive ? 'bg-btnActive ' : '') +
                  'px-6 py-4 rounded-full transition-all duration-150 inline-block hover:bg-btnHover'
                }
              >
                {headerText}
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  (isActive ? 'bg-btnActive ' : '') +
                  'px-6 py-4 rounded-full transition-all duration-150 hover:bg-btnHover hidden sm:inline-block'
                }
              >
                About
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  (isActive ? 'bg-btnActive  ' : '') +
                  'px-6 py-4 rounded-full transition-all duration-150  hover:bg-btnHover hidden sm:inline-block'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header_right justify-center items-center">
          <button
            id="menu-btn"
            className={
              (menuOpen ? 'open ' : '') +
              'block hamburger sm:hidden focus:outline-none'
            }
            type="button"
            onClick={handleMenuClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          <ul className="nav_menu">
            <li className="">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 bg-white rounded-full hover:bg-btnResumeHover hover:cursor-pointer sm:inline-block transition-all duration-150 hidden"
              >
                Resume{' '}
                <img
                  src={download_icon}
                  alt="download"
                  className="w-6 inline-block"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && <MobileNav setMenuOpen={setMenuOpen} />}
    </motion.div>
  );
}

export default Header;
