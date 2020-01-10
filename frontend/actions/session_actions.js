import * as ApiUtil from "../util/session_api_util";
import { hideModal } from "./modal_actions";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';

export const getCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER,
});

export const getErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signin = user => dispatch => (
    ApiUtil.sign_in(user)
        .then(user => {
            dispatch(getCurrentUser(user))
            dispatch(hideModal())
        }, 
        errors => dispatch(getErrors(errors.responseJSON)))
);

export const signup = user => dispatch => (
    ApiUtil.signup(user)
        .then(user => dispatch(getCurrentUser(user)),
            errors => dispatch(getErrors(errors.responseJSON))
        )
);

export const signout = () => dispatch => (
    ApiUtil.sign_out()
        .then(() => dispatch(signoutCurrentUser()))
);