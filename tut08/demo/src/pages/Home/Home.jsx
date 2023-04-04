import React, { useContext } from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import StoreContext from "../../contexts/context";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const {
    token: [token, setToken],
  } = useContext(StoreContext);

  const performLogin = () => {
    if (username === "admin" && password === "admin") {
      // Navigate to the dashboard
      setToken("token");
    } else setToken("invalid token");
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Home</h1>
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={performLogin}>Login</Button>
    </div>
  );
};

export default Home;
