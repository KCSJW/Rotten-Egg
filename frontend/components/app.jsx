import React from 'react';
import Footer from './footer'
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route, Switch, Redirect } from 'react-router-dom'

const App = () => (
    <div className="main">
        <header className="app-header">
            <Switch>
                <Route exact path='/' component={NavBarContainer} />
                <Route path='*'><Redirect to='/'/></Route>
            </Switch>
        </header>

        <main>
            <h1>Main</h1>
        </main>

        <footer className="app-foot">
            <Footer />
        </footer>
    </div>
);

export default App;