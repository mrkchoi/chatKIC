<div className="chat_history_container">
  <div className="chat_intro_container">
    {/* <div
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
          </div> */}
  </div>
  <div className="chat_message_container">
    {data.map((message, idx) => {
      return message.isHuman ? (
        <div key={message.id} className="chat_message chat_message_human">
          <div className="chat_message_icon_container">
            <img alt="Kenneth Choi" src={photo} className="header_photo_lrg" />
          </div>
          <div className="content">
            <p className="chat_message_content">{message.content}</p>
            {/* <TypeAnimation
                    splitter={(str) => str.split(/(\.)/)}
                    sequence={[message.content, 3000]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
                    omitDeletionAnimation={true}
                    cursor={false}
                    className="chat_message_content"
                    style={{ fontSize: '1.1rem', lineHeight: '24px' }}
                  /> */}
          </div>
        </div>
      ) : (
        <div key={message.id} className="chat_message chat_message_assistant">
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
            {idx === data.length - 1 ? (
              <TypeAnimation
                splitter={(str) => str.split(/(?= )/)}
                sequence={[message.content, 3000]}
                speed={{ type: "keyStrokeDelayInMs", value: 10 }}
                omitDeletionAnimation={true}
                cursor={false}
                className="chat_message_content"
                style={{ fontSize: "1.1rem", lineHeight: "24px" }}
              />
            ) : (
              <p className="chat_message_content">{message.content}</p>
            )}
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
</div>;
