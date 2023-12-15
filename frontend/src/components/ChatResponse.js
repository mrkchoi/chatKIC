import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

function ChatResponse({ isLoading, response }) {
  const style = {
    fontSize: '3rem',
    marginTop: '10px',
    fontWeight: '600',
    lineHeight: '3.6rem',
  };

  const showDefault = !isLoading && !response.length;

  let component;
  if (showDefault) {
    component = (
      <span className="chat_intro_container--h1">
        Learn more about me by asking a question, or pick a suggestion 👇
      </span>
    );
  } else if (isLoading) {
    component = (
      <TypeAnimation
        key={1}
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
  } else if (response.length) {
    component = (
      <TypeAnimation
        key={uuidv4()}
        sequence={[response, 3000]}
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
