import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import selfie from './selfimage.jpg'
import "./style.css";


function Home() {
    return (
        <div>
            <h1 style={{ margin: '2rem 0', textAlign: 'center' }}>Hello!! and Welcome to my React Portfolio</h1>
            <div className="container">
                <p className="p">Please excuse this garbage appearance. I am rebuilding this completely after graduation.</p>
                <p className="p">The intent of this homework assignment was to build a React portfolio. My most up to date (April) portfolio can be found on my Portfolio page.</p>
                <p className="p">In this homework, I learned how to use React Router Dom, React-Bootstrap, JSX, as well as how to map an array of objects imported into a component. To see this in action, please click the Portfolio tab.</p>
            </div>
            <section className="section selfsection topsections">
                <div className="container">
                    <div className="columns my-0">
                        <div className="column contact is-four-fifths centered-sections px-0">
                            <div className="columns is-vcentered is-mobile py-4">
                                <div className="column pr-0 py-0 selflinks">
                                    <ul className="is-flex is-flex-direction-column is-vcentered is-align-items-flex-end is-justify-content-space-between py-3">
                                        <li className="mb-3">
                                            <a href="https://github.com/Pythonidaer" target="_blank"
                                                title="View my code repositories" rel="noreferrer noopener">
                                                Github
                                        </a>
                                        </li>
                                        <li className="mb-3 mr-3">
                                            <a href="https://www.linkedin.com/in/jonamichahammo/" target="_blank"
                                                title="Click to connect" rel="noreferrer noopener">
                                                LinkedIn
                                        </a>
                                        </li>
                                        <li>
                                            <a href="https://pythonidaer.github.io/april-2021-portfolio/JonathanHammondResume.pdf" download
                                                title="Click to download pdf" rel="noreferrer noopener">
                                                Resume
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <figure className="image selfimage">
                                        <img src={selfie} className="is-rounded" alt="Sideview portrait of Jonathan Hammond" />
                                    </figure>
                                </div>
                                <div className="column pl-0 py-0 selflinks">
                                    <ul className="is-flex is-flex-direction-column is-vcentered is-align-items-flex-start is-justify-content-space-between py-3">
                                        <li className="mb-3">
                                            <a href="https://twitter.com/jonamichahammo" target="_blank"
                                                title="Twitter: @jonamichahammo" rel="noreferrer noopener">
                                                Jon Hammond
                                        </a>
                                        </li>
                                        <li className="mb-3 ml-3">
                                            <a href="mailto:codefolio.work@gmail.com?" target="_blank" subject="subject text"
                                                title="codefolio.work@gmail.com" rel="noreferrer noopener">
                                                Gmail
                                        </a>
                                        </li>
                                        <li>
                                            <a href="tel:978-854-3243" title="Cell Number" rel="noreferrer noopener">
                                                978-854-3243
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;

/* <div>
    <h1>Home Page</h1>
</div> */
