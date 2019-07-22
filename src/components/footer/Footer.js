import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className="bg-footer text-white p-4 mt-5">
        <div className="ml-5">
          <div className="row">
            <h4>Space Launch Data Portal</h4>
          </div>
          <div className="row">
            <Link to="/" className="p-3 text-white">Home</Link>
            <Link to="/about" className="p-3 text-white">About</Link>
            <Link to="/contactUs" className="p-3 text-white">Contact Us</Link>
          </div>
          <div className="row">
            <a href="https://github.com/Gabrieliusv" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-white p-3"></i></a>
            <a href="https://github.com/Gabrieliusv" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f text-white p-3"></i></a>
            <a href="https://github.com/Gabrieliusv" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter text-white p-3"></i></a>
          </div>
        </div>
      </div >
    )
  }
}

export default Footer