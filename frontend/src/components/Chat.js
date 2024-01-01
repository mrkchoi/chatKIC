import React, { useState, useEffect, useRef } from "react";

import ChatIntro from "./ChatIntro";
import ChatResponse from "./ChatResponse";
import memoji from "../images/memoji_001.png";
import ChatInput from "./ChatInput";
import { motion } from "framer-motion";

// import memoji_video from "../images/memoji_bgGray.mp4";
import memojiBgGray from "../images/memoji_bgGray.mp4";
import memojiBgBlack from "../images/memoji_bgBlack.mp4";

// import '../styles/Chat.css';

function Chat({
  showIntro,
  setShowIntro,
  showSuggestions,
  setShowSuggestions,
}) {
  const [response, setResponse] = useState({});
  const [query, setQuery] = useState("Briefly Introduce Kenny");
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    setIsLoading(false);
    inputRef.current.focus();
  }, []);

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const responseData = res.data;
        setIsLoading(false);
        setResponse(responseData);
        console.log("responseData: ", responseData);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });

    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitQuery(e);
    }
  };

  const handleSuggestionClick = (e) => {
    if (e.target.className === "card_button") {
      const query = e.target.textContent;
      // const mappedQuery = queryMap[query];
      setQuery(query);
      handleSubmitQuery(e);
    }
  };

  return (
    // Chat Outer Container
    <div className="container mx-auto flex min-h-[90vh] flex-col justify-between p-6">
      <div className="chat_inner_container flex flex-1 flex-col-reverse items-center justify-end sm:h-full sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          className="chat_left mb-12 mr-2 self-start sm:self-center"
          initial={{ opacity: 0, scale: 0.75, y: 200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          {showIntro ? (
            <ChatIntro
              setShowIntro={setShowIntro}
              setShowSuggestions={setShowSuggestions}
            />
          ) : (
            <ChatResponse isLoading={isLoading} responseData={response} />
          )}
        </motion.div>
        <motion.div
          className="chat_right"
          initial={{ opacity: 0, scale: 0.75, y: 200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          <video
            src={memojiBgGray}
            loop={true}
            autoPlay={true}
            className="max-w-36 sm:max-w-52 dark:hidden"
            muted={true}
            data-autoplay={true}
          ></video>
          <video
            src={memojiBgBlack}
            loop={true}
            autoPlay={true}
            className="hidden max-w-36 sm:max-w-52 dark:block"
            muted={true}
            data-autoplay={true}
          ></video>
        </motion.div>
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
