import NavBar from './nav_bar';
import { connect } from 'react-redux';

const mSTP = (state) => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(NavBar);