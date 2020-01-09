import NavBar from './nav_bar';

const mSTP = ({ ui: { modal } }) => ({
    modal: modal
});

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(NavBar);