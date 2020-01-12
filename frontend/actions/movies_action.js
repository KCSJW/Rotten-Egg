import * as APIUtil from '../util/movies_api_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export const getAllMovies = (movies) => ({
    type: RECEIVE_ALL_MOVIES,
    movies
});

export const getMovie = (payload) => ({
    type: RECEIVE_MOVIE,
    payload
});

export const requestAllMovies = () => dispatch => (
    APIUtil.fetchAllMovies()
        .then(movies => dispatch(getAllMovies(movies)))
);

export const requestMovie = (id) => dispatch => (
    APIUtil.fetchMovie(id)
        .then(movie => dispatch(getMovie(movie)))
);
