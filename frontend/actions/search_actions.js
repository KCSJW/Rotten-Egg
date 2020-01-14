import * as APIUtil from '../util/search_api_util';

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';

export const getAllMovies = movies => ({
    type: GET_ALL_MOVIES,
    movies
});

export const getMovie = payload => ({
    type: GET_MOVIE,
    payload
});

export const getAllDBMovies = () => dispatch => (
    APIUtil.fetchAllDBMovies()
        .then(movies => dispatch(getAllMovies(movies)))
);

export const getDBMovie = id => dispatch => (
    APIUtil.fetchDBMovie(id)
        .then(movie => dispatch(getMovie(movie)))
);
