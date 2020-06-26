import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import css from "./map.module.css";
import { usePosition } from "./usePosition";
import { MAPAPIKEY } from "../../config";

function GoogleMaps({ google, keyword }) {
  const { latitude, longitude, error } = usePosition();
  const [restaurants, setRestaurants] = useState([]);

  console.log({ latitude }, { longitude }, keyword);

  useEffect(() => {
    async function getRestaurants() {
      try {
        const res = await fetch(
          `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=3000&type=restaurant&keyword=${keyword}&key=AIzaSyC0ue6GBSdLopelg1kPuN5ygZJvbkoqgGM
          `
          //   {
          //     headers: { "Access-Control-Allow-Origin": "*" },
          //     mode: "cors",
          //   }
        );
        const data = await res.json();
        if (data) {
          console.log(`fetch data`, data.results);
          setRestaurants(data.results);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getRestaurants();
  }, [keyword]);

  return (
    <>
      {longitude && latitude && (
        <Map
          google={google}
          initialCenter={{
            lat: latitude,
            lng: longitude,
          }}
          style={{
            width: "85%",
            maxWidth: "600px",
            maxHeight: "600px",
            height: "300px",
            position: "relative",
            left: "10px",
          }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />

          {restaurants.map((item) => {
            return (
              <Marker
                title={`${item.name}`}
                name={`${item.name}`}
                label={`${item.name}`}
                position={{
                  lat: item.geometry.location.lat,
                  lng: item.geometry.location.lng,
                }}
              />
            );
          })}
        </Map>
      )}
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: MAPAPIKEY,
})(GoogleMaps);
