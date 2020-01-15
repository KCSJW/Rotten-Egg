import React from 'react';
import Footer from './footer'
import NavBarContainer from './nav_bar/nav_bar_container';
import Main from './main';

const App = () => (
    <div>
        <header className="app-header">
            <NavBarContainer /> 
        </header>

        <Main />

        <footer className="app-foot">
            <Footer />
        </footer>
    </div>
);

export default App;