import React, { useState } from "react";
import Slider from "react-slick";


const Products = () => {
    const [settings, setSettings] = useState({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    
  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item}>
            <h3>{item}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
