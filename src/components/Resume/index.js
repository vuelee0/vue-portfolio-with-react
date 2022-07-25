import React from 'react';
import avatarImage from "../../assets/images/Avatar.png"

function Resume() {

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedi
                            t nemo commodi suscipit iste harum nulla doloremque saepe debit
                            is blanditiis rerum nisi nostrum obcaecati sapiente minus, libe
                            ro fuga quia quae autem.
                        </p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Resume;