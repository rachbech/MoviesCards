import { getAllMovies, deleteMovie, getAllCategorys, getMoviesByCategorys } from '../api/movies';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const DELETE_MOVIES_REQUEST = 'DELETE_MOVIES_REQUEST';
export const DELETE_MOVIES_SUCCESS = 'DELETE_MOVIES_SUCCESS';
export const DELETE_MOVIES_FAILURE = 'DELETE_MOVIES_FAILURE';

export const FETCH_CATEGORYS_REQUEST = 'FETCH_CATEGORYS_REQUEST';
export const FETCH_CATEGORYS_SUCCESS = 'FETCH_CATEGORYS_SUCCESS';
export const FETCH_CATEGORYS_FAILURE = 'FETCH_CATEGORYS_FAILURE';

export const FETCH_MOVIES_BY_CATEGORYS_REQUEST = 'FETCH_MOVIES_BY_CATEGORYS_REQUEST';
export const FETCH_MOVIES_BY_CATEGORYS_SUCCESS = 'FETCH_MOVIES_BY_CATEGORYS_SUCCESS';
export const FETCH_MOVIES_BY_CATEGORYS_FAILURE = 'FETCH_MOVIES_BY_CATEGORYS_FAILURE';


export const fetchAllMovies = () => (dispatch, getState) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });
  return getAllMovies()
    .then(movies =>
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: {
          movies,
        },
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        payload: {
          message: err.message,
        },
      }),
    );
};

export const removeMovie = id => (dispatch, getState) => {
  dispatch({ type: DELETE_MOVIES_REQUEST });

  return deleteMovie(id)
    .then(() =>
      dispatch({
        type: DELETE_MOVIES_SUCCESS,
        payload: { id },
      }),
    )
    .catch(err =>
      dispatch({
        type: DELETE_MOVIES_FAILURE,
        payload: {
          message: err.message,
        },
      }),
    );
};

export const fetchAllCategorys = () => (dispatch, getState) => {
  dispatch({ type: FETCH_CATEGORYS_REQUEST });

  return getAllCategorys()
    .then(categorys =>
      dispatch({
        type: FETCH_CATEGORYS_SUCCESS,
        payload: {
          categorys,
        },
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_CATEGORYS_FAILURE,
        payload: {
          message: err.message,
        },
      }),
    );
};

export const fetchMoviesByCategorys = (categorys) => (dispatch, getState) => {
  dispatch({ type: FETCH_MOVIES_BY_CATEGORYS_REQUEST });

  return getMoviesByCategorys(categorys)
    .then(categorys =>
      dispatch({
        type: FETCH_MOVIES_BY_CATEGORYS_SUCCESS,
        payload: {
          categorys,
        },
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_MOVIES_BY_CATEGORYS_FAILURE,
        payload: {
          message: err.message,
        },
      }),
    );
};