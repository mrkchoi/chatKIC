import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { v4 as uuidv4 } from 'uuid';
import { useMediaQuery } from '@uidotdev/usehooks';
import { MediaQuery } from '../utill/MediaQuery';

function ChatResponse({ isLoading, response }) {
  const isMobileDevice = useMediaQuery(MediaQuery.MOBILE);

  const style = {
    fontSize: isMobileDevice ? '1.6rem' : '2.4rem',
    marginTop: '10px',
    // fontWeight: '600',
    lineHeight: isMobileDevice ? '2.0rem' : '3.0rem',
    whiteSpace: 'pre-line',
  };

  const showDefault = !isLoading && !response?.content?.length;

  let component;
  if (showDefault) {
    component = (
      <span className="chat_intro_container--h1" style={style}>
        Learn more about me by typing a question below 👇
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
        style={style}
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
        style={style}
      />
    );
  }

  return component;
}

export default ChatResponse;
