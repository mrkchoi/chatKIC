import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useMediaQuery } from '@uidotdev/usehooks';
import { MediaQuery } from '../utill/MediaQuery';
import '../styles/ChatIntro.css';

function ChatIntro({ setShowIntro, setShowSuggestions }) {
  const isMobileDevice = useMediaQuery(MediaQuery.MOBILE);

  const style = {
    fontSize: isMobileDevice ? '1.6rem' : '2.4rem',
    marginTop: '10px',
    // fontWeight: '600',
    lineHeight: isMobileDevice ? '2.0rem' : '3.0rem',
    whiteSpace: 'pre-line',
  };

  return (
    <TypeAnimation
      sequence={[
        "Hello, I'm Kenny Choi,",
        400,
        "Hello, I'm Kenny Choi,\n a software engineer.",
        1200,
        'Learn more about me by typing a question below 👇',
        500,
        () => setShowSuggestions(true),
        500,
        () => setShowIntro(false),
      ]}
      speed={{ type: 'keyStrokeDelayInMs', value: 20 }}
      omitDeletionAnimation={false}
      cursor={false}
      className="chat_message_content"
      deletionSpeed={99}
      style={style}
    />
  );
}

export default ChatIntro;
