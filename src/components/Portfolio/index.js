import React from 'react';
import pokeBook from "../../assets/images/PokeBook.gif"
import photoPort from "../../assets/images/Photo Port.png"
import runBuddy from "../../assets/images/Run Buddy.png"
import pwdGenerator from "../../assets/images/Pwd Generator.png"
import tripPlanner from "../../assets/images/Trip Planner.png"
import budgetTracker from "../../assets/images/budget-tracker-SS.png"

function Portfolio() {

    return (
        <section id="portfolio">
            <h2>Projects</h2>
            <article class="work">
                <div class="work-projects">
                    <div>
                        <a href="https://the-poke-book.herokuapp.com/"><h3>PokeBook</h3>
                        <img src={pokeBook} alt="Pokemon Social Blog" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <a href="https://vuelee0.github.io/photo-port/"><h3>Photo Port</h3>
                        <img src={photoPort} alt="Photo Port Portfolio" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <a href="https://vuelee0.github.io/run-buddy/"><h3>Run Buddy</h3><br/>
                        <img src={runBuddy} alt="run buddys website" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <a href="https://vuelee0.github.io/password-generator/"><h3>Password Generator</h3><br/>
                        <img src={pwdGenerator} alt="password generator tool" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <a href="https://snowlune.github.io/trip-planner/"><h3>Trip Planner</h3><br/>
                        <img src={tripPlanner} alt="Plan your trip" class="img-thumbnail" />
                        </a>
                    </div>
                    <div>
                        <a href="https://ronchon-mandarine-16607.herokuapp.com/"><h3>Budget Tracker</h3><br/>
                        <img src={budgetTracker} alt="Track your savings and expense" class="img-thumbnail" />
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Portfolio;