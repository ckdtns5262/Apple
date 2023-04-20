import React from "react";
import "../App.css";

const ShowModal = ({ cName }) => {
  return (
    <>
    
      <div className="bg-black h-96 absolute z-30 text-white w-screen ">
        <div className="flex">
          <section>쇼핑하기</section>
          <section>빠른링크</section>
          <section>특별 할인 쇼핑하기</section>
        </div>
      </div>
    </>
  );
};

export default ShowModal;
