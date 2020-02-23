import React from 'react';

function Jokes(props) {
  const { setup, punchline } = props;
  return (
    <>
      <p className="jokeSetup">{setup}</p>
      <p>{punchline}</p>
    </>
  );
}

export default Jokes;
