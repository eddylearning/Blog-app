import React from 'react';
import { Link } from 'react-router-dom';


const Navbar= ()=>{
return (
    <nav className="navbar">
      <h1>My Blog</h1>
      <div className="links">
         
        <Link to="/">Home</Link>
         <Link to="/About">About</Link> 
        <Link to="/Create">Create</Link>
        <Link to="/Blog-details/:id">BlogDetails</Link>
      </div>
    </nav>
  );
}
export default Navbar;