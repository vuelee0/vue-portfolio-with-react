import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
        <div>
            <header>
                <h1>
                    <a href="/">Vue Lee</a>
                </h1>
            
                {/* We are passing the currentPage from state and the function to update it */}
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}

export default Header;