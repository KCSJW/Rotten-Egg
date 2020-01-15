import { TOP_RATED_MOVIES } from '../actions/movies_actions';

const topRatedReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case TOP_RATED_MOVIES:
            return Object.assign({}, oldState, action.payload.results);
        default:
            return oldState;
    }
};

export default topRatedReducer;