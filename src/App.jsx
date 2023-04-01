import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
