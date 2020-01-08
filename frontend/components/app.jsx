import React from 'react';
import Footer from './footer'
import NavBar from './nav_bar/nav_bar';

const App = () => (
    <div className="main">
        <header className="main-header">
            <NavBar />
        </header>

        <h1>Main space</h1>

        <footer className="main-foot">
            <Footer />
        </footer>
    </div>
);

export default App;