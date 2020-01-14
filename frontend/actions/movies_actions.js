import * as APIUtil from '../util/movie_data_api_util';

export const SET_ALL_MOVIES = 'SET_ALL_MOVIES';
export const NOW_PLAYING_MOVIES = 'NOW_PLAYING_MOVIES';

export const setAllMovies = payload => ({
    type: SET_ALL_MOVIES,
    payload
})

export const nowPlayingMovies = payload => ({
    type: NOW_PLAYING_MOVIES,
    payload
});

export const setMovies = () => dispatch => (
    APIUtil.fetchAllMovies()
        .then(movies => dispatch(setAllMovies(movies)))
);

export const nowPlaying = () => dispatch (
    APIUtil.fetchPlayingMovies()
        .then(movies => dispatch(nowPlayingMovies(movies)))
);