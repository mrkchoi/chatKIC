import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { v4 as uuidv4 } from 'uuid';
import { useMediaQuery } from '@uidotdev/usehooks';
import { MediaQuery } from '../utill/MediaQuery';

import '../styles/ChatResponse.css';

function ChatResponse({ isLoading, response }) {
  const isMobileDevice = useMediaQuery(MediaQuery.MOBILE);
  const isLowWordCount = response?.content?.split(' ') <= 40;

  const baseStyle = {
    fontSize: isMobileDevice ? '2.4rem' : '3rem',
    marginTop: '10px',
    fontWeight: '600',
    lineHeight: isMobileDevice ? '2.8rem' : '3.6rem',
  };

  const responseStyle = {
    fontSize: isMobileDevice ? '1.4rem' : isLowWordCount ? '3rem' : '2.4rem',
    marginTop: '10px',
    fontWeight: '600',
    lineHeight: isMobileDevice
      ? '2.2rem'
      : isLowWordCount
      ? '3.6rem'
      : '2.8rem',
  };

  console.log('isMobileDevice: ', isMobileDevice);
  const showDefault = !isLoading && !response?.content?.length;

  let component;
  if (showDefault) {
    component = (
      <span className="chat_intro_container--h1" style={baseStyle}>
        Learn more about me by asking a question, or pick a suggestion 👇
      </span>
    );
  } else if (isLoading) {
    const id1 = uuidv4();
    component = (
      <TypeAnimation
        key={id1}
        preRenderFirstString={true}
        sequence={['one sec', 400, 'one sec...', 100]}
        omitDeletionAnimation={true}
        deletionSpeed={5}
        cursor={false}
        repeat={Infinity}
        speed={100}
        style={baseStyle}
      />
    );
  } else if (response?.content?.length) {
    component = (
      <TypeAnimation
        key={response?.id}
        sequence={[response?.content, 3000]}
        speed={{ type: 'keyStrokeDelayInMs', value: 10 }}
        omitDeletionAnimation={true}
        deletionSpeed={5}
        cursor={false}
        style={responseStyle}
      />
    );
  }

  return component;
}

export default ChatResponse;
