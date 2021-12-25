import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import PlacesList from "./components/PlacesList";
import { CssBaseline } from "@mui/material";
import { getLocations } from "./api/TravelAdvisorAPI";
function App() {
  const query = "new york city";
  getLocations(query).then((response) => {
    if (response.status < 399) {
      console.log(response.data);
    } else {
      console.log(response.status);
      console.log("check the query data");
    }
  });

  return (
    <>
      <CssBaseline />
      <PrimarySearchAppBar />
      <MainContent />
    </>
  );
}

export default App;
