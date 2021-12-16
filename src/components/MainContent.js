import * as React from "react";
import Grid from "@mui/material/Grid";
import PlacesList from "./PlacesList";
import GoogleMap from "./GoogleMap";
import { Container } from "@mui/material";

export default function MainContent() {
  const spacing = 1;
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid sx={{ flexGrow: 1 }} container spacing={spacing}>
        <Grid item xs={12} md={4} lg={4} justifyContent="center">
          <PlacesList />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <GoogleMap />
        </Grid>
        {/* <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          <GoogleMap />
        </Grid>
      </Grid> */}
      </Grid>
    </Container>
  );
}
