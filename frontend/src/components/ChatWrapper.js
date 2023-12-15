import React from 'react';

import '../App.css';
import ChatIntro from './ChatIntro';
import Chat from './Chat';

function ChatWrapper({ showIntro, setShowIntro }) {
  return (
    <>
      {showIntro ? (
        <ChatIntro showIntro={showIntro} setShowIntro={setShowIntro} />
      ) : (
        <Chat showIntro={showIntro} setShowIntro={setShowIntro} />
      )}
    </>
  );
}

export default ChatWrapper;
