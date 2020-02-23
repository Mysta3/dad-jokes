import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Jokes from './Jokes';
const axios = require('axios');
const url = 'https://official-joke-api.appspot.com/random_joke';

function App() {
  const [getJokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        // handle success
        setJokes(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(response => {
        // always executed
      });
  }, []);

  const handleClick = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    axios
      .get(url)
      .then(response => {
        // handle success
        setJokes(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(response => {
        // always executed
      });
  };

  return (
    <div>
      <Fragment>
        <h1>G.A.J</h1>
        <div className="jokeContainer">
          <Jokes setup={getJokes.setup} punchline={getJokes.punchline} />
        </div>
        <button onClick={handleClick}>Grab A Joke</button>
      </Fragment>
    </div>
  );
}

export default App;

