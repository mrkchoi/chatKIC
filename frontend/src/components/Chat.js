import React, { useState, useEffect, useRef } from 'react';

import ChatIntro from './ChatIntro';
import ChatResponse from './ChatResponse';
import memoji from '../images/memoji_001.png';
import ChatInput from './ChatInput';

// import '../styles/Chat.css';

function Chat({
  showIntro,
  setShowIntro,
  showSuggestions,
  setShowSuggestions,
}) {
  const [response, setResponse] = useState({});
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
        setResponse(responseData);
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
    // Chat Outer Container
    <div className="container mx-auto h-full sm:h-[70vh]">
      {/*  */}
      <div className="chat_inner_container flex flex-col-reverse items-center justify-start sm:items-center sm:justify-between sm:h-full sm:flex-row">
        <div className="chat_left self-start sm:self-center">
          <img
            src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif"
            alt="bard sparkle"
            className="bard_sparkle max-w-12"
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
        <div className="chat_right">
          <img
            alt="Kenneth Choi"
            src={memoji}
            className="max-w-36 sm:max-w-72"
          />
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

// Arrr, shiver me timbers! It sounds like you have a good attitude and plenty of experience. It's always a challenge to be there for family during a tough time. Ya know, me and me mateys call that being a 'real' pirate! Ye didn't miss a beat during that period, and it sounds like ye had a good eye for the horizon durin' yer sabbatical, getting yerself all caught up with yer coding and such. Aye, if yer ready to get back to what ye love, then me advice is to make sure ye tell yer prospective employer about yer valuable experience and yer commitment to yer family. Ye can't be afraid to show yer true colors!
