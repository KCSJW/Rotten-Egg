import { connect } from 'react-redux';
import { showModal } from '../../actions/modal_actions';
import { signin, signout } from '../../actions/session_actions';
import signinStatus from './signin_status';

const mSTP = state => ({
    currentUser: state.session.currentUser
});

const mDTP = dispatch => ({
    signin: user => dispatch(signin(user)),
    signout: () => dispatch(signout()),
    showModal: (modal) => dispatch(showModal(modal))
});

export default connect(mSTP, mDTP)(signinStatus)