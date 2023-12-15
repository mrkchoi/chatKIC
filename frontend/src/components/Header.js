import React from 'react';
import { NavLink } from 'react-router-dom';

import resume from '../files/Kenneth Choi Resume 2023.pdf';
import download_icon from '../images/download_icon.png';

function Header() {
  return (
    <div className="header_wrapper">
      <div className="header_container ui container">
        <div className="header_left">
          <ul className="nav_menu">
            <li className="nav_item nav_item_logo">
              <NavLink
                to="/"
                id="home_nav_item"
                className={({ isActive }) =>
                  isActive ? 'active_nav_item' : ''
                }
              >
                Kenneth Choi | Software Engineer
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'active_nav_item' : ''
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'active_nav_item' : ''
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <ul className="nav_menu">
            <li className="nav_item">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                id="resume_nav_item"
              >
                Resume{' '}
                <img
                  src={download_icon}
                  alt="download"
                  className="download_icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
