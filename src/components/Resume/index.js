import React from 'react';

function Resume() {

    return(
        <div>
            <section>
                <h2>Resume</h2>
                <article>
                    <h1>Proficiencies</h1>
                    <br />
                    <h3>Front End</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <br />
                    <h3>Back End</h3>
                    <ul>
                        <li>ExpressJS</li>
                        <li>NodeJS</li>
                    </ul>
                    <br />
                    <h3>Databases</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                    <br />
                    <div>
                        <a href={require("../../assets/resume.pdf")} download className="download">Download Resume</a>
                    </div>
                    </article>
            </section>
        </div>
    )
}

export default Resume;