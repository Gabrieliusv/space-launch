import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Home from './components/pages/Home'
import History from './components/pages/History'
import Search from './components/pages/Search'
import Footer from './components/footer/Footer'
import ISS from './components/pages/ISS'
import About from './components/pages/About'
import ContactUs from './components/pages/ContactUs'

class App extends Component {
  
  render() {
    return (
      
      <HashRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component = {Home} />
        <Route path='/history' component = {History} />
        <Route path='/search' component = {Search} />
        <Route path='/ISS' component = {ISS} />
        <Route path='/about' component = {About} />
        <Route path='/contactUs' component = {ContactUs} />
      </div>
      <Footer />
      </HashRouter>
      
    );
  }
}

export default App;
