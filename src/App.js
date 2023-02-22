import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Context from "./Context";
import About from "./pages/About";
import Home from "./pages/Home";
import OnboardingForm from "./pages/OnboardingForm";

const App = () => {
  return (
    <div className="2xl-[1440px]">
      <Context>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/onboarding-form" element={<OnboardingForm />} />
          </Routes>
        </Router>
      </Context>
    </div>
  );
};

export default App;
