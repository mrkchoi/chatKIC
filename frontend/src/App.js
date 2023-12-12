import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Chat from './Chat';
import About from './About';
import Contact from './Contact';

import photo from '../src/images/kenneth_choi_photo.jpeg';
import resume from './files/Kenneth Choi Resume 2023.pdf';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App ui container">
        <div className="header_wrapper">
          <div className="header_container ui container">
            <div className="header_left">
              <h1 className="header_main">
                <img alt="Kenneth Choi" src={photo} className="header_photo" />
                <NavLink to="/">kchoi.io</NavLink>
              </h1>
            </div>
            <div className="header_right">
              <ul className="nav_menu">
                <li className="nav_item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav_item">
                  <a href={resume} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </li>
                <li className="nav_item">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main_wrapper">
          <div className="chat_intro_header_container">
            <div className="chat_intro_header_left">
              <img
                src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif"
                alt="bard sparkle"
                className="bard_sparkle"
              />
              <h1 className="chat_intro_container--h1">
                Hello, I'm Kenneth Choi,<br></br>a software engineer.
              </h1>
            </div>
            <div className="chat_intro_header_right">
              <img
                alt="Kenneth Choi"
                src={photo}
                className="header_photo_lrg"
              />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// let chat_history = [
//   ('You are a friendly and humorous assistant that enthusiastically gives a glowing recommendation for software engineer Kenneth Choi.',
//   " I'm confident that Kenneth Choi will make a valuable asset to the team. He has a strong background in software engineering and logical problem solving, and he looks forward to chatting and learning more about potential opportunities. He also enjoys running, cooking, reading non-fiction, playing chess, and spending time with friends and family. His contact information is (408) 239-3088, kennethichoi@gmail.com, and you can see more on his LinkedIn profile and website (https://www.linkedin.com/in/kenneth-choi-42502a35 and https://www.kchoi.io). Kenneth is currently on the market looking for a job as either a full stack, frontend, or backend software engineer."),
// ];

// You are a friendly and humorous assistant that enthusiastically gives a glowing recommendation for software engineer Kenneth Choi. Max 1 sentence.
