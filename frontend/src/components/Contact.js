import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleCopyText = (e) => {
    const isCopyIcon = e.target.className.includes('copyContactIcon');
    if (isCopyIcon && 'clipboard' in navigator) {
      const text = e.target.dataset['content'];
      navigator.clipboard.writeText(text);

      let copyType = 'phone';

      if (e.target.className.includes('email')) {
        copyType = 'email';
      }

      if (copyType === 'phone') {
        setIsPhoneCopied(true);
      } else {
        setIsEmailCopied(true);
      }
      setTimeout(() => {
        if (copyType === 'phone') {
          setIsPhoneCopied(false);
        } else {
          setIsEmailCopied(false);
        }
      }, 750);
    }
  };

  return (
    <>
      <div className="header_tagline_container">
        <h2 className="header_tagline">Let's work together 👋</h2>
      </div>
      <div className="card inner_wrapper text_content">
        <div className="contact_wrapper">
          <div className="contact_header" onClick={handleCopyText}>
            <p>
              <strong>Contact:</strong>
              <br></br>
              <a
                className="contact_link"
                href="tel:4082393088"
                target="_blank"
                rel="noreferrer"
              >
                (408) 239-3088
              </a>
              <i
                className={`copy outline icon copyContactIcon phone ${
                  isPhoneCopied ? 'hide' : 'show'
                }`}
                data-content="4082393088"
              ></i>
              <span
                className={`copySuccess ${isPhoneCopied ? 'show' : 'hide'}`}
              >
                <i className="check icon copySuccessIcon"></i>
                <span className="copySuccessText">copied!</span>
              </span>
              <br></br>
              <a
                className="contact_link"
                href="mailto:kennethichoi@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                kennethichoi@gmail.com
              </a>
              <i
                className={`copy outline icon copyContactIcon email ${
                  isEmailCopied ? 'hide' : 'show'
                }`}
                data-content="kennethichoi@gmail.com"
              ></i>
              <span
                className={`copySuccess ${isEmailCopied ? 'show' : 'hide'}`}
              >
                <i className="check icon copySuccessIcon"></i>
                <span className="copySuccessText">copied!</span>
              </span>
              <br></br>
              <a
                href="https://www.linkedin.com/in/kenneth-choi-42502a35"
                target="_blank"
                rel="noreferrer"
                className="contact_link"
              >
                LinkedIn
              </a>
              <br></br>
              <a
                href="https://github.com/mrkchoi"
                target="_blank"
                rel="noreferrer"
                className="contact_link"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
