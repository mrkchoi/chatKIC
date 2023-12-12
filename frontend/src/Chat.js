import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import photo from '../src/images/kenneth_choi_photo.jpeg';
import './App.css';

function Chat() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const chatBottomDivRef = useRef(null);

  useEffect(() => {
    // Focus input on render
    inputRef.current.focus();

    // reset data on render
    fetch('/').then((res) => setData([]));

    // mock data
    fetch('/mock')
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  // SCROLL TO BOTTOM OF CHAT ON STATE UPDATE
  // useEffect(() => {
  //   chatBottomDivRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'end',
  //   });
  // }, [data]);
  // console.log(query);

  const handleSubmitQuery = (e) => {
    e.preventDefault();

    data.push(getUserDataFromQuery(query));

    fetch('/data', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);

        const assistantData = res.data;
        setData([...data, assistantData]);
      })
      .catch((err) => console.log(err));

    setQuery('');

    // console.log('submitted');
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
      setQuery(e.target.textContent);
    }
  };

  return (
    <div className="chat_wrapper">
      <div className="chat_history_container">
        <div className="chat_intro_container">
          <div className="chat_intro_header_container">
            <div className="chat_intro_header_left">
              <img
                src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif"
                alt="bard sparkle"
                className="bard_sparkle"
              />
              <h1>
                Hello, I'm Kenneth Choi,<br></br>a software engineer.
              </h1>
              <h2>
                Learn more about me by asking a question, or pick a suggestion.
              </h2>
            </div>
            <div className="chat_intro_header_right">
              <img
                alt="Kenneth Choi"
                src={photo}
                className="header_photo_lrg"
              />
            </div>
          </div>
          <div
            className="chat_intro_cards_container"
            onClick={handleSuggestionClick}
          >
            <div className="chat_intro_card">
              <div className="chat_intro_card-header">
                <h1 id="chat_intro_card-header-01">Understand</h1>
              </div>
              <div className="chat_intro_card-body">
                <p className="card_button">Who is Kenneth Choi</p>
                <p className="card_button">Why hire Kenneth Choi</p>
                <p className="card_button">What languages does he know</p>
              </div>
            </div>
            <div className="chat_intro_card">
              <div className="chat_intro_card-header">
                <h1 id="chat_intro_card-header-02">Create</h1>
              </div>
              <div className="chat_intro_card-body">
                <p className="card_button">Past projects</p>
                <p className="card_button">Work history</p>
                <p className="card_button">Other stuff</p>
              </div>
            </div>
            <div className="chat_intro_card">
              <div className="chat_intro_card-header">
                <h1 id="chat_intro_card-header-03">Explore</h1>
              </div>
              <div className="chat_intro_card-body">
                <p className="card_button">What has he been doing?</p>
                <p className="card_button">How to contact</p>
                <p className="card_button">What about fun</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat_message_container">
          {data.map((message, idx) => {
            return message.isHuman ? (
              <div key={message.id} className="chat_message chat_message_human">
                <img
                  alt="Kenneth Choi"
                  src={photo}
                  className="header_photo_lrg"
                />
                <div className="content">
                  <p className="chat_message_content">{message.content}</p>
                </div>
              </div>
            ) : (
              <div
                key={message.id}
                className="chat_message chat_message_assistant"
              >
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

                <div className="content">
                  <p className="chat_message_content">{message.content}</p>
                </div>
              </div>
            );
          })}
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
          />
          <button className="ui button" onClick={handleSubmitQuery}>
            Send
          </button>
        </div>
        <div className="chat_intro_warning">
          Chat may display inaccurate info, so please double-check its
          responses.
        </div>
      </div>
    </div>
  );
}

export default Chat;
