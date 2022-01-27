import React from "react";

export default function Footer() {
  return (
    <footer className="mt-5 py-3 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 ">
            <h6 className="b_heading3">BESNIK</h6>
            <div className="des my-2 my-md-4">
              <p>
                financial transactions remotely using a mobile device such as a
                smartphone or tablet
              </p>
            </div>
            <ul className="nav social">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 ">
            <h6 className="b_heading6 mt-md-3 ms-3">Besnik</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Terms of use
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Privacy policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 ">
            <h6 className="b_heading6 mt-md-3 ms-3">Support</h6>
            <ul className="nav flex-column ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Support Carrer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  24hr Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quick Chat
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 ">
            <h6 className="b_heading6 mt-md-3 ms-3">Contact</h6>
            <ul className="nav flex-column ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                WhatsApp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support 24 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
