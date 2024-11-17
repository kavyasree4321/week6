import React from 'react';

function task6() {
  const inlineStyle = {
    backgroundColor: 'lightblue',
    color: 'darkblue',
    padding: '10px',
    borderRadius: '5px'
  };

  return (
    <div className="container">
      <h1 id="main-heading" className="title" style={inlineStyle}>
        Welcome to React!
      </h1>
      <p className="description" id="intro-paragraph">
        This is an example of a JSX element with className, id, and inline styles.
      </p>
    </div>
  );
}

export default task6;
