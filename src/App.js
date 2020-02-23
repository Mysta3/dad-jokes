import React, { Component, Fragment } from 'react';
import './App.css';
import Jokes from './Jokes';
const axios = require('axios');
const url = 'https://official-joke-api.appspot.com/random_joke';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      queue: []
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        // handle success
        this.setState({ jokes: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(response => {
        // always executed
      });
  }

  handleClick = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    const { queue } = this.state;
    axios
      .get(url)
      .then(response => {
        // handle success
        this.setState({ jokes: response.data });
        if (queue.length >= 10) {
          queue.pop(response[0]);
        } else {
          queue.push(response);
        }

        console.log(this.state.queue);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(response => {
        // always executed
      });
  };
  

  render() {
    const { jokes } = this.state;
    return (
      <Fragment>
        <h1>G.A.J</h1>
        <div className="jokeContainer">
          <Jokes setup={jokes.setup} punchline={jokes.punchline} />
        </div>
        <button onClick={this.handleClick}>Grab A Joke</button>
      </Fragment>
    );
  }
}

export default App;
