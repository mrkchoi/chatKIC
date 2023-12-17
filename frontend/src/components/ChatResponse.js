import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { v4 as uuidv4 } from 'uuid';

import '../styles/ChatResponse.css';

function ChatResponse({ isLoading, response }) {
  const wordCount = response?.content?.split(' ');
  const style = {
    fontSize: '3rem',
    marginTop: '10px',
    fontWeight: '600',
    lineHeight: '3.6rem',
  };
  const styleSmall = {
    fontSize: '1.8rem',
    marginTop: '10px',
    fontWeight: '600',
    lineHeight: '2.6rem',
  };

  const showDefault = !isLoading && !response?.content?.length;

  let component;
  if (showDefault) {
    component = (
      <span className="chat_intro_container--h1">
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
        style={wordCount <= 40 ? style : styleSmall}
      />
    );
  }

  return component;
}

export default ChatResponse;
