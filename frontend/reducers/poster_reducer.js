import { SET_ALL_MOVIES } from '../actions/movies_actions';

const postersReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case SET_ALL_MOVIES:
            return Object.assign({}, oldState, action.payload.results);
        default:
            return oldState;
    }
};

export default postersReducer;