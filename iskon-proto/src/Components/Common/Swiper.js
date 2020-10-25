import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slickdemo.css";

import new1 from "./new1.jpg";
import new2 from "./new2.jpg";

export class SlickDemo extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        {/* <div class='container' >        
            <div className="row title" style={{marginBottom: "20px"}} >        
            <div class="col-sm-12 btn btn-info">        
            Feel Tranquality !
            </div>        
            </div>    
            </div>   */}
        <Slider {...settings}>
          <div className="wdt">
            <img className="img" src={new1} className="img" alt="" />
          </div>
          <div className="wdt">
            <img style={{ height: "40px" }} src={new2} className="img" alt="" />
          </div>
          <div className="wdt">
            <img className="img" src={"assets/w2.jpg"} className="img" alt="" />
          </div>
          <div className="wdt">
            <img className="img" src={"assets/w2.jpg"} className="img" alt="" />
          </div>
          <div className="wdt">
            <img className="img" src={"assets/w2.jpg"} className="img" alt="" />
          </div>
          <div className="wdt">
            <img className="img" src={"assets/w2.jpg"} className="img" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlickDemo;
