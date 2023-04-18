import React from "react";
import { useState } from "react";

const ContentDiv = () => {
  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);
  return (
    <>
      {/* 2분할 */}
      <div className="flex h-screen">
        <section className="bg-bg4 w-full bg-cover text-white bg-center flex flex-col justify-center items-center">
          <div className="text-center mt-56">
          <h2 className="text-[40px]">WWDC23</h2>
          <h3 className="mt-4 text-[20px]">Apple WWDC(세계개발자회의).</h3>
          <h3 className="mt-2 text-[20px]">
            6월 5일-9일(태평양 연안 표준시),온라인에서 만나요
          </h3>
          <button
              onMouseLeave={() => setOver1(false)}
              onMouseEnter={() => {
                setOver1(true);
              }}
              className={`${
                over1 === true ? "border-b-2 border-[#2a97ff]" : ""
              } text-[#2a97ff]` }
            >
              더 알아보기{" "}</button>
          </div>
        </section>

        <section className="bg-bg5 w-full bg-cover bg-center text-center justify-center items-center">
          <h2 className="text-[40px] font-semibold">iPad</h2>
          <h3 className="text-[20px] ">쓰다. 그리다. 빠져들다</h3>
          <div className="mt-4 space-x-11 text-[21px] text-[#2a97ff] font-semibold">
            <button
              onMouseLeave={() => setOver1(false)}
              onMouseEnter={() => {
                setOver1(true);
              }}
              className={`${
                over1 === true ? "border-b-2 border-[#2a97ff]" : ""
              }`}
            >
              더 알아보기{" "}
            </button>
            <button
              onMouseLeave={() => setOver2(false)}
              onMouseOver={() => {
                setOver2(true);
              }}
              className={`${
                over2 === true ? "border-b-2 border-[#2a97ff]" : ""
              }`}
            >
              구입하기{" "}
            </button>
          </div>
        </section>
      </div>
      {/* 2분할 */}
      <div></div>
    </>
  );
};

export default ContentDiv;
