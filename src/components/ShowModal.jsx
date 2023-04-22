import React from "react";
import "../App.css";
import Store from '../components/navtab/Store'
import Mac from '../components/navtab/Mac'
import Ipad from '../components/navtab/Ipad'
import { cartState, searchState } from "../atom";
import Search from "./navtab/Search";
import Cart from "./navtab/Cart";


const ShowModal = ({ cName }) => {


  return (
    <>
    {console.log(searchState)}
      <div className={`bg-[#161617] absolute z-30 w-screen ${cName === 'Mac' || 'iPad' || '엔터테인먼트' ? 'h-140' : 'h-100'}`}>
        {cName === '스토어' ?   <Store/> :  ''}
        {cName === 'Mac' ? <Mac/> : ''}
        {cName === 'iPad' ? <Ipad/> : ''}
      </div>
    </>
  );
};

export default ShowModal;
