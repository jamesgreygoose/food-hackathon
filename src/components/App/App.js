import React from "react";
import "./App.css";
<<<<<<< HEAD
import GoogleMaps from "../Map";

function App() {
  return (
    <div className="App">
      <h2> Food Hackathon (Working Title) </h2>
      <GoogleMaps />
    </div>
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../Home";
import StayingIn from "../StayingIn";
import GoingOut from "../GoingOut";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" className="links">
          <h2 id="gisMeDinner"> GIS ME DINNER</h2>
        </Link>
      </div>
      <Switch>
        <Route path="/stayingin">
          <StayingIn />
        </Route>
        <Route path="/goingout">
          <GoingOut />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
>>>>>>> 9d5de2038e8430566fbb4a21b7709a0f6932f49c
  );
}

export default App;
