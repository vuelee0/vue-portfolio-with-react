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
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>jQuery</li>
                        <li>Handlebars.js</li>
                        <li>Progressive Web Applications</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BootStrap</li>
                    </ul>
                    <br />
                    <h3>Back End</h3>
                    <ul>
                        <li>Model View Controller</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>Apollo</li>
                        <li>GraphQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Heroku</li>
                        <li>MongoDB Atlas</li>
                        <li>Object Orietned Programming</li>
                    </ul>
                    <br />
                    <h3>Collaboration</h3>
                    <ul>
                        <li>Agile</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
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