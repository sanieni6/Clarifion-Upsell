import React from 'react'
import arrowLeft from "../assets/images/leftArrow.svg";
import secureCheck from "../assets/images/secureCheck.svg";
import rigthArrow from "../assets/images/rigthArrow.svg";
import clarifionlogo from "../assets/images/clarifionLogo.svg";
import Mcfee from "../assets/images/macfee.svg";
import norton from "../assets/images/norton.svg";

const Header = () => {
  return (
    <header>
        <div className='bg-backHeader flex justify-between py-[10px] px-[20px] gap-1 h-[42px]'>
            <button><img src={arrowLeft} alt="" /></button>
            <div className='flex items-center gap-1'>
                <img src={secureCheck} alt="" />
                <p className='leading-[12px] w-[197px] font-small text-white text-[12px]'>30-DAY SATISFACTION GUARANTEE</p>
            </div>
            <button><img src={rigthArrow} alt="" /></button>
        </div>

        <div className='flex items-center h-[60px] justify-between px-[20px]'>
            <img src={clarifionlogo} alt="" />
            <div className='flex gap-1'>
                <img src={Mcfee} alt="" />
                <img src={norton} alt="" />
            </div>
        </div>

    </header>
  )
}

export default Header