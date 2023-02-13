import React, { createContext, useEffect, useState } from "react";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  let [user, setUser] = useState("Sagar");
  const [isOpen, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ContextProvider.Provider value={{ user, scrollPosition, isOpen, setOpen }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
