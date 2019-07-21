import React from 'react'
import { NavLink } from 'react-router-dom'

 const Navbar = () => {
  
    return (
      <div>
     <nav className="nav-b sticky-top bg-white navbar navbar-expand-lg">
  <NavLink to="/" className="navbar-brand mr-5 ml-5 custom-c">Launched</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars custom-c"></i>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink to="/" className="nav-item nav-link m-2 custom-c">Home</NavLink>
      <NavLink to="/history" className="nav-item nav-link m-2 custom-c">History</NavLink>
      <NavLink to="/search" className="nav-item nav-link m-2 custom-c">Search </NavLink>
      <NavLink to="/ISS" className="nav-item nav-link m-2 custom-c">International Space Station </NavLink>
    </div>
  </div>
</nav>
      </div>
    )
  
}
export default Navbar