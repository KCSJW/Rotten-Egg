import React from 'react';
import Footer from './footer'
import NavBar from './nav_bar/nav_bar';


const App = ({ modal, hideModal }) => (
    <div className="main">
        <header className="app-header">
            <NavBar />
        </header>

        <h1>Main space</h1>

        <footer className="app-foot">
            <Footer />
        </footer>
    </div>
);

export default App;