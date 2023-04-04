import StoreContext from "./context";
import React, { useState } from 'react';

const AppProvider = ({children}) => {
  const [token, setToken] = useState('');

  const store = {
   token: [token, setToken], 
  };


  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )

}
export default AppProvider;