import React, { Component } from "react";
import { Nav } from "react-bootstrap";
export class Footernav extends Component {
  render() {
    return (
      <div className="row">
        <div className="offset-md-1 col-md-11 py-4 d-flex">
          <div className="col-md-3">
            <h4>Shop</h4>
            <hr />
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">New Arrivals</Nav.Link>
              <Nav.Link eventKey="link-1">Men</Nav.Link>
              <Nav.Link eventKey="link-2">Women</Nav.Link>
              <Nav.Link eventKey="link-2">Accesories</Nav.Link>
              <Nav.Link eventKey="link-2">Kids</Nav.Link>
              <Nav.Link eventKey="link-2">Brands</Nav.Link>
              <Nav.Link eventKey="link-2">Trends</Nav.Link>
              <Nav.Link eventKey="link-2">Sale</Nav.Link>
            </Nav>
          </div>
          <div className="col-md-3">
            <h4>Help</h4>
            <hr />
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Frequently asked questions</Nav.Link>
              <Nav.Link eventKey="link-1">Men</Nav.Link>
              <Nav.Link eventKey="link-2">Women</Nav.Link>
              <Nav.Link eventKey="link-2">Accesories</Nav.Link>
              <Nav.Link eventKey="link-2">Kids</Nav.Link>
              <Nav.Link eventKey="link-2">Brands</Nav.Link>
              <Nav.Link eventKey="link-2">Trends</Nav.Link>
              <Nav.Link eventKey="link-2">Sale</Nav.Link>
            </Nav>
            <h4>Company Name</h4>
            <hr></hr>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Frequently asked questions</Nav.Link>
              <Nav.Link eventKey="link-1">Men</Nav.Link>
              <Nav.Link eventKey="link-2">Women</Nav.Link>
              <Nav.Link eventKey="link-2">Accesories</Nav.Link>
              <Nav.Link eventKey="link-2">Kids</Nav.Link>
              <Nav.Link eventKey="link-2">Brands</Nav.Link>
            </Nav>
          </div>
          <div className="col-md-3">
            <h4>Account</h4>
            <hr />
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Login</Nav.Link>
              <Nav.Link eventKey="link-1">Create an Account</Nav.Link>
              <Nav.Link eventKey="link-2">Creat Wishlist</Nav.Link>
              <Nav.Link eventKey="link-2">My Shoping Bag</Nav.Link>
              <Nav.Link eventKey="link-2">Brands</Nav.Link>
              <Nav.Link eventKey="link-2">Create Wishlist</Nav.Link>
            </Nav>
            <h4>Style Zone</h4>
            <hr></hr>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Frequently asked questions</Nav.Link>
              <Nav.Link eventKey="link-1">Men</Nav.Link>
              <Nav.Link eventKey="link-2">Women</Nav.Link>
              <Nav.Link eventKey="link-2">Accesories</Nav.Link>
              <Nav.Link eventKey="link-2">Kids</Nav.Link>
              <Nav.Link eventKey="link-2">Brands</Nav.Link>
            </Nav>
          </div>
          <div className="col-md-3">
            <h4>Papulor</h4>
            <hr />
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">New Arrivals</Nav.Link>
              <Nav.Link eventKey="link-1">Men</Nav.Link>
              <Nav.Link eventKey="link-2">Women</Nav.Link>
              <Nav.Link eventKey="link-2">Accesories</Nav.Link>
              <Nav.Link eventKey="link-2">Kids</Nav.Link>
              <Nav.Link eventKey="link-2">Brands</Nav.Link>
              <Nav.Link eventKey="link-2">Trends</Nav.Link>
              <Nav.Link eventKey="link-2">Sale</Nav.Link>
              <Nav.Link eventKey="link-2">Login</Nav.Link>

            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Footernav;
