import React from 'react'
import lockWhite from "../assets/images/lockWhite.svg";

const Footer = () => {
  return (
    <footer className='flex flex-col gap-[16px] p-[20px] bg-backHeader'>
        <div className="flex gap-3 py-2">
            <p className='text-[12px] text-white leading-[16.8px] font-normal'>Copyright (c) 2023</p>
            <hr className=" border border-[#fff] w-[14px] rotate-90 self-center" />
            <p className='text-[12px] text-white leading-[16.8px] font-normal'>Clarifionsupport@clarifion.com</p>
        </div>
        <div className='flex gap-4 justify-center'>
            <img src={lockWhite} alt="" />
            <p className='text-[12px] leading-[18px] font-normal text-white'>Secure 256-bit SSL Encryption.</p>


        </div>


    </footer>
  )
}

export default Footer