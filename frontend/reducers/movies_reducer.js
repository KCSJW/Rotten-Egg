import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../actions/movies_action';

const moviesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_MOVIES:    
            return action.movies;
        case RECEIVE_MOVIE:
            return Object.assign({},oldState, {[action.payload.id]: action.payload.movie})
        default:
            return oldState;
    }
};

export default moviesReducer;