import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import book from '../assets/book.jpg'

import list from '../../public/list.json'

const Freebooks = () => {
   const filterdata=list.filter((data)=>data.category === 'Free');

   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  };
  return (
   <>
    <div className='Freebooks max-w-screen-2*1 container mx-auto md-px-20 px-4'>
      <h1>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, recusandae corrupti ipsa quasi praesentium eum maxime odio voluptatum similique reprehenderit molestias dignissimos, deleniti ab voluptates error commodi mollitia laboriosam!</p>
     <div>
       
     <Slider {...settings}>
        {filterdata.map((item)=>{
         return  <Cards item={item} key={item.id}/>
        })}
        </Slider>
     </div>
      </div>
   </>
  )
}

export default Freebooks
