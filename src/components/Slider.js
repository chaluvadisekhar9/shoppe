import React, { Component } from "react";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import Carousel from 'react-bootstrap/Carousel'
import "./Slider.css";

export class Slider extends Component {
  render() {
    return (
      <div className="offset-md-1 col-md-10 px-0 mf-0 d-flex text-light mySlider">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={slider1}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={slider2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
