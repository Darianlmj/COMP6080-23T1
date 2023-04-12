import React, { useState } from "react";

const Button = ({ title, id, onClick }) => {
  const [buttonText, setButtonText] = useState(title);

  const handleClick = () => {
    if (buttonText === "Click me") {
      setButtonText("Do not click me");
    } else {
      setButtonText("Click me");
    }
  };

  return (
    <div>
      <button id={id} onClick={
        onClick === undefined ?
        handleClick :
        onClick
      }>
        {buttonText}
      </button>
      {
        buttonText === 'Do not click me' && 
        <p>
          WHYYYYY
        </p>
      }
    </div>
  );
};

export default Button;
