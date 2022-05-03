import * as React from "react";
import Grid from "@mui/material/Grid";
import PlacesList from "./PlacesList";
import GoogleMap from "./GoogleMap";
import { Container } from "@mui/material";

export default function MainContent({ places, center, setType, type, city }) {
  const spacing = 1;
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 1 }}>
      <Grid
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        container
        spacing={spacing}
      >
        <Grid justifyContent="center" item xs={12} md={4} lg={4}>
          <PlacesList
            setType={setType}
            type={type}
            places={places}
            city={city}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <GoogleMap center={center} />
        </Grid>
      </Grid>
    </Container>
  );
}
