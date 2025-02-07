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
    <div id='hero' className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
      <Slider className='w-full' {...settings}>
        <div>

          <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 
          bg-cover bg-center' style={{backgroundImage: `url(${dslr})`}}>
    <h1 data-aos = "zoom-in" data-aos-delay= "50" 
    className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl' style={{color: 'yellow'}}>Get up to 80% Discounts</h1>
    <h1 data-aos = "zoom-in" data-aos-delay= "100" className='text-white lg: txt-[120px] text-[60px]
     uppercase font-bold lg:leading-[120px] leading-[70px]'>DSLR 360 <br />Camera</h1>
          <h1 data-aos = "zoom-in" data-aos-delay= "100"
          className='text-white text-2xl'
          >100% Trustes <span
          className='text-yellow font-semibold' style={{color: 'yellow'}}>Electronics Gadgets</span></h1>
          <button className="bg-themeyellow cursor-pointer px-6 py-3 rounded-lg text-black font-semibold " style={{background: 'yellow'}} data-aos = "zoom-in" data-aos-delay= "100">ONLINE COLLECTIONS</button>
          </div>
        </div>
        <div>

          <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 
          bg-cover bg-center' style={{backgroundImage: `url(${earbuds})`}}>
    <h1 data-aos = "zoom-in" data-aos-delay= "50" 
    className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl' style={{color: 'yellow'}}>Get up to 80% Discounts</h1>
    <h1 data-aos = "zoom-in" data-aos-delay= "100" className='text-white lg: txt-[120px] text-[60px]
     uppercase font-bold lg:leading-[120px] leading- [70px]'>Wireless <br />Earbuds</h1>
          <h1 data-aos = "zoom-in" data-aos-delay= "100"
          className='text-white text-2x1'
          >100% Trustes <span
          className='text-yellow font-semibold' style={{color: "yellow"}}>Electronics Gadgets</span></h1>
          <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold" style={{background: 'yellow'}} data-aos = "zoom-in" data-aos-delay= "100">ONLINE COLLECTIONS</button>
          </div>
        </div>
        <div>

          <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 
          bg-cover bg-center' style={{backgroundImage: `url(${headset})`}}>
    <h1 data-aos = "zoom-in" data-aos-delay= "50" 
    className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl' style={{color: 'yellow'}}>Get up to 80% Discounts</h1>
    <h1 data-aos = "zoom-in" data-aos-delay= "100" className='text-white lg: txt-[120px] text-[60px]
     uppercase font-bold lg:leading-[120px] leading- [70px]'>Hi definition <br />headsets</h1>
          <h1 data-aos = "zoom-in" data-aos-delay= "100"
          className='text-white text-2x1'
          >100% Trustes <span
          className='text-yellow font-semibold' style={{color: 'yellow'}}>Electronics Gadgets</span></h1>
          <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold" style={{background: 'yellow'}} data-aos = "zoom-in" data-aos-delay= "100">ONLINE COLLECTIONS</button>
          </div>
        </div>
        </Slider>
        </div>
  )
}

export default Hero;
