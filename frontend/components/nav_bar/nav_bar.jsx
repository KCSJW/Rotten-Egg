import React from 'react';
import SigninContainer from "../session_form/signin_container"
import SignupContainer from '../session_form/signup_container';
import SigninStatusContainer from '../status/signin_status_container';
import SearchBar from '../search/search_container';
import ModalForm from '../modal';
import { Link, Redirect } from 'react-router-dom';

const NavBar = ({modal, hideModal}) => {

    return (
        <div className="nav-bar-container">
            <div className="navbar-main">
                <div className="logo-and-search-bar-container">
                    <Link to="/"> <img className="logo" src={window.logoImage} /></Link>
                    <SearchBar className='search-bar' />
                    <SigninStatusContainer />   
                </div>
                    <ModalForm 
                        component={ modal === 'signin' ? SigninContainer : SignupContainer}
                        modal={modal}
                        hideModal={hideModal}/>
            </div>

            <div className="trending-bar-under-nav">
                <span className="trending-text">TRENDING MOVIES:</span>
                <Link to='movies/210' className="trending-link">Star Wars: The Rise of Skywalker</Link>
                <Link to='movies/194' className="trending-link">The Dark Knight</Link>
                <Link to='movies/202' className="trending-link">Joker </Link>
                <Link to='movies/193' className="trending-link">Cats </Link>
            </div>

        </div>
    )
}

export default NavBar;