import React, { Component } from "react";
import Papulor from "./Papulor";
import Slider from "./Slider";
import '../App.css'
export class Promotions extends Component {
  render() {
    return (
      <div className="col-md-12 offset-md-1 p-0 m-0">
        <div className="offset-md-1 col-md-11 d-flex m-0 p-0">
          <div className="col-md-9 m-0 py-2">
            <Slider />
          </div>
          <div className="col-md-13 m-0 p-0">
            <Papulor />
          </div>
        </div>
      </div>
    );
  }
}

export default Promotions;
