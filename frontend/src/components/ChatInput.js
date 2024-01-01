import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { MediaQuery } from "../utill/MediaQuery";
import sparkle_gif from "../images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif";
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
  // const isMobileDevice = useMediaQuery(MediaQuery.MOBILE);

  return (
    // <div className="input_parent_container fixed flex flex-col bottom-0 left-[50%] translate-x-[-50%] z-30 w-[inherit] container p-6 items-center ">
    <div className="input_parent_container container z-30 mb-4 flex w-[inherit] flex-col items-center">
      {/* <div
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
      </div> */}
      <div className="flex w-[inherit] flex-row items-center">
        <input
          type="text"
          value={query}
          placeholder="Ask about Kenny..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          disabled={isLoading}
          className="dark: w-[100%] flex-1 rounded-full border-2 p-2 text-black sm:p-4"
          id="input_chat_id"
          autoComplete="off"
        />
        <button
          className="ml-2 rounded-full bg-slate-300 px-4 py-2 text-white sm:p-4 dark:bg-white dark:text-black"
          onClick={handleSubmitQuery}
        >
          <img
            src={sparkle_gif}
            alt="bard sparkle"
            className="bard_sparkle inline-block max-w-4 sm:max-w-6"
          />
        </button>
      </div>
      <div className="chat_intro_warning mt-2 text-center">
        Built with <span className="heart text-red-600">♥</span> by Kenny Choi
      </div>
    </div>
  );
}

export default ChatInput;
