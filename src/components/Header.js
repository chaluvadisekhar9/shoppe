import React, { Component } from 'react';
import { FaHeart } from 'react-icons/fa';
import {GiShoppingCart} from 'react-icons/gi';
import {AiOutlineSearch} from 'react-icons/ai';
import '../App.css';
const titleColor = {
  color:  '#00405d'
} 

export class Header extends Component {
    render() {
        return (
          <div className="offset-md-1 col-md-10 px-0 mf-0 py-5 d-flex text-light">
            <div className="col-md-4 d-flex p-0 m-0">
              <h1
                className="d-flex align-items-center text-uppercase text-dark pl-2"
                style={titleColor}
              >
                MySHOPPE
              </h1>
            </div>
            <div className="col-md-8 p-0 m-0">
              <ul className="nav d-flex justify-content-end align-items-center">
                <li className="nav-item d-flex w-40 h-100">
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                  <span className="input-group-text" id="basic-addon1">
                    <AiOutlineSearch size={25} color="darkgrey" />
                  </span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FaHeart size={25} color="darkgrey" />
                  </a>
                </li>
                <li className="nav-item border-1">
                  <a className="nav-link" href="#">
                    <GiShoppingCart size={25} color="darkgrey" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button type="text" className="btn-lg btn-warning">
                      Create Account
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          
        );
    }
}
export default Header

