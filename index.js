"use strict";
const fs = require("fs");

// fs.readFile("./src/hotels.json", (err, data) => {
//   if (err) throw err;
//   let hotels = JSON.parse(data);
//   let sections = hotels.data.AppPresentation_queryAppListV2[0].sections;

//   //for attaining the name of the hotel from the hotels api request
//   //   sections.map((section) => {
//   //     if (section.singleCardContent) {
//   //       console.log(section.singleCardContent.cardTitle.string);
//   //     }
//   //   });

//   //for attaining the images of the hotels
//   sections.map((section) => {
//     if (section.singleCardContent) {
//       console.log(
//         section.singleCardContent.cardPhotos.map((photo) => {
//           console.log(photo.sizes.urlTemplate);
//           console.log("\n");
//         })
//       );
//     }
//   });

//   //number of stars review of the hotel
//   //   sections.map((section) => {
//   //     if (section.singleCardContent) {
//   //       if (section.singleCardContent.bubbleRating) {
//   //         // how many stars
//   //         //int
//   //         console.log(section.singleCardContent.bubbleRating.rating);
//   //         //how many people reviewed the place
//   //         //string
//   //         console.log(
//   //           section.singleCardContent.bubbleRating.numberReviews.string
//   //         );
//   //       }
//   //     }
//   //   });
// });

fs.readFile("./src/locations.json", (err, data) => {
  if (err) throw err;
  let locations = JSON.parse(data);

  //probably for the map, we will choose just the first location
  //then send the longitude and latitude componenet to the google maps component
  let places = locations.data.Typeahead_autocomplete.results;
  places.map((place) => {
    if (place.detailsV2) {
      if (place.detailsV2.geocode) {
        //place name
        console.log(place.detailsV2.names.name);
        //latitude
        console.log(place.detailsV2.geocode.latitude);
        //longitude
        console.log(place.detailsV2.geocode.longitude);
      }
    }
  });
});
