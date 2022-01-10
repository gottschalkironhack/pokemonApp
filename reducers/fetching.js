
import {
    FETCH_POKEMONS_BEGIN,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_FAILURE,
  } from '../actions/actionTypes';
  
  const initialState = {
    status: false,
  };
  
  export default function fetching(state = initialState, action) {
    switch (action.type) {
      case FETCH_POKEMONS_BEGIN:
        return {
          ...state,
          status: true,
        };
      case FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          status: false,
        };
      case FETCH_POKEMONS_FAILURE:
        return {
          ...state,
          status: false,
        };
      default:
        return state;
    };
  };