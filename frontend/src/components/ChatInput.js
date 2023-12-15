import React from 'react';

import '../App.css';

function ChatInput({
  showSuggestions,
  handleSuggestionClick,
  query,
  handleKeyDown,
  setQuery,
  inputRef,
  isLoading,
  handleSubmitQuery,
}) {
  return (
    <div className="input_wrapper">
      <div
        className={`input_suggestion_wrapper ${
          showSuggestions ? 'fadeIn' : 'fadeOut'
        }`}
        onClick={handleSuggestionClick}
      >
        <span className="card_button">Tell me about yourself.</span>
        <span className="card_button">What languages do you know?</span>
        <span className="card_button">What do you do for fun?</span>
      </div>
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
        Chat may display inaccurate info, so please double-check its responses.
        <span className="heart">♥</span>
      </div>
    </div>
  );
}

export default ChatInput;
