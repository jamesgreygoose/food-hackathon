import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/stayingin" className="links">
        <div className="homeBox" style={{ backgroundColor: "orange" }}>
          <h2 className="in"> Staying In </h2>
          <img
            className="inImg"
            src="https://static.thenounproject.com/png/830216-200.png"
            alt="eat in"
          />
        </div>
      </Link>
      <Link to="/goingout" className="links">
        <div className="homeBox" style={{ backgroundColor: "yellow" }}>
          <h2 className="out"> Going Out </h2>
          <img
            className="outImg"
            src="https://static.thenounproject.com/png/53773-200.png"
            alt="going out"
          />
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
