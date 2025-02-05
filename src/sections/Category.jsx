import React, {useEffect} from 'react'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import cat4 from '../assets/cat4.jpg'
import cat5 from '../assets/cat5.jpg'
import aos from 'aos';
import "aos/dist/aos.css"


const Category = () => {

   useEffect(() =>{
      aos.init({
        offset:100,
        duration: 500,
        easing: 'ease-in-out',
      });
        aos.refresh();
        }, [])
  return (
    <div id='category' className=' w-full bg-grey-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center align-items-center items-center gap-20'>
      <div data-aos ="zoom-in" data-aos-delay= "50" className='lg:w-[15%] w-ful flex flex-col justify-center lg:items-start items-center gap-[20px]'> 
        <h1 className='text-themepurple text-xl font-semibold text-center' style={{color: 'purple'}}>Favorites Item</h1>
      <h1 className='text-black font-semibold text-[42px] leading-[50px] lg:text-start lg:text-center'>Popular Category</h1>
      <button className='bg-black text-white px-8 py-3 rounded-lg font-semibold mt-[60px] cursor-pointer'>VIEW ALL</button>
     
      </div>
      <div className='lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10'>
    <div data-aos= "zoom-in" data-aos-delays="100" className='flex flex-col justify-center items-center gap-6'>
      <img src={cat1} alt="" className='rounded-full cursor-pointer'/>
      <h1 className='text-black text-xl font-semibold hover:text-purple cursor-pointer'>Portable Speakers</h1>
    </div>
    <div data-aos= "zoom-in" data-aos-delays="200" className='flex flex-col justify-center items-center gap-6'>
      <img src={cat2} alt="" className='rounded-full cursor-pointer'/>
      <h1 className='text-black text-xl font-semibold hover:text-purple cursor-pointer'>Portable Speakers</h1>
    </div>
    <div data-aos= "zoom-in" data-aos-delays="300" className='flex flex-col justify-center items-center gap-6'>
      <img src={cat3} alt="" className='rounded-full cursor-pointer'/>
      <h1 className='text-black text-xl font-semibold hover:text-purple cursor-pointer'>Portable Speakers</h1>
    </div>
    <div data-aos= "zoom-in" data-aos-delays="400" className='flex flex-col justify-center items-center gap-6'>
      <img src={cat4} alt="" className='rounded-full cursor-pointer'/>
      <h1 className='text-black text-xl font-semibold hover:text-purple cursor-pointer'>Portable Speakers</h1>
    </div>
    <div data-aos= "zoom-in" data-aos-delays="500" className='flex flex-col justify-center items-center gap-6'>
      <img src={cat5} alt="" className='rounded-full cursor-pointer'/>
      <h1 className='text-black text-xl font-semibold hover:text-purple cursor-pointer'>Portable Speakers</h1>
    </div>
      </div>
    </div >
  )
}

export default Category
