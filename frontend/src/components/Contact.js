import React, { useState } from 'react';
import '../Form.css';

const Contact = () => {
  const [showForm] = useState(false);

  const handleCopyText = (e) => {
    const isCopyIcon = e.target.className.includes('copyContactIcon');
    if (isCopyIcon && 'clipboard' in navigator) {
      const text = e.target.dataset['content'];
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <>
      <div className="header_tagline_container">
        <h2 className="header_tagline">Let's work together 👋</h2>
      </div>
      <div className="card inner_wrapper text_content">
        <div className="contact_wrapper">
          {showForm && (
            <>
              <div className="contact_form">
                <form
                  method="post"
                  action="https://formsubmit.co/0b82732fba573f02a55eee100c29d0c0"
                >
                  <div className="fields">
                    <div className="field half">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="field half">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="field">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: 'none' }}
                    />
                    <input
                      type="hidden"
                      name="_next"
                      value={'https://www.kchoi.io'}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Send"
                    className="form_button ui button"
                  />
                </form>
              </div>
              <div className="divider"> </div>
            </>
          )}
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
                className="copy outline icon copyContactIcon"
                data-content="4082393088"
              ></i>
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
                className="copy outline icon copyContactIcon"
                data-content="kennethichoi@gmail.com"
              ></i>
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
