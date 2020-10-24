import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Importing pages
import PageWrapper from './Components/PageWrapper.js';
import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
import JoinUs from './Components/Pages/JoinUs.js';


class App extends Component{

  render(){
    return (
      <Router>
        <PageWrapper>
        
        <Route
        exact ={true}
        path = "/"
        component = {Home}
        />

        <Route
        exact ={true}
        path = "/about"
        component = {About}
        />

        <Route
        exact ={true}
        path = "/contact"
        component = {Contact}
        />

        <Route
        exact ={true}
        path = "/JoinUs"
        component = {JoinUs}
        />
        
        </PageWrapper>
      </Router>
      
    );
  }
}

export default App;
