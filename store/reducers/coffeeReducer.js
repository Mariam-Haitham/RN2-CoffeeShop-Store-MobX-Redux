import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFEESHOPS:
      const shops = action.payload;
      return {
        ...state,
        coffeeShops: shops,
        loading: false
      };
    case COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
