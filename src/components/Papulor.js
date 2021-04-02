import React, { Component } from "react";
import gridpic1 from '../images/grid_pic1.jpg';
import gridpic2 from '../images/grid_pic2.jpg';
import gridpic3 from '../images/grid_pic3.jpg';

export class Papulor extends Component {
  render() {
    return (
      <div className='col-md-12 m-0 py-2'>
        <div className="d-flex papulor w-100">
          <img src={gridpic1} />
          <div className='px-2'>
            <h3>EXTRA 35% OFF</h3>
            <h6 className="text-uppercase">On Select Merchandise</h6>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex papulor">
          <div className='px-2'>
            <h3>CELINA UNPLUGED</h3>
            <h6 className="text-uppercase">On Select Merchandise</h6>
          </div>
          <img src={gridpic2} />
        </div>
        <hr></hr>
        <div className="d-flex papulor">
          <img src={gridpic3} />
          <div className='px-2'>
            <h3>ACTIVE GEAR STORE</h3>
            <h6 className="text-uppercase">Shop Now</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Papulor;
