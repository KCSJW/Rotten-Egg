import { RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';
import { GET_MOVIE } from '../actions/search_actions';

const reviewErrorsReudcer = ( oldState = [], action ) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case GET_MOVIE:
            return [];
        default:
            return oldState;
    }
};

export default reviewErrorsReudcer;