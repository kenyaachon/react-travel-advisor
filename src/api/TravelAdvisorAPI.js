import axios from "axios";

export const getLocations = async (query) => {
  try {
    const options = {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete",
      params: { query: query, lang: "en_US", units: "km" },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVE_ADVISOR_API_KEY,
      },
    };

    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getHotels = async (coordinates) => {
  try {
    var options = {
      method: "POST",
      url: "https://travel-advisor.p.rapidapi.com/hotels/v2/list",
      params: { currency: "USD", units: "km", lang: "en_US" },
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVE_ADVISOR_API_KEY,
      },
      data: {
        geoId: 293928,
        checkIn: "2021-06-28",
        checkOut: "2021-06-30",
        sort: "PRICE_LOW_TO_HIGH",
        sortOrder: "asc",
        filters: [
          { id: "deals", value: ["1", "2", "3"] },
          { id: "price", value: ["31", "122"] },
          { id: "type", value: ["9189", "9201"] },
          { id: "amenity", value: ["9156", "9658", "21778", "9176"] },
          { id: "distFrom", value: ["2227712", "25.0"] },
          { id: "rating", value: ["40"] },
          { id: "class", value: ["9572"] },
        ],
        rooms: [
          { adults: 2, childrenAges: [2] },
          { adults: 2, childrenAges: [3] },
        ],
        boundingBox: {
          northEastCorner: coordinates,
          southWestCorner: coordinates,
        },
        updateToken: "",
      },
    };

    const response = axios.request(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurants = async (coordinates) => {
  try {
    var options = {
      method: "POST",
      url: "https://travel-advisor.p.rapidapi.com/restaurants/v2/list",
      params: { currency: "USD", units: "km", lang: "en_US" },
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVE_ADVISOR_API_KEY,
      },
      data: {
        geoId: 293928,
        partySize: 2,
        reservationTime: "2021-07-07T20:00",
        sort: "POPULARITY",
        sortOrder: "desc",
        filters: [{ id: "establishment", value: ["10591"] }],
        boundingBox: {
          northEastCorner: coordinates,
          southWestCorner: coordinates,
        },
        updateToken: "",
      },
    };

    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};
