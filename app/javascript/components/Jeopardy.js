import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Edit from "./Edit";
import Navbar from "./Navbar";
import Play from "./Play";
import "./App.css";
import Layout from "./Layout";
function Jeopardy() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Layout} />
          <Route exact path="/edit" component={Edit} />

          <Route exact path="/play" component={Play} />
        </div>
      </div>
    </Router>
  );
}
export default Jeopardy;
