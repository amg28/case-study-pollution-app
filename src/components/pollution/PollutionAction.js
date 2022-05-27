import { GET_PHOTOS, GET_POLLUTION_DATA } from "./ActionTypes";

export const getPhotos = data => ({
  type: GET_PHOTOS,
  data
});

export const getPollution = data => ({
  type: GET_POLLUTION_DATA,
  data
});
