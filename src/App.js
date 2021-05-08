// This is the React package, required for the framework!
// import React, { useState, useEffect } from 'react';
import React from 'react';
// BrowserRouter handles routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <div className="page-container">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/portfolio" component={Projects} />
                    </Switch>
                    <Footer />
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
)

export default App;
