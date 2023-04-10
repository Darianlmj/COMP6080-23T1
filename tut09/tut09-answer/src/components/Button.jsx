import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const [title, setTitle] = React.useState(props.title);

  const handleClick = () => {
    title === "Click Me!"
      ? setTitle("Do not click me!")
      : setTitle("Click Me!");
  };

  return (
    <div>
      <button
        name={props.name}
        id={props.id}
        onClick={props.onClick !== undefined ? props.onClick : handleClick}
      >
        {title}
      </button>
      {title === "Do not click me!" && <p>Don't do it!</p>}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Button;
