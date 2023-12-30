import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Chat from './components/Chat';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';

// import './styles/Global.css';
// import './styles/App.css';

function App() {
  let [showIntro, setShowIntro] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <BrowserRouter>
      <div className="container mx-auto p-6">
        <Header />
        <div className="main_wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <Chat
                  showIntro={showIntro}
                  setShowIntro={setShowIntro}
                  showSuggestions={showSuggestions}
                  setShowSuggestions={setShowSuggestions}
                />
              }
            />
            <Route path="/about/" element={<About />} />
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
