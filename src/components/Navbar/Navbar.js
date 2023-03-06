import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
      <div className="navbar">
        <Link to="/">Paginate</Link>
        <Link to="/lazy">Lazy Loading</Link>
      </div>
  );
}

export default Navbar;
