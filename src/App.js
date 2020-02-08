import React, { Component, Fragment } from 'react';
import './App.css';
import Jokes from './Jokes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      queue: []
    };
  }

  componentDidMount() {
    const url = 'https://official-joke-api.appspot.com/random_joke';

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        this.setState({ jokes: response });
      })
      .catch(console.err);
  }

  handleClick = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    const { queue } = this.state;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        this.setState({ jokes: response });
        if (queue.length >= 10) {
          queue.pop(response[0]);
        } else {
          queue.push(response);
        }

        console.log(this.state.queue);
      })
      .catch(console.err);
  };
  render() {
    const { jokes } = this.state;
    return (
      <Fragment>
        <h1>The Future Home of Dad Jokes</h1>
        <div className="jokeContainer">
          <Jokes setup={jokes.setup} punchline={jokes.punchline} />
        </div>
        <button onClick={this.handleClick}>New Joke</button>
      </Fragment>
    );
  }
}

export default App;
