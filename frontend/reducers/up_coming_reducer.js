import { UP_COMING_MOVIES } from '../actions/movies_actions';

const upComingReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case UP_COMING_MOVIES:
            return Object.assign({}, oldState, action.payload.results);
        default:
            return oldState;
    }
};

export default upComingReducer;