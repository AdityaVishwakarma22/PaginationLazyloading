import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/PaginationLazyloading">Paginate</Link>
      <Link to="/PaginationLazyloading/lazy">Lazy Loading</Link>
    </div>
  );
}

export default Navbar;
