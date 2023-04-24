import React from 'react'

const Search = () => {
  return (
    <div className="bg-[#161617] absolute z-30 w-screen h-100">
     <div className="relative flex ml-16 mt-20 space-x-24">
    <section className="text-neutral-400 text-sm space-y-5">쇼핑하기
      <div className="text-white text-xl space-y-2 font-bold mt-2">
      <h3>최신 제품 쇼핑하기</h3>
      <h3>Mac</h3>
      <h3>iPad</h3>
      <h3>iPhone</h3>
      <h3>Apple Watch</h3>
      <h3>액세서리</h3>
      </div>
    </section>
    <section className="text-neutral-400 text-sm">빠른링크
    <div className="text-white text-sm space-y-2 mt-2">
      <h5>매장 찾기</h5>
      <h5>주문 상태</h5>
      <h5>금융 혜택</h5>
      <h5>Apple Trade In</h5>
      </div>
    </section>
    <section className="text-neutral-400 text-sm space-y-2">특별 할인 쇼핑하기
    <div className="text-white text-sm space-y-2 mt-2">
      <h5>인증 리퍼비쉬 제품</h5>
      <h5>교육</h5>
      <h5>비즈니스</h5>
      </div>
    </section>
   </div> 
      </div>
  )
}

export default Search