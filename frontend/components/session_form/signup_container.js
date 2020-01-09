import { connect } from 'react-redux';
import userForm from './user_form';
import { signup } from '../../actions/session_actions';
import { showModal, hideModal } from '../../actions/modal_actions'

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Sign Up' 
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    hideModal: () => dispatch(hideModal()),
    switchModal: () => dispatch(showModal('signin'))
});

export default connect(mSTP, mDTP)(userForm)