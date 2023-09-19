import { useState } from 'react'
import arrowLeft from "../assets/images/leftArrow.svg";
import secureCheck from "../assets/images/secureCheck.svg";
import rigthArrow from "../assets/images/rigthArrow.svg";
import clarifionlogo from "../assets/images/clarifionLogo.svg";
import Mcfee from "../assets/images/macfee.svg";
import norton from "../assets/images/norton.svg";


const Header = () => {

    const elements = [
        '30-DAY SATISFACTION GUARANTEE',
        'Free delivery on orders over $40.00',
        '50.000+ HAPPY CUSTOMERS',
        '100% Money Back Guarantee',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevClick = () => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

 

    const handleNextClick = () => {
        if(currentIndex < elements.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };


  return (
    <header>
        <div className='bg-backHeader flex justify-between py-[10px] px-[20px] gap-1 h-[42px]'>
            <button onClick={handlePrevClick} className='md:hidden'><img src={arrowLeft} alt="Prev" /></button>
            <div className='flex items-center gap-1 md:hidden'>
                <img src={secureCheck} alt="" />
                <p className='leading-[12px] font-medium text-white text-[12px]'>{elements[currentIndex]}</p>
            </div>
            <button onClick={handleNextClick} className='md:hidden'><img src={rigthArrow} alt="" /></button>
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