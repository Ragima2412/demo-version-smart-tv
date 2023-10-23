import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../src/layout/Main/Main";
import { KeyboardNavigation } from "./components/KeyboardNavigation/KeyboardNavigation";
import "./App.scss";

function App() {
  return (
    <KeyboardNavigation>
      <Router>
        <Main />
      </Router>
    </KeyboardNavigation>
  );
}

export default App;
