import React from "react";
import { useState } from "react";
import Carousel from "./Carousel";
import ContentDiv from "./ContentDiv";


const Content = () => {
  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);


  return (
    <div className="h-full bg-center">
      {/* 1번 banner */}
      <section className="bg-bg1 h-screen bg-[100%] relative text-white text-center justify-center items-center">
        <a href="/14pro">
        <div className="text-black ">빈칸</div>
        <h2 className="text-[50px] font-bold">iPhone 14 Pro</h2>
        <h3 className="text-[30px] ">프로 그 이상.</h3>
        <div className='mt-4 space-x-11 text-[21px] text-[#2a97ff] font-semibold' >
          <button  
          onMouseLeave={()=>setOver1(false)}
          onMouseEnter={()=>{setOver1(true)}} className={`${over1 === true ? 'border-b-2 border-[#2a97ff]' : ''}`}>더 알아보기 </button>
          <button 
          onMouseLeave={()=>setOver2(false)}
          onMouseOver={()=>{setOver2(true)}} className={`${over2 === true ? 'border-b-2 border-[#2a97ff]' : ''}`}>구입하기 </button>
        </div>
        </a>
      </section>
      {/* 2번 banner */}
      <section className="bg-bg2 h-screen bg-[100%] relative text-center justify-center items-center">
        <a href="/14">
        <div className="text-black "></div>
        <h2 className="text-[50px] font-bold">iPhone 14</h2>
        <h3 className="text-[30px] font-semibold ">두 가지 매력적인 사이즈</h3>
        <h3 className="text-[30px] font-semibold ">이제 노랗게 물든 봄처럼</h3>
        <div className='mt-4 space-x-11 text-[21px] text-[#2a97ff] font-semibold' >
          <button  
          onMouseLeave={()=>setOver1(false)}
          onMouseEnter={()=>{setOver1(true)}} className={`${over1 === true ? 'border-b-2 border-[#2a97ff]' : ''}`}>더 알아보기 </button>
          <button 
          onMouseLeave={()=>setOver2(false)}
          onMouseOver={()=>{setOver2(true)}} className={`${over2 === true ? 'border-b-2 border-[#2a97ff]' : ''}`}>구입하기 </button>
        </div>
        </a>
      </section>
      {/* 3번 banner */}  
      <section className="bg-bg3 h-screen bg-[100%] relative text-center text-white justify-center items-center">
        <a href="/watch">
        <div className="text-black "></div>
        <h2 className="text-[50px] font-bold">🍎WATCH</h2>
        <h3 className="text-[20px] text-red-500">SERIES 8</h3>
        <h3 className="text-[30px] ">건강하게 앞서 나아가다.</h3>
        <div className='mt-4 space-x-11 text-[21px] text-[#2a97ff] font-semibold' >
          <button  
          onMouseLeave={()=>setOver1(false)}
          onMouseEnter={()=>{setOver1(true)}} className={`${over1 === true ? 'border-b-2 border-[#2a97ff]' : ''}`}>더 알아보기 </button>
          <button 
          onMouseLeave={()=>setOver2(false)}
          onMouseOver={()=>{setOver2(true)}} className={`${over2 === true ? 'border-b-2 border-[#2a97ff]' : ''}`}>구입하기 </button>
        </div>
        </a>
      </section>
      {/* 6분할 배너 */}
      <div className="p-2 m-2"></div>
      <ContentDiv/>
      {/* 캐러쉘 */}
      <Carousel/>
    </div>
  );
};

export default Content;
