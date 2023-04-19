import React from "react";

const NavTabs = () => {
  const nav1 = [
    "스토어",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV 및 홈",
    "AirTag",
    "액세서리",
  ];
  const nav2 = [
    "Apple One",
    "Apple TV+",
    "Apple Music",
    "Apple Arcade",
    "Apple Podcasts",
    "Apple Books",
    "App Store",
  ];
  const nav3 = [
    "매장 찾기",
    "Genius Bar",
    "Today at Apple",
    "Apple 캠프",
    "Apple Store 앱",
    "인증 리퍼비쉬 제품",
    "Apple Trade In",
    "금융 혜택",
    "주문 상태",
    "쇼핑 도움말",
  ];
  const nav4 = [
    "Newsroom",
    "Apple 리더십",
    "채용 안내",
    "윤리 및 규정 준수",
    "이벤트",
    "일자리 창출",
    "Apple 연락처",
  ];

  return (
    <>
      <div className="mt-2 p-4 text-sm">
        <nav className="flex justify-between">
          <section className="font-bold ">
            쇼핑 및 알아보기
            <div className="mt-2 font-normal space-y-1">
              {nav1.map((name, i) => (
                <p key={i}>{name}</p>
              ))}
            </div>
            <section className="mt-3 ">Apple 지갑</section>
            <div className="mt-2 space-y-2 font-normal">
              <p>지갑</p>
              <p>Apple Pay</p>
            </div>
            <br />
          </section>

          <section className="font-bold">
            계정
            <div className=" mt-2 font-normal space-y-2">
              <p>Apple ID 관리</p>
              <p>Apple Store 계정</p>
              <p>iCloud.com</p>
            </div>
            <section className="font-bold mt-3">
              엔터테인먼트
              <div className="mt-2 font-normal space-y-2">
                {nav2.map((name, i) => (
                  <p key={i}>{name}</p>
                ))}
              </div>
            </section>
          </section>
          <section className="font-bold">
            Apple Store
            <div className="font-normal mt-2 space-y-2">
              {nav3.map((name, i) => (
                <p key={i}>{name}</p>
              ))}
            </div>
          </section>
          <section className="font-bold">
            비즈니스
            <div className="mt-2 font-normal space-y-2">
              <p>Apple과 비즈니스</p>
              <p>비즈니스를 위한 제품 쇼핑하기</p>
            </div>
            <section className="mt-3 font-bold">
              교육
              <div className="mt-2 font-normal space-y-2">
                <p>Apple과 교육</p>
                <p>초중고용 제품 쇼핑하기</p>
                <p>대학 생활을 위한 제품 쇼핑하기</p>
              </div>
            </section>
          </section>
          <section className="font-bold -pl-12">
            Apple의 가치관
            <div className="mt-2 space-y-2 font-normal">
              <p>손쉬운 사용</p>
              <p>교육</p>
              <p>환경</p>
              <p>개인정보 보호</p>
              <p>협력업체에 대한 책임</p>
            </div>
            <section className="mt-4">
              Apple 정보
              <div className="font-normal space-y-2 mt-2">
                {nav4.map((name, i) => (
                  <p key={i}>{name}</p>
                ))}
              </div>
            </section>
          </section>
        </nav>
      </div>
    </>
  );
};

export default NavTabs;
