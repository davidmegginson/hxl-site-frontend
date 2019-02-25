import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
  constructor() {
    super();
    this.isMobile = false;
  }

  componentDidMount() {
    this.isMobile = window.innerWidth > 767 ? false : true;
  }

  render() {
    let settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      responsive: this.props.responsive,
      centerMode: this.isMobile
    };
    
    return (
      <div className='carousel-container'>
        <Slider {...settings}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}

export default Carousel