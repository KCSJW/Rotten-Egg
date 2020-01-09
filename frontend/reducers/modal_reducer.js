import { HIDE_MODAL, SHOW_MODAL } from '../actions/modal_actions';

const modalReducer = (oldState = null, action) => {
    
    Object.freeze(oldState);
    
    switch (action.type) {
        case SHOW_MODAL:
            return action.modal;
        case HIDE_MODAL:
            return null;
        default:
            return oldState;
    }
};

export default modalReducer;
