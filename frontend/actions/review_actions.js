import * as APIUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const DELETE_REVIEW = 'DELETE_REVIEW'

export const getReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const getErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const delReview = review => ({
    type: DELETE_REVIEW,
    review
});

export const createReview = review => dispatch => (
    APIUtil.createReview(review)
        .then(
            review => dispatch(getReview(review)),
            errors => dispatch(getErrors(errors.responseJSON))
        )
);

export const updateReview = review => dispatch (
    APIUtil.updateReview(review)
        .then(
            review => dispatch(getReview(review)),
            errors => dispatch(getErrors(errors.responseJSON))
        )
);

export const deleteReview = review => dispatch => (
    APIUtil.deleteReview(review.id)
        .then(() => dispatch(delReview(review)))
);