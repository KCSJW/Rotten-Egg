import React from 'react';
 
const noUser = (showModal) => {
    return (
        <ul className="session-list">
            <li className="signin-status" onClick={(e) => showModal('signup')}>Sign Up</li>
            <li> | </li>
            <li className="signin-status" onClick={(e) => showModal('signin')}>Sign In</li>
        </ul>
    )
}

const hadUser = (currentUser, signout) => {
    return(
        <ul className="session-list">
            <li className="signin-icon"> <img src={window.demoImage} /> </li>
            <li className="signin-status" >{currentUser.username}</li>
            <li> | </li>
            <li className="signin-status" onClick={signout}>Sign Out</li>
        </ul>
    )
}

const signinStatus = ({ currentUser, signout, showModal, signin }) => {
    if (currentUser && currentUser.id) {
        return (hadUser(currentUser, signout))
    } else {
        return noUser(showModal, signin)
    };
};

export default signinStatus;