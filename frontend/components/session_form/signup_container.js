import { connect } from 'react-redux';
import sessionForm from './session_form'
import { signup, getErrors } from '../../actions/session_actions';
import { showModal, hideModal } from '../../actions/modal_actions'

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Sign Up' 
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    getErrors: errors => dispatch(getErrors(errors)),
    hideModal: () => dispatch(hideModal()),
    switchModal: () => dispatch(showModal('signin'))
});

export default connect(mSTP, mDTP)(sessionForm)