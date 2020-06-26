import React, { useState } from "react";
import "./StayingIn.css";

function StayingIn() {
  const [randomMeal, setRandomMeal] = useState([]);

  async function getRandomMeal() {
    try {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/random.php`
      );
      const data = await res.json();
      if (data) {
        setRandomMeal(data.meals);
        console.log(data.meals);
      }
    } catch (err) {
      console.log(`fetch error`, err);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="header">Staying In</h2>
      <button className="randomButton" onClick={getRandomMeal}>
        Get A Random Meal
      </button>

      {randomMeal.map((item) => {
        return (
          <div>
            <h2 id="mealtitle">{item.strMeal}</h2>
            <div id="ingredients">
              <h3> Ingredients </h3>
              <ul className="list">
                {item.strMeasure1 && (
                  <li>
                    {item.strMeasure1} {item.strIngredient1}
                  </li>
                )}
                {item.strMeasure2 && (
                  <li>
                    {item.strMeasure2} {item.strIngredient2}
                  </li>
                )}
                {item.strMeasure3 && (
                  <li>
                    {item.strMeasure3} {item.strIngredient3}
                  </li>
                )}
                {item.strMeasure4 && (
                  <li>
                    {item.strMeasure4} {item.strIngredient4}
                  </li>
                )}
                {item.strMeasure5 && (
                  <li>
                    {item.strMeasure5} {item.strIngredient5}
                  </li>
                )}
                {item.strMeasure6 && (
                  <li>
                    {item.strMeasure6} {item.strIngredient6}
                  </li>
                )}
                {item.strMeasure7 && (
                  <li>
                    {item.strMeasure7} {item.strIngredient7}
                  </li>
                )}
                {item.strMeasure8 && (
                  <li>
                    {item.strMeasure8} {item.strIngredient8}
                  </li>
                )}
                {item.strMeasure9 && (
                  <li>
                    {item.strMeasure9} {item.strIngredient9}
                  </li>
                )}
                {item.strMeasure10 && (
                  <li>
                    {item.strMeasure10} {item.strIngredient10}
                  </li>
                )}
                {item.strMeasure11 && (
                  <li>
                    {item.strMeasure11} {item.strIngredient11}
                  </li>
                )}
                {item.strMeasure12 && (
                  <li>
                    {item.strMeasure12} {item.strIngredient12}
                  </li>
                )}
                {item.strMeasure13 && (
                  <li>
                    {item.strMeasure13} {item.strIngredient13}
                  </li>
                )}
                {item.strMeasure14 && (
                  <li>
                    {item.strMeasure14} {item.strIngredient14}
                  </li>
                )}
                {item.strMeasure15 && (
                  <li>
                    {item.strMeasure15} {item.strIngredient15}
                  </li>
                )}
                {item.strMeasure16 && (
                  <li>
                    {item.strMeasure16} {item.strIngredient16}
                  </li>
                )}
                {item.strMeasure17 && (
                  <li>
                    {item.strMeasure17} {item.strIngredient17}
                  </li>
                )}
                {item.strMeasure18 && (
                  <li>
                    {item.strMeasure18} {item.strIngredient18}
                  </li>
                )}
                {item.strMeasure19 && (
                  <li>
                    {item.strMeasure19} {item.strIngredient19}
                  </li>
                )}
                {item.strMeasure20 && (
                  <li>
                    {item.strMeasure20} {item.strIngredient20}
                  </li>
                )}
              </ul>
            </div>
            <div id="instructions">
              <p>{item.strInstructions}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StayingIn;
