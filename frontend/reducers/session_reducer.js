import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const _nullUser = {
    currentUser: null
};

const SessionReducer = (oldState = _nullUser, action ) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.currentUser
            return Object.assign({}, state, { currentUser });
        default:
            return oldState;
    }
};

export default SessionReducer;