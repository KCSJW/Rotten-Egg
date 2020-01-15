import { GET_ALL_MOVIES, GET_MOVIE } from '../actions/search_actions'

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case GET_ALL_MOVIES:
            return action.movies;
        case GET_MOVIE:
            return Object.assign({}, oldState, { [action.payload.id]: action.payload })
        default:
            return oldState;
    }
};

export default searchReducer;