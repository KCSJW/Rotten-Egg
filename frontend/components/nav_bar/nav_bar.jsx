import React from 'react';
import SigninContainer from "../session_form/signin_container"
import SignupContainer from '../session_form/signup_container';

const NavBar = ({currentUser, signout}) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-main">
                <h3>seach bar should be here</h3>
                <SigninContainer />
                <SignupContainer />
            </div>
        </div>
    )
}

export default NavBar;