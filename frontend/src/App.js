import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // fetch data on render
    fetch('/data').then((res) =>
      res.json().then((res) => {
        setData(res.data);
      })
    );
  }, []);

  const handleSubmitQuery = (e) => {
    e.preventDefault();

    fetch('/data', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData([...data, res]);
      })
      .catch((err) => console.log(err));

    console.log('submitted');
  };

  // console.log(data);

  return (
    <div className="App ui container">
      <h1>ChatKIC</h1>
      <div className="ui fluid action input">
        <input
          type="text"
          value={query}
          placeholder="Ask me a question"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="ui button" onClick={handleSubmitQuery}>
          Send
        </button>
      </div>

      <div>
        {data.map((message) => (
          <div
            key={message.id}
            className={`ui icon message small ${
              message.sender === 'Human' && 'black'
            }`}
          >
            <div className="content">
              <strong>{message.sender}:</strong>
              {message.content.split('\n').map((str, idx) => (
                <p key={`${message.id}-${idx}`}>{str}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
