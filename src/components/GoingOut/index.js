import React from "react";
import "./GoingOut.css";

function GoingOut() {
  return (
    <div>
      <h2>Going Out</h2>
      <input placeholder="Where do you want to go?" />
      <div id="map"> </div>
      <div>
        <input></input>
      </div>
    </div>
  );
}

export default GoingOut;
