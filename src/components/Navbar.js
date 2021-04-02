import React, { Component } from "react";
import './navbar.css';
export class Navbar extends Component {
  render() {
    return (
      <div className="offset-md-1 col-md-10 px-0 mf-0 d-flex text-light">
        <nav className="navbar navbar-expand-lg navbar-light p-0 m-0 col-md-12">
          
              <ul className="col-md-12 navbar-nav p-0 text-uppercase">
                <li className="nav-item listItem">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item listItem">
                  <a className="nav-link" href="#">
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item listItem">
                  <a className="nav-link" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item listItem">
                  <a className="nav-link" href="#">
                    Accesories 
                  </a>
                </li>
                <li className="nav-item listItem">
                  <a className="nav-link" href="#">
                    Kids
                  </a>
                </li>
                <li className="nav-item listItem">
                  <a className="nav-link" href="#">
                    Brands
                  </a>
                </li>
                <li className="nav-item listItem">
                  <a className="nav-link" href="#">
                    Trends
                  </a>
                </li>
                <li className="nav-item listItem">
                  <a className="nav-link" href="#">
                    Sale
                  </a>
                </li>
                <li className="nav-item listItem">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
        <hr></hr>
        </nav>
      </div>
    );
  }
}

export default Navbar;
