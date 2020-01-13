import * as APIUtil from '../util/movies_api_util';
import { fetchAllDBMovies } from '../util/search_api_util';

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const SET_ALL_MOVIES = 'SET_ALL_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';

export const getAllMovies = movies => ({
    type: GET_ALL_MOVIES,
    movies
});

export const getMovie = payload => ({
    type: GET_MOVIE,
    payload
});

export const setAllMovies = payload => ({
    type: SET_ALL_MOVIES,
    payload
})

export const getAllDBMovies = () => dispatch => (
    fetchAllDBMovies()
        .then(movies => dispatch(getAllMovies(movies)))
);

export const setMovies = () => dispatch => (
    APIUtil.fetchAllMovies()
        .then(movies => dispatch(setAllMovies(movies)))
);

export const requestMovie = id => dispatch => (
    APIUtil.fetchMovie(id)
        .then(movie => dispatch(getMovie(movie)))
);
