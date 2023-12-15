import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import '../App.css';

function ChatIntro({ setShowIntro, setShowSuggestions }) {
  return (
    <TypeAnimation
      sequence={[
        "Hello, I'm Kenneth Choi,",
        400,
        "Hello, I'm Kenneth Choi,\n a software engineer.",
        1200,
        'Learn more about me by asking a question, or pick a suggestion 👇',
        500,
        () => setShowSuggestions(true),
        500,
        () => setShowIntro(false),
      ]}
      speed={{ type: 'keyStrokeDelayInMs', value: 35 }}
      omitDeletionAnimation={false}
      cursor={false}
      className="chat_message_content"
      deletionSpeed={85}
      style={{
        whiteSpace: 'pre-line',
        fontSize: '3rem',
        marginTop: '10px',
        fontWeight: '600',
        lineHeight: '3.6rem',
      }}
    />
  );
}

export default ChatIntro;
