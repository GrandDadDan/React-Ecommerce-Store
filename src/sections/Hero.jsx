import React, { useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg";
import earbuds from "../assets/earbuds.jpg";
import dslr from "../assets/dslr.jpg";
import Aos from 'aos';
import "aos/dist/aos.css"

const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL: false
  };

  useEffect(() =>{
    Aos.init({
      offset:100,
      duration: 500,
      easing: 'ease-in-out',
    });

    Aos.refresh();
  }, [])
  return (
    <div id>Hero</div>
  )
}

export default Hero;
