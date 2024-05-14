import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

const Carousel = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="main-slide-1">
          <div className="container">
            <div className="slide flex">
              <div className="image">
                <img src="../img/shoes.png" alt="" />
              </div>
              <div className="content">
                <h4>custom <span>mens's</span></h4>
                <h2>running shoes</h2>
                <h5>sale up to <span>30% off</span></h5>
                <div className="btn flex">
                  <a href="#">shop now <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-slide-2">
          <div className="container">
            <div className="slide flex">
              <div className="content">
                <h4>mountain - <span>climbing</span></h4>
                <h2>hot & packback</h2>
                <h5>only until the end of this week</h5>
                <div className="btn">
                  <a href="#">shop now <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="image">
                <img src="../img/men.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="main-slide-3">
          <div className="container">
            <div className="slide flex">
              <div className="image">
                <img src="../img/skate.png" alt="" />
              </div>
              <div className="content">
                <h4>top weekly saller</h4>
                <h2>trending collection</h2>
                <h5><span>roller</span> - skate</h5>
                <div className="btn flex">
                  <a href="#">shop now <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
