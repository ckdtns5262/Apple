import React, {useRef, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsPlayCircle, BsPauseCircle} from 'react-icons/bs'

const Carousel = () => {

  const sliderRef = useRef(null)

  const play = () => {
    sliderRef.current.slickPlay()
    setChangePlay(false)
  }
  const pause = () => {
    sliderRef.current.slickPause();
    setChangePlay(true)
  }
  const [changePlay, setChangePlay] = useState(false)

  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear"
  };
  return (
    <>
      <div className="relative text-white m-10">
        <Slider ref={sliderRef}{...settings}>
          <section className="relative ">
            <img
              src={process.env.PUBLIC_URL + "/img/carousel1.jpeg"}
              className="w-[100%] h-screen object-fill items-center justify-center overflow-hidden"
              alt="캐러쉘1"
            />
          </section>
          <section className="relative">
            <img
              src={process.env.PUBLIC_URL + "/img/carousel2.jpeg"}
              className="w-[100%] h-screen object-fill items-center justify-center overflow-hidden "
              alt="캐러쉘2"
            />
          </section>
          <section className="relative">
            <img
              src={process.env.PUBLIC_URL + "/img/carousel3.jpeg"}
              className="w-[100%] h-screen object-fill items-center justify-center overflow-hidden "
              alt="캐러쉘3"
            />
          </section>
          <section className="relative">
            <img
              src={process.env.PUBLIC_URL + "/img/carousel4.jpeg"}
              className="w-[100%] h-screen object-fill items-center justify-center overflow-hidden "
              alt="캐러쉘4"
            />
          </section>
        </Slider>
      </div>
      <div className="text-[30px] flex justify-end mr-6 -mt-6">
    
      {
        changePlay === true ? 
        <BsPlayCircle onClick={play}></BsPlayCircle> : 
        <BsPauseCircle onClick={pause}></BsPauseCircle>
      }
      

      </div>
    </>
  );
};

export default Carousel;
