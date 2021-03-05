import React from 'react';

import AppBar from './AppBar';
import Footer from './Footer';
import HomePage from './HomePage';

function MainContainer() {

    // TODO: App rename

    return(
        <div className="App">
            <AppBar />
            <HomePage />
            <Footer />
        </div>
    );
}

export default MainContainer;