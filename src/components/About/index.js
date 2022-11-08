import React from 'react';
import avatarImage from "../../assets/images/Avatar.png"

function About() {

    return(
        <div>
            <section id="about-me" class="bio">
                <h2>About Me</h2>
                <article>
                    <div class="avatar">
                        <img src={avatarImage} alt="display avatar" style={{ width:"25%" }} />
                    </div>
                    <div>
                        <p>
                        Full stack web developer with a background in Technical Support.  Earned a certificate 
                        in MERN Full Stack Web Development from the University of Minnesota Coding Boot Camp.  
                        Extensive background in IT support and providing excellent service to diverse clients. 
                        </p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default About;