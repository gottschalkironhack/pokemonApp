import {
  FETCH_POKEMONS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  pokemons: [],
};

export default function pokemons(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    default:
      return state;
  }
}
