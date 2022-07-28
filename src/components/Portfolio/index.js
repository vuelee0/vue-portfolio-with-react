import React from 'react';
import pokeBook from "../../assets/images/PokeBook.gif"
import photoPort from "../../assets/images/Photo Port.png"
import runBuddy from "../../assets/images/Run Buddy.png"
import pwdGenerator from "../../assets/images/Pwd Generator.png"
import tripPlanner from "../../assets/images/Trip Planner.png"
import budgetTracker from "../../assets/images/budget-tracker-SS.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Portfolio() {

    return (
        <section id="portfolio">
            <h2>Projects</h2>
            <article class="work">
                <p>*Click the image for the live deployed application*</p>
                <div class="work-projects">
                    <div>
                        <div class="github-icon">
                            <a href="https://github.com/vuelee0/PokeBook"><FontAwesomeIcon icon={faGithub} /> PokeBook</a>
                        </div>
                        <a href="https://the-poke-book.herokuapp.com/">
                        <img src={pokeBook} alt="Pokemon Social Blog" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <div class="github-icon">
                            <a href="https://github.com/vuelee0/photo-port"><FontAwesomeIcon icon={faGithub} /> Photo Port</a>
                        </div>
                        <a href="https://vuelee0.github.io/photo-port/">
                        <img src={photoPort} alt="Photo Port Portfolio" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <div class="github-icon">
                            <a href="https://github.com/vuelee0/run-buddy"><FontAwesomeIcon icon={faGithub} /> Run Buddy</a>
                        </div>
                        <a href="https://vuelee0.github.io/run-buddy/">
                        <img src={runBuddy} alt="run buddys website" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <div class="github-icon">
                            <a href="https://github.com/vuelee0/password-generator"><FontAwesomeIcon icon={faGithub} /> Password Generator</a>
                        </div>
                        <a href="https://vuelee0.github.io/password-generator/">
                        <img src={pwdGenerator} alt="password generator tool" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <div class="github-icon">
                            <a href="https://github.com/vuelee0/trip-planner"><FontAwesomeIcon icon={faGithub} /> Trip Planner</a>
                        </div>
                        <a href="https://snowlune.github.io/trip-planner/">
                        <img src={tripPlanner} alt="Plan your trip" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <div class="github-icon">
                            <a href="https://github.com/vuelee0/pwa-budget-tracker"><FontAwesomeIcon icon={faGithub} /> Budget Tracker</a>
                        </div>
                        <a href="https://ronchon-mandarine-16607.herokuapp.com/">
                        <img src={budgetTracker} alt="Track your savings and expense" class="img-thumbnail" />
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Portfolio;