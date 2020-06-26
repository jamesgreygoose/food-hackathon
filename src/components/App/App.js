import React from "react";
import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleMaps from "../Map";
=======

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

>>>>>>> 687b8f45b5362caae37d794f4d72e25e4b0285a7
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
<<<<<<< HEAD
          <GoogleMaps />
=======
>>>>>>> 687b8f45b5362caae37d794f4d72e25e4b0285a7
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
