import React from 'react';

import './Welcome.css';

const Welcome = () => {
    return (
        <div className="container">
                <header>
                    <p>Welcome to our Courses</p>
                </header>
                <main>
                    <h3>Let's learn</h3>
                    <p>
                        We love sharing good knowledge with great people.
                        <br/>
                            We bring over 30 years industry experience and passion to
                            <span> </span>
                            <a style={{color: "white"}}  href="/">
                                Shubham.
                            </a>
                        <br />                        
                            satisfying training experience that you are sure to remember                        
                    </p>
                <footer>
                    <p>50 JaisreeNagar PO-Dakhineswar, Shubham & Co. - Copyright 2017©</p>
                </footer>
                </main>
            

        </div>
    )
};

export default Welcome;