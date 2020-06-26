import React, { useState } from "react";
import "./GoingOut.css";

const initialState = {
  people: null,
  cost: null,
  perc: null,
};

function GoingOut() {
  const [bill, setBill] = useState(initialState);
  const [splitTotal, setSplitTotal] = useState(null);

  function handleChange(e) {
    const newValue = e.target.value;
    const newName = e.target.name;
    setBill({ ...bill, [newName]: newValue });
    console.log(bill);
  }

  function calculateBill() {
    const cost = bill.cost;
    const diners = bill.people;
    const perc = bill.perc;
    const tip = (cost / 100) * perc;
    const total = tip + cost;
    const payment = total / diners;
    setSplitTotal(payment);
  }

  return (
    <>
      <div>
        <h2 id="goingOutTitle">Going Out</h2>
        <div id="whereToGo">
          <h4>Where do you fancy going?</h4>
          <input placeholder="Where do you want to go?" />
          <div id="map"> </div>
        </div>
        <div id="billCalculator">
          <h4>Bill Calculator</h4>
          <input
            placeholder="How many people?"
            name="people"
            value={bill.people}
            onChange={handleChange}
          ></input>
          <input
            placeholder="Total cost"
            name="cost"
            value={bill.cost}
            onChange={handleChange}
          ></input>
          <input
            placeholder="Percentage gratuity"
            name="perc"
            value={bill.perc}
            onChange={handleChange}
          ></input>
          {bill.people && bill.perc && bill.cost && (
            <button onClick={calculateBill}>Calculate</button>
          )}
          <h5 id="eachPay">You each pay</h5>
          <p className="p">{splitTotal}</p>
        </div>
      </div>
    </>
  );
}

export default GoingOut;
