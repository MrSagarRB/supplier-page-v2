import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Context from "./Context";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Context>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Context>
    </div>
  );
};

export default App;
