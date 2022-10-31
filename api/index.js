import axios from "axios";

// Api to get a region countries
export const getCountriesByRegion = async (region) => {
  const { data } = await axios.get(
    `https://restcountries.com/v2/region/${region}`
  );
  if (data) {
    return data;
  }
};

// Api to get countries by the user search input
export const getSearchedCountries = async (search) => {
  const { data } = await axios.get(
    `https://restcountries.com/v2/name/${search}`
  );
  if (data) {
    console.log("data: ", data);
    return data;
  }
};

// Api to get all countries
export const getAllCountries = async () => {
  const { data } = await axios.get(`https://restcountries.com/v2/all/`);
  if (data) {
    return data;
  }
};
