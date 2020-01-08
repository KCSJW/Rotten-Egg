import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
    return {
    signedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
    };
}

const mDTP = dispatch => ({
    signin: user => dispatch(signin(user)),
    getErrors: errors => dispatch(getErrors(errors))
});

export default connect(mSTP, mDTP)(SessionForm);