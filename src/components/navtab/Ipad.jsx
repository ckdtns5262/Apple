import React from 'react'

const Ipad = () => {
  return (
    <div className="flex ml-16 mt-20 space-x-24 relative">
    <section className="text-neutral-400 text-sm space-y-5">iPad 살펴보기
      <div className="text-white text-xl space-y-2 font-bold mt-2">
      <h3>iPad Pro</h3>
      <h3>iPad Air</h3>
      <h3>iPad</h3>
      <h3>iPad mini</h3>
      <h3>Apple Pencil</h3>
      <h3>키보드</h3>
      </div>
      <div className='text-white '>
        <p>iPad 비교하기</p>
        <p>iPad를 선택하는 이유</p>
        <p>iPad 모두 살펴보기</p>
      </div>
    </section>
    <section className="text-neutral-400 text-sm">iPad 쇼핑하기
    <div className="text-white text-sm space-y-2 mt-4 font-medium">
      <h5>iPad 쇼핑하기</h5>
      <h5>iPad 액세서리</h5>
      <h5>금융 혜택</h5>
      <h5>Apple Trade In</h5>
      </div>
    </section>
    <section className="text-neutral-400 text-sm space-y-2">그 외 iPad 관련 항목
    <div className="text-white text-sm space-y-2 mt-4 font-medium">
      <h5>iPad 지원</h5>
      <h5>iPadOS 16</h5>
      <h5>iCloud</h5>
      <h5>교육</h5>
      </div>
    </section>
   </div> 
  )
}

export default Ipad