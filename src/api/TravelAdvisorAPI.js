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

    // const {
    //   data: { data },
    // } = await axios.request(options);
    // return data;

    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};
