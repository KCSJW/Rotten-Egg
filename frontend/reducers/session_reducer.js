import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from '../actions/session_actions'

const _nullUser = {
    currentUser: null
};

const sessionReducer = (oldState = _nullUser, action ) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.currentUser
            return Object.assign({}, oldState, { currentUser });
        case SIGNOUT_CURRENT_USER:
            return oldState;
        default:
            return oldState;
    }
};

export default sessionReducer;