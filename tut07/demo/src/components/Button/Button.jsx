import React from "react";

const Button = ({ title, url }) => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      // window.location.replace(url);
    }, 1000);
  };

  return (
    <div>
      {loading && loading2.map((element) => (
        <p>{element.title}</p>
      ))}
      <button onClick={handleClick}>{title}</button>
    </div>

  );
};

export default Button;
