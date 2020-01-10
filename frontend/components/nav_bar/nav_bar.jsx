import React from 'react';
import SigninContainer from "../session_form/signin_container"
import SignupContainer from '../session_form/signup_container';
import SigninStatusContainer from '../status/signin_status_container';
import ModalForm from '../modal';

const NavBar = ({modal, hideModal}) => {

    return (
        <div className="navbar-main">
            <SigninStatusContainer />
            <ModalForm 
                component={ modal === 'signin' ? SigninContainer : SignupContainer}
                modal={modal}
                hideModal={hideModal}
            />
        </div>
    )
}

export default NavBar;