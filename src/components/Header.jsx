import { useState } from 'react'
import arrowLeft from "../assets/images/leftArrow.svg";
import secureCheck from "../assets/images/secureCheck.svg";
import rigthArrow from "../assets/images/rigthArrow.svg";
import clarifionlogo from "../assets/images/clarifionLogo.svg";
import Mcfee from "../assets/images/macfee.svg";
import norton from "../assets/images/norton.svg";
import truck from "../assets/images/truck.svg";
import hearth from "../assets/images/hearth.svg";
import fluentArrow from "../assets/images/fluentArrow.svg";


const Header = () => {

    const elements = [
        [ secureCheck,'30-DAY SATISFACTION GUARANTEE'],
        [truck,'Free delivery on orders over $40.00'],
        [hearth,'50.000+ HAPPY CUSTOMERS'],
        [fluentArrow,'100% Money Back Guarantee'],
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
        <div className='bg-backHeader flex justify-between md:justify-normal py-[10px] px-[20px] gap-1 h-[42px] md:h-[50px]'>
            <button onClick={handlePrevClick} className='md:hidden'><img src={arrowLeft} alt="Prev" /></button>
            <div className='flex items-center gap-1 md:hidden'>
                <img src={elements[currentIndex][0]} alt="" />
                <p className='leading-[12px] font-medium text-white text-[12px]'>{elements[currentIndex][1]}</p>
            </div>
            <button onClick={handleNextClick} className='md:hidden'><img src={rigthArrow} alt="" /></button>
        
        {/* Desktop */}
            <div className='hidden md:flex md:justify-around md:flex-1'>
                {elements.map((element, index) => (
                    <div key={index} className='flex items-center gap-1'>
                        <img src={element[0]} alt="" />
                        <p className='leading-[12px] font-medium text-white text-[12px]'>{element[1]}</p>
                    </div>
                ))
                    }

            </div>
        </div>

        <div className='flex items-center h-[60px] justify-between px-[20px] md:h-[96px]
        md:py-[30px] md:px-[127px]
        '>
            <img src={clarifionlogo} className='md:h-[36px] md:w-[192px] ' alt="" />
            <div className='flex gap-1 md:gap-[32px]'>
                <img src={Mcfee} className='md:w-[88px] md:h-[32px]' alt="" />
                <img src={norton} className='md:w-[82px] md:h-[32px]' alt="" />
            </div>
        </div>

    </header>
  )
}

export default Header