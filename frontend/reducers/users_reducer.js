import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const UserReucer = (oldState = {}, action) => {

    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER:
            let nextState = Object.assign({}, oldState[action.user.id], action.user)
            return Object.assign({}, oldState, { [action.user.id]: nextState})
        default:
            return oldState;
    }
};

export default UserReucer;