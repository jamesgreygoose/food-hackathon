import React from "react";
import "./App.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
    import GoogleMaps from "../Map";
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
    <GoogleMaps />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
