import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style.css";
// import {Link} from 'react-router-dom';

function Projects() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [results, setResults] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://randomuser.me/api/?results=6');

        const results = await data.json();
        console.log(results.results);
        setResults(results.results);
    }

    return (
        <div>
            <h1>Projects Page</h1>
            {results.map(result => (
                //  <h6 key={result.login.uuid}>
                //  <Link to={`/portfolio/${result.login.uuid}`}>{result.email}</Link>
                //  </h6>
                <h6 key={result.login.uuid}>{result.email}</h6>
            ))}




            <br></br>
            {/* {projectsInfo.map(project => (
                <div key={project.name}>
                    <h3>{project.name}</h3>
                    <img src={project.picture}/>
                    <p>{project.description}</p>
                    <ul>
                        {
                            project.tools.map(tool => {
                                return (
                                    <li key={tool.toString()}>{tool}</li>
                                )
                            })
                        }
                    </ul>
                    <a href={project.deployedLink} target="_blank" rel="noreferrer noopener">View Deployed</a>
                    <br></br>
                    <a href={project.codeLink} target="_blank" rel="noreferrer noopener">View the Code</a>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            ))} */}
        </div>
    )
}

export default Projects