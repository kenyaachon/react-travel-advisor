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

const data = [
  {
    reviews: 9,
    totalRestaurants: 10000,
    currentRanking: 5000,
    city: "New York City",
    address: "New York City 9800032-5224",
    phoneNumber: "425-254-4392",
  },
  {
    reviews: 9,
    totalRestaurants: 10000,
    currentRanking: 5000,
    city: "New York City",
    address: "New York City 9800032-5224",
    phoneNumber: "425-254-4392",
  },
  {
    reviews: 9,
    totalRestaurants: 10000,
    currentRanking: 5000,
    city: "New York City",
    address: "New York City 9800032-5224",
    phoneNumber: "425-254-4392",
  },
  {
    reviews: 9,
    totalRestaurants: 10000,
    currentRanking: 5000,
    city: "New York City",
    address: "New York City 9800032-5224",
    phoneNumber: "425-254-4392",
  },
  {
    reviews: 9,
    totalRestaurants: 10000,
    currentRanking: 5000,
    city: "New York City",
    address: "New York City 9800032-5224",
    phoneNumber: "425-254-4392",
  },
  {
    reviews: 9,
    totalRestaurants: 10000,
    currentRanking: 5000,
    city: "New York City",
    address: "New York City 9800032-5224",
    phoneNumber: "425-254-4392",
  },
];
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
      {data.map((card) => (
        <ListItem>
          <Cards
            reviews={card.reviews}
            totalRestaurants={card.totalRestaurants}
            currentRanking={card.currentRanking}
            city={card.city}
            address={card.address}
            phoneNumber={card.phoneNumber}
          />
        </ListItem>
      ))}
    </List>
  );
}
