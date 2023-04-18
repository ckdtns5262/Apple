import React from "react";
import { DiApple } from "react-icons/di";
import { FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navbars = [
    "스토어",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV 및 홈",
    "엔터테인먼트",
    "액세서리",
    "고객지원",
  ];
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[#434344] p-2 text-white font-semibold">
        <div className="flex items-center justify-between">
          <DiApple className="text-[28px] ml-9" onClick={()=>navigate("/")} />
          {navbars.map((name, i) => (
            <p key={i} className="text-[12px] hidden lg:flex">
              {name}
            </p>
          ))}
          <div className=" flex absoulte space-x-9">
            <FiSearch />
            <BsBag className="mr-5" />
          </div>
        </div>
      </div>
      <div className="p-2 text-center">
        <p>
          iPhone 7 Plus 이후 모델을 보상 판매하면 iPhone 14 또는 iPhone 14 Pro
          구입 시 사용할 수 있는 ₩40,000-₩780,000 상당의 크레딧이.
          <a href="/" className="text-blue-700">
            iPhone 쇼핑하기
          </a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
