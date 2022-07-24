import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
        
    return (
        <footer>
            <div>
                <a href="https://github.com/vuelee0"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div>
                <a href="www.linkedin.com/in/vue-lee-6193242b"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <div>
            <a href="https://stackoverflow.com/users/18237109/vlee"><FontAwesomeIcon icon={faStackOverflow} /></a>
            </div>
        </footer>
    )
}

export default Footer;