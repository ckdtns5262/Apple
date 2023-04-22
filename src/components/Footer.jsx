import React from 'react'
import Copyright from './Copyright'
import FooterTab from './FooterTab'

const Footer = () => {
  return (
    <div className='mt-24 bg-[#f5f5f7] p-2'>
    {/* 1,2 번 */}
    <div className='pl-20 pr-10'>
        <p className='text-sm text-[#86868b]'>
        1. ₩780,000은 iPhone 13 Pro Max 1TB 모델의 보상 판매 금액으로, 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 구성에 따라 달라집니다. 일부 기기는 보상 판매 대상이 아닙니다.
         크레딧 또는 Apple Store<br/> Gift Card로 보상 판매를 받으려면 19세 이상이어야 합니다. 보상 판매 금액은 적용 가능한 새 기기 구입 시 적용하거나 Apple Store Gift Card로 받을 수 있습니다. 
         최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 <br/>산정 시 제시한 기기의 설명과 일치하는지 비교 검수 후 정해집니다. 부가세는 새로 구입한 기기의 총액을 바탕으로 부과됩니다.
          일부 매장에서는 보상 판매를 제공하지 않으며, 매장 내 보상 판매와 온라인 보상 판매 프로그램 간 내용에<br/> 차이가 있을 수 있습니다. 일부 매장은 추가 요구 사항이 있을 수 있습니다. 
          Apple 또는 보상 판매 파트너사는 어떤 보상 판매도 거래를 거부하거나, 보상 판매 수량을 제한할 권리를 보유합니다. 
          적용 가능 기기의 보상 판매 및 재활용에<br/> 대한 자세한 내용은 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. 규제 및 제한이 적용될 수 있습니다. 
          보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의 업체에 의해 제공됩니다. Apple 및 Apple의 <br/>계열사는 고객과 파트너 간 계약의 당사자가 아닙니다.<br/>
          <br/>2. AirPods Pro(1세대)와 비교한 결과입니다.
        </p>
    </div>
    {/* ----------- */}
    <br/>
    <hr></hr>
    {/* 메뉴탭들 정렬 */}
    <FooterTab/>
    {/* ----------- */}
    {/* <hr></hr> */}
    {/* copyright  */}
    <Copyright/>
    </div>
  )
}

export default Footer