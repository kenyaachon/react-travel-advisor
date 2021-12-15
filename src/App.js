import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import PlacesList from "./components/PlacesList";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <PrimarySearchAppBar />
      <MainContent />
    </>
  );
}

export default App;
