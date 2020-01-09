import React from 'react';

const noUser = (showModal, signin) => {
    let demo = { username: 'RottenEgg', password:'iamarotten'};
    return (
        <ul className="session-list">
            <li className="signin-status" onClick={(e) => signin(demo)}>Demo</li>
            <li className="signin-status" onClick={(e) => showModal('signup')}>Sign Up</li>
            <li className="signin-status" onClick={(e) => showModal('signin')}>Sign In</li>
        </ul>
    )
}

const hadUser = (currentUser, signout) => {(
    <ul className="session-list">
        <li className="signin-status" >{currentUser.username}</li>
        <li className="signin-status" onClick={signout}>Sign Out</li>
    </ul>
)};

const signinStatus = ({ currentUser, signout, showModal, signin }) => {
    if (currentUser) {
        return (hadUser(currentUser, signout))
    } else {
        return noUser(showModal, signin)
    }
}

export default signinStatus;