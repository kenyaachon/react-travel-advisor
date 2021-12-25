import React, { useEffect, useRef, ReactElement } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GoogleMapReact from "google-map-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import googleMapReact from "google-map-react";

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status}...</h3>;
  if (status === Status.FAILURE) return <h3>{status}...</h3>;
  return null;
};

const MyMapComponent = ({
  center,
  zoom,
  onClick,
  children,
  style,
  ...options
}) => {
  const ref = useRef();
  const [map, setMap] = React.useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mapOptions = {
    center,
    zoom,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: window.google.maps.ControlPosition.TOP_CENTER,
    },
  };

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, mapOptions));
    }
  }, [ref, map, mapOptions]);

  // [END maps_react_map_component_options_hook]
  // [START maps_react_map_component_event_hooks]
  React.useEffect(() => {
    if (map) {
      if (onClick) {
        map.addListener("click", onClick);
      }
    }
  }, [onClick, map]);
  return (
    <>
      <div ref={ref} id="map" style={style} />{" "}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          //set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker = (options) => {
  const [marker, setMarker] = React.useState();
  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    //remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const SimpleMap = () => {
  const center = { lat: 48.864716, lng: 2.349014 };
  const zoom = 11;
  const [clicks, setClicks] = React.useState([]);
  //When the map is clicked
  const onClick = (event) => {
    //avoid directly mutating state
    setClicks([...clicks, event.latLng]);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* <Wrapper
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        render={render}
      > */}
      <Wrapper apiKey={""} render={render}>
        <MyMapComponent
          center={center}
          zoom={zoom}
          onClick={onClick}
          style={{ flexGrow: "1", height: "100%" }}
        >
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </MyMapComponent>
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
