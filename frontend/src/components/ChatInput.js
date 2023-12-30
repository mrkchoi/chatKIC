import React from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { MediaQuery } from '../utill/MediaQuery';

import '../styles/ChatInput.css';
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
  const isMobileDevice = useMediaQuery(MediaQuery.MOBILE);

  return (
    <div className="input_wrapper">
      <div
        className={`input_suggestion_wrapper ${
          showSuggestions ? 'fadeIn' : 'fadeOut'
        }`}
        onClick={handleSuggestionClick}
      >
        <span className="card_button">Who is Kenneth?</span>
        <span className="card_button">What languages does he know?</span>
        {!isMobileDevice && (
          <span className="card_button">How'd he build this?</span>
        )}
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
          autoComplete="off"
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
