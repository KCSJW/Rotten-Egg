import React from 'react';
import Footer from './footer'
import NavBarContainer from './nav_bar/nav_bar_container';
import MoviesIndexContainer from './movies/movies_index_container';
import NowPlayingContainer from './movies/now_playing_container';
import { Route, Switch, Redirect } from 'react-router-dom'

const App = () => (
    <div className="main">
        <header className="app-header">
                <Route path='/' component={NavBarContainer} /> 
        </header>

        <main>
            <Switch>
                <Route path='/movies/:movieId' />
                <Route exact path='/' />
                <Route path='*'><Redirect to='/'/></Route>
            </Switch>
            <MoviesIndexContainer />
            <NowPlayingContainer />
        </main>

        <footer className="app-foot">
            <Footer />
        </footer>
    </div>
);

export default App;