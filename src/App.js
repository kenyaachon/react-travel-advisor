import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import PlacesList from "./components/PlacesList";
import { CssBaseline } from "@mui/material";
import { getLocations } from "./api/TravelAdvisorAPI";
import { useState, useEffect } from "react";
function App() {
  const [searchQuery, setSearchQuery] = useState("new york city");

  useEffect(() => {
    getLocations(searchQuery).then((response) => {
      console.log(response);
      if (response.status < 399) {
        console.log(response.data);
      } else {
        console.log(response.status);
        console.log("check the query data");
      }
    });
  });

  return (
    <>
      <CssBaseline />
      <PrimarySearchAppBar setSearchQuery={setSearchQuery} />
      <MainContent />
    </>
  );
}

export default App;
