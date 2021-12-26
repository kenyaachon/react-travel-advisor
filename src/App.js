import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import PlacesList from "./components/PlacesList";
import { CssBaseline } from "@mui/material";
import {
  getLocations,
  getHotels,
  getRestaurants,
} from "./api/TravelAdvisorAPI";
import { useState, useEffect } from "react";
function App() {
  const [searchQuery, setSearchQuery] = useState("new york city");

  const [map, setMap] = useState({});
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("hotels");
  //since the hotel and restaurants route require a longitude and latitude
  //we will first call the locations route then get the longitude and latitude from it
  const coordinates = {
    latitude: 12.248278039408776,
    longitude: 109.1981618106365,
  };
  useEffect(() => {
    getLocations(searchQuery).then((response) => {
      console.log(response);
      if (response.status < 399) {
        console.log(response.data);
        //set the coordinates from the result
      } else {
        console.log(response.status);
        console.log("check the query data");
      }

      // if (type === "hotels") {
      //   getHotels(coordinates).then((response) => {
      //     //set the places data for hotels
      //   });
      // } else {
      //   getHotels(coordinates).then((response) => {
      //     //set the places data for restaurants
      //   });
      // }
    });
  });

  return (
    <>
      <CssBaseline />
      <PrimarySearchAppBar setSearchQuery={setSearchQuery} />
      <MainContent map={map} places={places} setType={setType} />
    </>
  );
}

export default App;
