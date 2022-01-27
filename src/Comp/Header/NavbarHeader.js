import React, { useState } from "react";
import { Link } from "react-router-dom";



function NavbarHeader() {
            const [headerPo, setHeaderPo]=useState(false)
  window.addEventListener("scroll",(e)=>{
   if(window.scrollY>80){
      setHeaderPo(true)
   }else{
    setHeaderPo(false)
   }
  })
  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top bg-white py-3 ${headerPo?"shadow":""}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          BESNIK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Pricing
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
              Contact
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
             About
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-1">
              <Link to={"/login"}  className="nav-link text-dark fw-bold "    >
                Login
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"/register"}   className="nav-link btn border-0 btn-sm px-3 text-white b_signup" >
                Signup
              </Link>
            </li>
         
          </ul>

        </div>
      </div>
    </nav>
  );
}



export default NavbarHeader