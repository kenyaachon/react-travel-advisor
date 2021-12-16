import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

require("dotenv").config();
class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GoogleMapApiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

const GoogleMap = () => {
  return (
    <Container maxWidth="lg">
      {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
      <SimpleMap />
    </Container>
  );
};

export default GoogleMap;
