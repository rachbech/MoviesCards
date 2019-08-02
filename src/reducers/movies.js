import { combineReducers } from 'redux';
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_CATEGORYS_SUCCESS,
  FETCH_MOVIES_BY_CATEGORYS_SUCCESS,
  DELETE_MOVIES_SUCCESS,
} from '../actions';


function movies(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.payload.movies;
    case DELETE_MOVIES_SUCCESS:
      return action.payload.id;
    default:
      return state;
  }
}

function categorys(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORYS_SUCCESS:
      return action.payload.categorys;
    default:
      return state;
  }
}

function moviesByCategorys(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES_BY_CATEGORYS_SUCCESS:
      return action.payload.categorys;
    default:
      return state;
  }
}

export default combineReducers({ movies, categorys, moviesByCategorys });