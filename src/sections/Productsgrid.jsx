import React, {useEffect} from 'react'
import { FaStar, FaRegHeart } from 'react-icons/fa'
import { MdAddShoppingCart,MdOutlineRemoveRedEye } from 'react-icons/md'
import Aos from 'aos';
import "aos/dist/aos.css"
import { products } from '../export';
import "tailwindcss";
const eyeIcon = {
  backgroundColor: "rgb(80,46,198)",
  

}
const ProductsGrid = () => {

  useEffect(() =>{
      Aos.init({
        offset:100,
        duration: 500,
        easing: 'ease-in-out',
      });
  
      Aos.refresh();
    }, [])

  return (
    
    <div id='products' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col
    justify-center items-center gap-4'>
      
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-black text-xl font-semibold' style={{color:"#502ec3"}}>Browse Collections</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black
      font-semibold text-[40px] leading-[50px] text-center'>Trending Products</h1>
    <div data-aos="zoom-in" data-aos-delay="300" className='w-full grid lg:grid-cols-4
    grid-cols-1 justify-center items-center gap-10 mt-10'>
      {
        products.map((item,index) =>(
          <div id='product-box' key={index} className='flex flex-col
          justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative'>
            <img src={item.img} alt="" />
            <div id='icons' className='flex justify-center items-center gap-3 absolute top-[20px]'>
              <div style={eyeIcon} className='text-white rounded-full p-3'  >  
                <MdOutlineRemoveRedEye />
              </div>
              <div style={eyeIcon} className='text-white rounded-full p-3'  >  
                <FaRegHeart />
              </div>
              <div style={eyeIcon} className='text-white rounded-full p-3'  >  
                <MdAddShoppingCart />
              </div>
            </div>
            <h1 className='text-lg text-gray-400 font-semibold'>{item.category}</h1>
            <h1 className='text-xl text-black font-bold'>{item.name}</h1>
            <h1 className='text-lg font-semibold' style={{color:"#502ec3"}}>{item.price}</h1>
            <div className='w-full mt-2'>
              <hr />
              <div className='flex justify-between items-center gap-6 mt-3'>
                <div className='flex justify-start items-center gap-1'>
                  <FaStar style={{color:"#502ec3"}} />
                  <FaStar style={{color:"#502ec3"}} />
                  <FaStar style={{color:"#502ec3"}} />
                  <FaStar style={{color:"#502ec3"}} />
                  <FaStar style={{color:"#502ec3"}} />
                </div>
                <button className='bg-green-500 text-white px-4 py-2 rounded-lg
                text-[13px] font-semibold cursor-pointer'>SALE 14%</button>
              </div>
            </div>
          </div>
        ))
      }

    </div>
    <button data-aos="zoom-in" data-aos-delay="400" className='text-white cursor-pointer font-semibold px-8 py-3 rounded-lg mt-8' style={{background:"#502ec3"}}>VIEW MORE</button>
    </div>
  )
}

export default ProductsGrid
