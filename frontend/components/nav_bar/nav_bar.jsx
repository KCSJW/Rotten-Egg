import React from 'react';
import SigninContainer from "../session_form/signin_container"
import SignupContainer from '../session_form/signup_container';
import SigninStatusContainer from '../status/signin_status_container';
import ModalForm from '../modal';
import { Link } from 'react-router-dom';

const NavBar = ({modal, hideModal}) => {

    return (
        <div className="nav-bar-container">
            <div className="navbar-main">
                <div className="logo-and-search-bar-container">
                    <Link to="/"> <img className="logo" src={window.logoImage} /></Link>
                    <SigninStatusContainer />   
                </div>
                    <ModalForm 
                        component={ modal === 'signin' ? SigninContainer : SignupContainer}
                        modal={modal}
                        hideModal={hideModal}/>
            </div>

            <div className="trending-bar-under-nav">
                <div className="trending-text">TRENDING NEWS:</div>
                <a href="https://editorial.rottentomatoes.com/article/awards-leaderboard-top-movies-of-2019/" className="trending-show">AWARDS LEADERBOARD</a>
                <a href="https://editorial.rottentomatoes.com/guide/the-200-best-movies-of-the-2010s/" className="trending-show">THE 200 BEST MOVIES OF THE 2010S</a>
                <a href="https://editorial.rottentomatoes.com/article/most-anticipated-movies-of-2020/" className="trending-show">2020's Most Anticipated Movies</a>
                <a href="https://github.com/KCSJW" className="trending-icon" target="_blank"><img src={githubImage} /></a>
            </div>

        </div>
    )
}

export default NavBar;