import React from "react";

const WelcomeJSX = () => {
  const handleClick = () => {
    console.log("hi my name is Aashish also known as jean!!.");
  };

  return (
    <div>
      <h1>Welcome to JSX!</h1>
      <p>JSX allows you to write HTML-like syntax in JavaScript, making it easier to build UI components in React.</p>
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default WelcomeJSX;
