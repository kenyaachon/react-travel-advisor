import React, { useEffect, useRef, ReactElement } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GoogleMapReact from "google-map-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import googleMapReact from "google-map-react";
import { Loader } from "@googlemaps/js-api-loader";

require("dotenv").config();
const render = (status) => {
  if (status === Status.LOADING) return <h3>{status}...</h3>;
  if (status === Status.FAILURE) return <h3>{status}...</h3>;
  return null;
};

const MyMapComponent = ({ center, zoom, style }) => {
  const ref = useRef();
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} id="map" style={style} />;
};
const SimpleMap = () => {
  const center = { lat: 48.864716, lng: 2.349014 };
  const zoom = 11;
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Wrapper apiKey={process.env.GoogleMapApiKey} render={render}>
        <MyMapComponent
          center={center}
          zoom={zoom}
          style={{ flexGrow: "1", height: "100%" }}
        />
      </Wrapper>
    </div>
  );
};

const GoogleMap = () => {
  return (
    <Container maxWidth="lg">
      {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
      <SimpleMap />
    </Container>
  );
};

export default GoogleMap;
