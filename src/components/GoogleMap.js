import React, { useRef } from "react";
import Container from "@mui/material/Container";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
  if (status === Status.LOADING) return <h3>props is done loading</h3>;
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
  console.log(typeof center.lat);

  React.useEffect(() => {
    const mapOptions = {
      center,
      zoom,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.TOP_CENTER,
      },
    };
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, mapOptions));
    }
  }, [ref, map, center, zoom]);

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

const SimpleMap = ({ center = { lat: 48.864716, lng: 2.349014 } }) => {
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

const GoogleMap = ({ center }) => {
  console.log(center);
  return (
    <Container maxWidth="lg">
      {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
      <SimpleMap center={center} />
    </Container>
  );
};

export default GoogleMap;
