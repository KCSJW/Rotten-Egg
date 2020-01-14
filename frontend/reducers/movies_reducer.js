import { SET_ALL_MOVIES, NOW_PLAYING_MOVIES } from '../actions/movies_actions';

const moviesReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case SET_ALL_MOVIES:
            return Object.assign({}, oldState, action.payload.results);
        case NOW_PLAYING_MOVIES:
            return Object.assign({}, oldState, action.payload.results);
        default:
            return oldState;
    }
};

export default moviesReducer;