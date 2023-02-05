import React, { createContext, useState } from "react";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  let [user, setUser] = useState("Sagar");
  return (
    <ContextProvider.Provider value={{ user }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
