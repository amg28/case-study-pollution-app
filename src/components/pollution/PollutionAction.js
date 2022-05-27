import { GET_PHOTOS, GET_POLLUTION_DATA, GET_POLLUTION_CITY_NAME } from "./ActionTypes";

export const getPhotos = data => ({
  type: GET_PHOTOS,
  data
});

export const getPollution = data => ({
  type: GET_POLLUTION_DATA,
  data
});

export const getPollutionCityName = (data) => ({
  type: GET_POLLUTION_CITY_NAME,
  data,
});