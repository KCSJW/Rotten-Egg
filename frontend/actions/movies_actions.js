import * as APIUtil from '../util/movie_data_api_util';

export const SET_ALL_MOVIES = 'SET_ALL_MOVIES';
export const NOW_PLAYING_MOVIES = 'NOW_PLAYING_MOVIES';
export const UP_COMING_MOVIES = 'UP_COMING_MOVIES';
export const TOP_RATED_MOVIES = 'TOP_RATED_MOVIES';

export const setAllMovies = payload => ({
    type: SET_ALL_MOVIES,
    payload
})

export const nowPlayingMovies = payload => ({
    type: NOW_PLAYING_MOVIES,
    payload
});

export const upComingMovies = payload => ({
    type: UP_COMING_MOVIES,
    payload
});

export const topRatedMovies = payload => ({
    type: TOP_RATED_MOVIES,
    payload
});



export const setMovies = () => dispatch => (
    APIUtil.fetchAllMovies()
        .then(movies => dispatch(setAllMovies(movies)))
);

export const nowPlaying = () => dispatch => (
    APIUtil.fetchPlayingMovies()
        .then(movies => dispatch(nowPlayingMovies(movies)))
);

export const upComing = () => dispatch => (
    APIUtil.fetchUpComingMovies()
        .then(movies => dispatch(upComingMovies(movies)))
);

export const topRated = () => dispatch => {
    return (
        APIUtil.fetchTopRatedMovies()
            .then(movies => dispatch(topRatedMovies(movies)))
    )
}