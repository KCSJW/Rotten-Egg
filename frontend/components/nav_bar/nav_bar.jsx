import React from 'react';
import SigninContainer from "../session_form/signin_container"
import SignupContainer from '../session_form/signup_container';
import SigninStatusContainer from '../status/signin_status_container';
import SearchBar from '../search/search_container';
import ModalForm from '../modal';
import { Link } from 'react-router-dom';

const NavBar = ({modal, hideModal}) => {

    return (
        <div className="nav-bar-container">

            <div className="navbar-main">
                <div className="logo-and-search-bar-container">
                    <div className="logo-and-text">
                        <Link to="/"><img className="logo" src={window.logoImage} />
                            <div className="home-text">Rotten Egg</div>
                        </Link>
                    </div>
                    <SearchBar className='search-bar' />
                    <SigninStatusContainer />   
                </div>
                    <ModalForm modal={modal} hideModal={hideModal}
                        component={modal === 'signin' ? SigninContainer : SignupContainer} />
            </div>

            <div className="trending-bar-under-nav">
                <span className="trending-text">TRENDING MOVIES ON ROTTEN EGG! TRY CLICK ON POSTERS BELOW!</span>
            </div>

        </div>
    )
}

export default NavBar;