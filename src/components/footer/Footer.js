import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Footer extends Component {
  render() {
    return (
      <div className="bg-footer static-bottom text-white p-4 mt-5">
        <div className="ml-5">
        <div className="row">
        <h4>Launch Data Portal</h4>
        </div>
        <div className="row">
        <Link to="/" className="p-3 text-white">Home</Link>
        <Link to="/about" className="p-3 text-white">About</Link>
        <Link to="/contactUs" className="p-3 text-white">Contact Us</Link>
        </div>
        <div className="row">
        <a href="https://github.com/Gabrieliusv" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-white p-3"></i></a><i className="fab fa-facebook-f p-3"></i> <i className="fab fa-twitter p-3"></i>
        </div>
        </div>
      </div>
    )
  }
}

export default Footer