import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
     <div className='relative text-white'>
  <Slider {...settings}>
    <section className='relative overflow-hidden h-screen flex justify-center items-center'>
      <img src={process.env.PUBLIC_URL + '/img/carousel1.jpeg'} />
    </section>
    <section className='relative overflow-hidden h-screen flex justify-center items-center'>
      <img src={process.env.PUBLIC_URL + '/img/carousel2.jpeg'} />
    </section>
    <section className='relative overflow-hidden h-screen flex justify-center items-center'>
      <img src={process.env.PUBLIC_URL + '/img/carousel3.jpeg'} />
    </section>
    <section className='relative overflow-hidden h-screen flex justify-center items-center'>
      <img src={process.env.PUBLIC_URL + '/img/carousel4.jpeg'} />
    </section>
  </Slider>
</div>



    </>
  )
}

export default Carousel