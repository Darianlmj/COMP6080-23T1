import React, { useState } from "react";
import StoreContext from "./context";

const AppProvider = ({ children }) => {
  const [token, setToken] = useState([]);

  const store = {
    token: [token, setToken],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default AppProvider;