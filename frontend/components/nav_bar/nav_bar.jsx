import React from 'react';
import SigninContainer from "../session_form/signin_container"
import SignupContainer from '../session_form/signup_container';
import SigninStatusContainer from '../status/signin_status_container';
import ModalPart from '../modal';

const NavBar = ({modal, hideModal, formType}) => {

    return (
        <div className="navbar-main">
            <SigninStatusContainer />
            <ModalPart 
                component={ formType === 'Sign In' ? SigninContainer : SignupContainer}
                modal={modal}
                hideModal={hideModal}
            />
        </div>
    )
}

export default NavBar;

// <Switch>
//     <AuthRoute exact path='/signin' component={SigninContainer} />
//     <AuthRoute exact path='/signup' component={SignupContainer} />
//     <Redirect to='/' />
// </Switch>



// <div className="session-form-footer">
//     <p>New user?</p>
//     <p className="session-form-modal-switch" onClick={() => this.props.switchModal()}>Sign Up here!</p>
// </div>
// <div className="session-form-footer">
//     <p>Have an account?</p>
//     <p className="session-form-modal-switch" onClick={() => this.props.switchModal()}>Sign In here!</p>
// </div>