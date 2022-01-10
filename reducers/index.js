import { combineReducers } from 'redux';
import pokemons from './pokemons';
import errors from './errors';
import success from './success';
import fetching from './fetching';

export default combineReducers({
  pokemons,
  errors,
  success,
  fetching,
});