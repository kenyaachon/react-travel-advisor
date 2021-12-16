import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Cards from "./Cards";
import { Container, Box, Typography } from "@mui/material";
import { useScrollTrigger } from "@mui/material";

export default function PlacesList(props) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 660,
        bgcolor: "background.paper",
        maxHeight: "50%",
        overflow: "auto",
      }}
    >
      <ListItem>
        <Cards />
      </ListItem>
      <ListItem>
        <Cards />
      </ListItem>
      <ListItem>
        <Cards />
      </ListItem>
      <ListItem>
        <Cards />
      </ListItem>
    </List>
  );
}
