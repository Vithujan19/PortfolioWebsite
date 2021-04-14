import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,Route,
} from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Article from './components/Article';
import Contact from './components/Contact';
import Footer from './components/layouts/Footer';

// import About from './components/About';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Article/>
      <Contact/>
      <Footer/>
      <Route exact path="/"/>
      {/* <Route path="/add-receipt" component={About}/> */}
    </div>
    </Router>
  );
}

export default App;
