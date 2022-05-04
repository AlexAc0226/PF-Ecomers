/* eslint-disable array-callback-return */
import {
  GET_DOGS,
  GET_NAME_DOG,
  GET_DETAIL,
  ORDER_BY_NAME_DOG,
  ORDER_BY_WEIGHT,
  FILTER_BY_RAZA_DOG,
  FILTER_BY_TEMPERAMENT,
  GET_TYPES_OF_TEMPERAMENTS,
  ADD_TEMPS
} from "../actions/index.js";

const initialState = {
  initial: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return { ...state };
  }
}

export default rootReducer;
