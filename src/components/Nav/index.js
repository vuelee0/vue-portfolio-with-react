import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#about" onClick={() => handlePageChange('About')} 
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About
                </a>
            </li>
            <li className="nav-item">
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a href="#contact-me" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact Me
                </a>
            </li>
            <li className="nav-item">
                <a href="#resume" onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Nav;


// function Nav() {

//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <a href="#about-me">About Me</a>
//                 </li>
//                 <li>
//                     <a href="#portfolio">Portfolio</a>
//                 </li>
//                 <li>
//                     <a href="#contact-me">Contact Me</a>
//                 </li>
//                 <li>
//                     <a href="#resume">Resume</a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default Nav;