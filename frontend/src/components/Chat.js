import React, { useState, useEffect, useRef } from 'react';

import ChatIntro from './ChatIntro';
import ChatResponse from './ChatResponse';
import memoji from '../images/memoji_001.png';
import ChatInput from './ChatInput';

import '../App.css';

function Chat({
  showIntro,
  setShowIntro,
  showSuggestions,
  setShowSuggestions,
}) {
  const [response, setResponse] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    setIsLoading(false);
    inputRef.current.focus();
  }, []);

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const responseData = res.data;
        setIsLoading(false);
        setResponse(responseData.content);
      })
      .catch((err) => {
        setIsLoading(false);
      });

    setQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmitQuery(e);
    }
  };

  const handleSuggestionClick = (e) => {
    if (e.target.className === 'card_button') {
      const query = e.target.textContent;
      // const mappedQuery = queryMap[query];
      setQuery(query);
      handleSubmitQuery(e);
    }
  };

  return (
    <div className="chat_wrapper content_wrapper">
      <div className="chat_intro_header_container">
        <div className="chat_intro_header_left">
          <img
            src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif"
            alt="bard sparkle"
            className="bard_sparkle"
          />
          {showIntro ? (
            <ChatIntro
              setShowIntro={setShowIntro}
              setShowSuggestions={setShowSuggestions}
            />
          ) : (
            <ChatResponse isLoading={isLoading} response={response} />
          )}
        </div>
        <div className="chat_intro_header_right">
          <img alt="Kenneth Choi" src={memoji} className="header_photo_lrg" />
        </div>
      </div>
      <ChatInput
        showSuggestions={showSuggestions}
        handleSuggestionClick={handleSuggestionClick}
        query={query}
        handleKeyDown={handleKeyDown}
        setQuery={setQuery}
        inputRef={inputRef}
        isLoading={isLoading}
        handleSubmitQuery={handleSubmitQuery}
      />
    </div>
  );
}

export default Chat;
