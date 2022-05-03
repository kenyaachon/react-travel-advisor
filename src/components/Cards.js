import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { Rating } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards({
  reviews,
  totalRestaurants,
  currentRanking,
  city,
  image,
  title,
  rating,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const review = 9;
  // const totalRestaurants = 10000;
  // const currentRanking = 5000;
  // const city = "New York City";

  const address = "New York City 9800032-5224";
  const phoneNumber = "425-254-4392";

  let imageURL = image.replace(/({width})/g, 300);
  imageURL = imageURL.replace(/({height})/g, 300);
  return (
    <Card sx={{ maxWidth: 500, width: "100%" }}>
      <CardMedia
        component="img"
        height="300"
        width="500"
        image={imageURL}
        alt="Paella dish"
      />
      <CardContent sx={{ width: "100%" }}>
        <Typography variant="h5" color="text.secondary">
          {title}
        </Typography>
        <Box sx={{ width: "100%", display: "flex" }}>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            value={rating}
            readOnly
          />
          <Box sx={{ flexGrow: 1 }} />

          <Typography align="right" variant="body2" color="text.secondary">
            {reviews} reviews
          </Typography>
        </Box>
        {/* <Box sx={{ width: "100%", display: "flex" }}>
          <Typography align="left" variant="body2" color="text.secondary">
            Ranking
          </Typography>

          <Box sx={{ flexGrow: 1, height: "50px" }} />

          <Typography align="left" variant="body2" color="text.secondary">
            #{currentRanking} of {totalRestaurants} in {city}
          </Typography>
        </Box> */}
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ width: "100%", display: "flex" }}>
          <LocationOnIcon color="disabled" />
          <Box sx={{ flexGrow: 1 }} />
          <Typography align="left" variant="body2" color="text.secondary">
            {address}
          </Typography>
        </Box>

        <Box sx={{ width: "100%", display: "flex" }}>
          <LocalPhoneIcon color="disabled" />
          <Box sx={{ flexGrow: 1 }} />
          <Typography align="left" variant="body2" color="text.secondary">
            {phoneNumber}
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
