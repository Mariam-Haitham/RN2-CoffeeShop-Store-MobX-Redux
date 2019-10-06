import axios from "axios";

import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "./types";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "http://178.128.114.232/api/?format=json"
      );
      const shops = response.data;
      dispatch({
        type: GET_COFFEESHOPS,
        payload: shops
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return {
    type: COFFEESHOPS_LOADING
  };
};
