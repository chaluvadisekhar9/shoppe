import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
         
          <div className="offset-md-1 col-md-10 py-2 d-flex text-light">
            <div className='col-md-8 d-flex p-0 m-0'>
              <button className="btn-sm btn-warning">50% OFF</button>
              <div className='text-center p-2'>
                USE COUPON CODE "BIG61" AND GET EXTRA 33% OFF ON ORDERS ABOVE RS
                2,229
              </div>
            </div>
            <div className='col-md-4 p-0 m-0'>
              <ul class="nav justify-content-end text-light">
                <li class="nav-item">
                  <a class="nav-link text-light text-uppercase" aria-current="page" href="#">
                    RecentlyViewed
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light text-uppercase" href="#">
                    Admin
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light text-uppercase" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
      
        );
    }
}

export default Banner
