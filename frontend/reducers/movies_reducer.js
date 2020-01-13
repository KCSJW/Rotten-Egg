import { GET_ALL_MOVIES, GET_MOVIE, SET_ALL_MOVIES } from '../actions/movies_action';

const moviesReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case GET_ALL_MOVIES:    
            return Object.assign({}, oldState, action.original_title);
        case SET_ALL_MOVIES:
            // console.log(Object.assign({}, oldState, action.payload.results))
            return Object.assign({}, oldState, action.payload.results);
        case GET_MOVIE:
            return Object.assign({},oldState, {[action.payload.id]: action.payload.movie})
        default:
            return oldState;
    }
};

export default moviesReducer;