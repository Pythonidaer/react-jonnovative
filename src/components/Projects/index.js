import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import projectsInfo from "../../projects";
// import Button from 'react-bootstrap/Button';
import { Button, Card } from 'react-bootstrap';

function Projects() {

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>My Projects</h1>

            {projectsInfo.map(project => (
                <Card key={project.name} style={{ width: '25rem', margin: '0 auto 2rem' }}>
                    <Card.Img src={project.picture} />
                    <Card.Body>
                        <Card.Title>
                            {project.name}
                        </Card.Title>
                        <Card.Text>
                            {project.description}
                        </Card.Text>
                        <ul>
                            {
                                project.tools.map(tool => {
                                    return (
                                        <li key={tool.toString()}>{tool}</li>
                                    )
                                })
                            }
                        </ul>
                        <Button variant="success">
                            <a href={project.deployedLink} target="_blank" rel="noreferrer noopener">View Deployed</a>
                        </Button>
                        <Button variant="danger">
                            <a href={project.codeLink} target="_blank" rel="noreferrer noopener">View the Code</a>
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Projects