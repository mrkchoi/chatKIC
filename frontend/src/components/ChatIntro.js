import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useMediaQuery } from '@uidotdev/usehooks';
import { MediaQuery } from '../utill/MediaQuery';
import '../styles/ChatIntro.css';

function ChatIntro({ setShowIntro, setShowSuggestions }) {
  const isMobileDevice = useMediaQuery(MediaQuery.MOBILE);

  const style = {
    fontSize: isMobileDevice ? '2.4rem' : '3rem',
    marginTop: '10px',
    fontWeight: '600',
    lineHeight: isMobileDevice ? '2.8rem' : '3.6rem',
  };

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
      style={style}
    />
  );
}

export default ChatIntro;
