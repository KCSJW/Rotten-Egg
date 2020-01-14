import { GET_MOVIE } from '../actions/search_actions';
import { RECEIVE_REVIEW, DELETE_REVIEW } from '../actions/review_actions';

const reviewsRedcer = (oldState={}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case GET_MOVIE:
            return action.payload.reviews;
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, { [action.review.id]:review });
        case DELETE_REVIEW:
            let newState = Object.assign({}, oldState);
            delete newState[action.review.id];
            return newState;
        default:
            return oldState;
    }
};

export default reviewsRedcer;