import { connect } from 'react-redux';
import { signin, getErrors } from '../../actions/session_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import sessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Sign In'
});

const mDTP = dispatch => ({
    action: user => dispatch(signin(user)),
    getErrors: errors => dispatch(getErrors(errors)),
    hideModal: () => dispatch(hideModal()),
    switchModal: () => dispatch(showModal('signup'))
});

export default connect(mSTP, mDTP)(sessionForm);