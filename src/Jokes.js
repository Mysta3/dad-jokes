import React, { Component } from 'react';

class Jokes extends Component {
  render() {

    const {setup} = this.props
    const {punchline} = this.props
    return (
      <>
        <p>{setup}</p>
        <p>{punchline}</p>
      </>
    );
  }
}

export default Jokes
