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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
export default function PlacesList({ setType, type }) {
  const [rating, SetRating] = React.useState(4.0);

  const handleSearch = (event) => {
    SetRating(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  let image =
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/39/ba/39/getlstd-property-photo.jpg?w={width}&h={height}&s=1";
  return (
    <>
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            value={type}
            label="Type"
            onChange={handleTypeChange}
          >
            <MenuItem value={"bars"}>bars</MenuItem>
            <MenuItem value={"hotels"}>hotels</MenuItem>
            <MenuItem value={"restaurants"}>Restaurants</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="rating-select-label">Rating</InputLabel>
          <Select
            labelId="rating-select-label"
            id="rating-select"
            value={rating}
            label="Rating"
            onChange={handleSearch}
          >
            <MenuItem value={1.0}>Above 1.0</MenuItem>
            <MenuItem value={2.0}>Above 2.0</MenuItem>
            <MenuItem value={3.0}>Above 3.0</MenuItem>
            <MenuItem value={4.0}>Above 4.0</MenuItem>
          </Select>
        </FormControl>
      </div>
      <List
        sx={{
          width: "100%",
          maxWidth: 660,
          bgcolor: "background.paper",
          maxHeight: "50%",
          overflow: "auto",
        }}
      >
        {data.map((card, i) => (
          <ListItem key={i}>
            <Cards
              reviews={card.reviews}
              totalRestaurants={card.totalRestaurants}
              currentRanking={card.currentRanking}
              city={card.city}
              address={card.address}
              phoneNumber={card.phoneNumber}
              image={image}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
