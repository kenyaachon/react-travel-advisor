import "./App.css";
import PrimarySearchAppBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import { CssBaseline } from "@mui/material";
import {
  getLocations,
  getHotels,
  getRestaurants,
} from "./api/TravelAdvisorAPI";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("new york city");

  const [center, setCenter] = useState({});
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("hotels");
  //since the hotel and restaurants route require a longitude and latitude
  //we will first call the locations route then get the longitude and latitude from it

  useEffect(() => {
    const handlePlaces = (coordinates) => {
      //handle which API method to call depending on the place type
      console.log(coordinates.latitude, coordinates.longitude);
      if (type === "hotels") {
        console.log(type);
        getHotels(coordinates)
          .then((response) => {
            //set the places data for hotels
            if (response.status < 399) {
              console.log("data is working");
              console.log(
                response.data.data.AppPresentation_queryAppListV2[0].sections
              );
            } else {
              console.log("error with query");
            }
          })
          .catch((error) => console.log(error));
      } else if (type === "restaurants") {
        console.log(type);
        getRestaurants(coordinates)
          .then((response) => {
            //set the place data for restaurants
            if (response.status < 399) {
              console.log("data is working");
              console.log(
                response.data.data.AppPresentation_queryAppListV2[0].sections
              );
            } else {
              console.log("error with query");
            }
          })
          .catch((error) => console.log(error));
      } else {
        console.log(type);
        // getAttractions(coordinates).then((response) => {
        //   //set the places data for restaurants
        // });
      }
    };
    getLocations(searchQuery)
      .then((response) => {
        if (response.status < 399) {
          console.log(
            response.data.data.Typeahead_autocomplete.results[0].detailsV2
              .geocode
          );
          //set the coordinates from the result
          let longitude =
            response.data.data.Typeahead_autocomplete.results[0].detailsV2
              .geocode.longitude;

          let latitude =
            response.data.data.Typeahead_autocomplete.results[0].detailsV2
              .geocode.latitude;

          setCenter({
            lat: latitude,
            lng: longitude,
          });
          handlePlaces({ longitude: longitude, latitude: latitude });
        } else {
          console.log(response.status);
          console.log("check the query data");
        }
      })
      .catch((error) => console.log(error));
  }, [searchQuery, type]);

  return (
    <>
      <CssBaseline />
      <PrimarySearchAppBar setSearchQuery={setSearchQuery} />
      <MainContent
        center={center}
        places={places}
        setType={setType}
        type={type}
      />
    </>
  );
}

export default App;
