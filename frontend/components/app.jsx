import React from 'react';
import Footer from './footer'
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
    <div className="main">
        <header className="app-header">
            <NavBarContainer />
        </header>

        <h1>Main space</h1>

        <footer className="app-foot">
            <Footer />
        </footer>
    </div>
);

export default App;