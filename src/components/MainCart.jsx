import React from "react";
import greenCheck from "../assets/images/checkgreen.svg";
import three from "../assets/images/three.svg";
import four from "../assets/images/four.svg";
import mainCart from "../assets/images/mainImage.svg";
import blueimage from "../assets/images/imageBlue.svg";
import star from "../assets/images/star.svg";
import bluePoint from "../assets/images/bluePoint.svg";
import blueCheck from "../assets/images/checkBlue.svg";
import percen from "../assets/images/percen.svg";

const MainCart = () => {
  return (
    <section className="px-[20px] py-[40px] flex flex-col gap-[24px]">
      {/* <!-- title --> */}
      <div>
        <h1 className="text-[32px] leading-[44.8px] font-normal text-center">
          Wait ! your order in progress.
        </h1>
        <p className="font-normal text-[16px] leading[22.4px] text-center">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>

      {/* <!-- steps --> */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-[8px] justify-center items-center">
          <img src={greenCheck} className="w-5 h-5" alt="" />
          <p className="text-[12px] leading-[13.2px] font-normal">
            Cart Review
          </p>
        </div>
        <div className="flex flex-col gap-[8px] justify-center items-center">
          <img src={greenCheck} className="w-5 h-5" alt="" />
          <p className="text-[12px] leading-[13.2px] font-normal">Checkout</p>
        </div>
        <div className="flex flex-col gap-[8px] justify-center items-center">
          <img src={three} className="w-5 h-5" alt="" />
          <p className="text-[12px] leading-[13.2px] font-black">
            Special Offer
          </p>
        </div>
        <div className="flex flex-col gap-[8px] justify-center items-center">
          <img src={four} className="w-5 h-5" alt="" />
          <p className="text-[12px] leading-[13.2px] font-normal">
            Confirmation
          </p>
        </div>
      </div>

      {/* <!-- card --> */}
      <div className="flex flex-col gap-[24px]">
        {/* <!-- big title --> */}
        <h2 className="text-[24px] font-semibold leading-[33.6px] text-center">
          <span style={{ color: "#2C7EF8" }}>ONE TIME ONLY </span>Special Price
          For 6 Extra Clarifion For Only{" "}
          <span style={{ color: "#2C7EF8" }}>$14 Each</span> ($84.00 Total!)
        </h2>
        <img src={mainCart} alt="" />

        <div className="flex flex-col gap-4">
          <div className="flex gap-[16px]">
            <img src={blueimage} alt="" />
            <div className=" flex flex-col flex-auto gap-[10px] self-center">
              <div className="flex justify-between">
                <h3 className="text-[14px] leading-[19.6px] font-normal">
                  Clarifion Air Ionizer
                </h3>
                <div className="flex gap-[8px] items-center">
                  <p className="text-[10px] leading-[13.66px] font-semibold text-[#969696]">
                    $180
                  </p>
                  <p className="text-[14px] font-semibold leading-[19.6px] text-blueColor">
                    $84
                  </p>
                </div>
              </div>
              <div className="flex">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <img key={i} src={star} alt="" />
                  ))}
              </div>
              <div className="flex gap-4">
                <img src={bluePoint} alt="" />
                <p className="text-[12px] font-light leading-[16.39px]">12 left in Stock</p>
              </div>
            </div>
          </div>
          <p className="text-[12px] font-normal leading-[16.8px] text-[#4D5254] text-center">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
        </div>

        {/* <!-- three checks --> */}
        <div className="flex flex-col gap-4">
            <div className="flex gap-3">
                <img src={blueCheck} alt="" />
                <p className="text-[12px] leading-[19.2px] font-normal text-[#4D5254]">Negative Ion Technology may <span className=" font-black">help with allergens</span></p>
            </div>
            <div className="flex gap-3">
                <img src={blueCheck} alt="" />
                <p className="text-[12px] leading-[19.2px] font-normal text-[#4D5254]">Designed for  <span className=" font-black">air rejuvenation</span></p>
            </div>
            <div className="flex gap-3">
                <img src={blueCheck} alt="" />
                <p className="text-[12px] leading-[19.2px] font-normal text-[#4D5254]"><span className=" font-black">Perfect for every room</span> in all types of places.</p>
            </div>
        </div>

        {/* <!-- save message --> */}
        <div className="flex gap-[10px] py-3 px-4 bg-[#EDF3FD] border-0 rounded-[10px]">
            <img src={percen} alt="" />
            <p className="text-[14px] font-medium leading-[19.6px]">Save <span className="text-blueColor">53% </span>and get <span className="text-blueColor">6 extra Clarifision</span> for only <span className="text-blueColor">$14 Each.</span></p>
        </div>
      </div>
    </section>
  );
};

export default MainCart;
