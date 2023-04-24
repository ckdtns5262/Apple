import React from "react";
import "../App.css";
import Store from '../components/navtab/Store'
import Mac from '../components/navtab/Mac'
import Ipad from '../components/navtab/Ipad'
import Search from '../components/navtab/Search'


const ShowModal = ({ cName, searchClick, cartClick }) => {

  return (
    <>
      <div className={`bg-[#161617] absolute z-30 w-screen ${cName === 'Mac' || 'iPad' || '엔터테인먼트' ? 'h-140' : 'h-100'}`}>
        {cName === '스토어' ?   <Store/> :  ''}
        {cName === 'Mac' ? <Mac/> : ''}
        {cName === 'iPad' ? <Ipad/> : ''}
        {searchClick ===  true ? <Search/> : ''}
      </div>
    </>
  );
};

export default ShowModal;
