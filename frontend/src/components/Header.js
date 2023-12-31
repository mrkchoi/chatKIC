import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';
import { MediaQuery } from '../utill/MediaQuery';
import { motion } from 'framer-motion';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from '../hooks/useDarkMode';

import MobileNav from './MobileNav';

import resume from '../files/Kenneth Choi Resume 2023.pdf';
// import download_icon from '../images/download_icon.png';
import sparkle_gif from '../images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif';

import '../styles/Header.css';

function Header() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobileDevice = useMediaQuery(MediaQuery.TABLET_MED);

  const headerText = isMobileDevice ? 'KC' : 'Kenny Choi';

  const handleMenuClick = () => {
    setMenuOpen((s) => !s);
  };

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <motion.div
      className="header_wrapper relative container mx-auto p-6"
      initial={{ opacity: 0, scale: 0.75, y: 200 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
    >
      <div className="relative container mx-auto flex flex-row min-w-full items-center justify-between z-50">
        <div className="flex rounded-full dark:text-white">
          <ul className="flex flex-row items-center m-2">
            <li className="mr-2 flex flex-row items-center justify-center md:mr-12">
              <img
                src={sparkle_gif}
                alt="bard sparkle"
                className="bard_sparkle max-w-6 inline-block mr-2 "
              />
              <NavLink
                to="/"
                id="home_nav_item"
                className={({ isActive }) =>
                  (isActive ? ' ' : '') +
                  'py-2 mr-1 font-bold rounded-full transition-all duration-150 inline-block'
                }
              >
                <span className={menuOpen ? 'text-white' : ''}>
                  {headerText}
                </span>
              </NavLink>
            </li>
            <li className="py-2 text-gray-500 hidden lg:inline-block dark:text-gray-400">
              <span>Software Engineer</span>
            </li>
          </ul>
        </div>
        <div className="header_right flex flex-row justify-center items-center">
          <ul className="nav_menu flex flex-row">
            <li className="mr-12 hidden md:inline-block">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  (isActive ? ' ' : '') +
                  'py-2 mr-1 rounded-full transition-all duration-150'
                }
              >
                About
              </NavLink>
            </li>
            <li className="mr-12 hidden md:inline-block">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  (isActive ? '' : '') +
                  'py-2 mr-1 rounded-full transition-all duration-150'
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="mr-12 hidden md:inline-block">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="py-2 rounded-full  hover:cursor-pointer transition-all duration-150"
              >
                Resume{' '}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 inline-block dark:hidden"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                      fill="#000000"
                    ></path>{' '}
                    <path
                      d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                      fill="#000000"
                    ></path>{' '}
                  </g>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  className="hidden w-4 dark:inline-block"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <button className="bg-white p-2 mr-4 rounded-full dark:bg-gray-600">
                <DarkModeSwitch
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  size={24}
                />
              </button>
            </li>
            <li className="self-center mt-2">
              <button
                id="menu-btn"
                className={
                  (menuOpen ? 'open ' : '') +
                  'block hamburger md:hidden focus:outline-none'
                }
                type="button"
                onClick={handleMenuClick}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && <MobileNav setMenuOpen={setMenuOpen} />}
    </motion.div>
  );
}

export default Header;
