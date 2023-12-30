import React from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { MediaQuery } from '../utill/MediaQuery';
import sparkle_gif from '../images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif';

// import '../styles/ChatInput.css';
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
    <div className="input_parent_container fixed flex flex-col bottom-0 left-[50%] translate-x-[-50%] z-30 w-[inherit] container p-6 items-center ">
      <div
        className={`input_suggestion_wrapper ${
          showSuggestions ? 'fadeIn' : 'fadeOut'
        }`}
        onClick={handleSuggestionClick}
      >
        <span className="card_button">Who is Kenny?</span>
        <span className="card_button">What languages does he know?</span>
        {!isMobileDevice && (
          <span className="card_button">How'd he build this?</span>
        )}
      </div>
      <div className="flex flex-row items-center w-[inherit]">
        <input
          type="text"
          value={query}
          placeholder="Ask Kenny..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          disabled={isLoading}
          className="p-2 rounded-full flex-1 border w-[100%] sm:p-4 dark: text-black"
          id="input_chat_id"
          autoComplete="off"
        />
        <button
          className="bg-black text-white p-2 rounded-full ml-2 sm:p-4 dark:bg-white dark:text-black"
          onClick={handleSubmitQuery}
        >
          <img
            src={sparkle_gif}
            alt="bard sparkle"
            className="bard_sparkle max-w-4 inline-block mr-2 sm:max-w-6"
          />
          Proompt
        </button>
      </div>
      <div className="chat_intro_warning text-center mt-2">
        Built with <span className="heart text-red-600">♥</span> by Kenny Choi
      </div>
    </div>
  );
}

export default ChatInput;
