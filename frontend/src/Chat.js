import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { v4 as uuidv4 } from 'uuid';
import photo from '../src/images/kenneth_choi_photo.jpeg';
import { queryMap } from './queryMap';

import './App.css';

function Chat() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const chatBottomDivRef = useRef(null);

  useEffect(() => {
    // Focus input on render
    inputRef.current.focus();

    // mock data
    fetch('/api/data')
      // fetch('/mock')
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [setData]);

  // SCROLL TO BOTTOM OF CHAT ON STATE UPDATE
  useEffect(() => {
    chatBottomDivRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [data]);

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newData = [...data, getUserDataFromQuery(query)];
    setData(newData);

    fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const chatHistoryData = res.data;
        setData([...chatHistoryData]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });

    setQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmitQuery(e);
    }
  };

  const getUserDataFromQuery = (userQuery) => {
    return {
      id: uuidv4(),
      isHuman: true,
      content: userQuery,
    };
  };

  const handleSuggestionClick = (e) => {
    if (e.target.className === 'card_button') {
      const query = e.target.textContent;
      const mappedQuery = queryMap[query];
      setQuery(mappedQuery);
      inputRef.current.focus();
    }
  };

  return (
    <div className="chat_wrapper content_wrapper">
      <div className="header_tagline_container">
        <h2 className="header_tagline">
          Learn more about me by asking a question, or pick a suggestion 🤖
        </h2>
      </div>
      <div className="chat_history_container">
        <div className="chat_intro_container">
          <div
            className="chat_intro_cards_container"
            onClick={handleSuggestionClick}
          >
            <div className="chat_intro_card card">
              <div className="chat_intro_card-header">
                <h1 id="chat_intro_card-header-01">Understand</h1>
              </div>
              <div className="chat_intro_card-body">
                <p className="card_button">Who is Kenneth Choi</p>
                <p className="card_button">
                  What programming languages does he know
                </p>
                <p className="card_button">Why hire Kenneth</p>
              </div>
            </div>
            <div className="chat_intro_card card">
              <div className="chat_intro_card-header">
                <h1 id="chat_intro_card-header-02">Create</h1>
              </div>
              <div className="chat_intro_card-body">
                <p className="card_button">Describe a past project</p>
                <p className="card_button">How did he make this</p>
                <p className="card_button">What are his career goals</p>
              </div>
            </div>
            <div className="chat_intro_card card">
              <div className="chat_intro_card-header">
                <h1 id="chat_intro_card-header-03">Explore</h1>
              </div>
              <div className="chat_intro_card-body">
                <p className="card_button">Strengths and Weaknesses</p>
                <p className="card_button">Hobbies & fun</p>
                <p className="card_button">How to get in touch</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat_message_container">
          {data.map((message, idx) => {
            return message.isHuman ? (
              <div key={message.id} className="chat_message chat_message_human">
                <div className="chat_message_icon_container">
                  <img
                    alt="Kenneth Choi"
                    src={photo}
                    className="header_photo_lrg"
                  />
                </div>
                <div className="content">
                  {/* <p className="chat_message_content">{message.content}</p> */}
                  <TypeAnimation
                    splitter={(str) => str.split(/(\.)/)}
                    sequence={[message.content, 3000]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
                    omitDeletionAnimation={true}
                    cursor={false}
                    className="chat_message_content"
                    style={{ fontSize: '1.1rem', lineHeight: '24px' }}
                  />
                </div>
              </div>
            ) : (
              <div
                key={message.id}
                className="chat_message chat_message_assistant"
              >
                <div className="chat_message_icon_container">
                  {idx === data.length - 1 ? (
                    <img
                      src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif"
                      alt="bard sparkle"
                      className="bard_sparkle"
                    />
                  ) : (
                    <img
                      src="https://www.gstatic.com/lamda/images/logo_single_color_v2_0aa36c7aa309a6fe6bd2.svg"
                      alt="bard no sparkle"
                      className="bard_no_sparkle"
                    />
                  )}
                </div>

                <div className="content">
                  <TypeAnimation
                    splitter={(str) => str.split(/(?= )/)}
                    sequence={[message.content, 3000]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 10 }}
                    omitDeletionAnimation={true}
                    cursor={false}
                    className="chat_message_content"
                    style={{ fontSize: '1.1rem', lineHeight: '24px' }}
                  />
                </div>
              </div>
            );
          })}
          {isLoading && (
            <div className="chat_message chat_loading_container">
              <img
                src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif"
                alt="bard sparkle"
                className="bard_sparkle"
              />
            </div>
          )}
          <div className="chat_bottom_div" ref={chatBottomDivRef}></div>
        </div>
      </div>
      <div className="input_wrapper">
        <div className="ui fluid action input huge">
          <input
            type="text"
            value={query}
            placeholder="Enter a prompt here"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            disabled={isLoading}
            className="input_chat"
            id="input_chat_id"
          />
          <button className="ui button" onClick={handleSubmitQuery}>
            Send
          </button>
        </div>
        <div className="chat_intro_warning">
          Chat may display inaccurate info, so please double-check its
          responses.<span className="heart">♥</span>
        </div>
      </div>
    </div>
  );
}

export default Chat;
