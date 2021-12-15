import * as React from "react";
import Grid from "@mui/material/Grid";
import PlacesList from "./PlacesList";
import GoogleMap from "./GoogleMap";
import { Container } from "@mui/material";

export default function MainContent() {
  const spacing = 2;
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={spacing}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          <PlacesList />
          <GoogleMap />
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          <GoogleMap />
        </Grid>
      </Grid> */}
    </Grid>
  );
}
