import greenCheck from "../assets/images/checkgreen.svg";
import three from "../assets/images/three.svg";
import four from "../assets/images/four.svg";
import mainCart from "../assets/images/mainImage.svg";
import blueimage from "../assets/images/imageBlue.svg";
import star from "../assets/images/star.svg";
import bluePoint from "../assets/images/bluePoint.svg";
import blueCheck from "../assets/images/checkBlue.svg";
import percen from "../assets/images/percen.svg";
import buttonArrow from "../assets/images/buttonArrow.svg";
import lock from "../assets/images/lockDark.svg";
import visa from "../assets/images/visa.svg";
import gpay from "../assets/images/gpay.svg";
import paypal from "../assets/images/paypal.svg";
import amex from "../assets/images/amex.svg";
import mastercard from "../assets/images/mastercard.svg";
import applePay from "../assets/images/applePay.svg";
import shopPay from "../assets/images/shopPay.svg";
import gold from "../assets/images/gold.svg";
import verify from "../assets/images/verify.svg";
import picture from "../assets/images/picture.svg";

const MainCart = () => {
  const bigTitle = () => {
    return (
      <h2
        className="text-[24px] font-semibold leading-[33.6px] text-center md:text-start
      md:text-[32px] md:leading-[44.8px] md:font-normal
      "
      >
        <span style={{ color: "#2C7EF8" }}>ONE TIME ONLY </span>Special Price
        For 6 Extra Clarifion For Only{" "}
        <span style={{ color: "#2C7EF8" }}>$14 Each</span> ($84.00 Total!)
      </h2>
    );
  };

  const userOpinion = () => {
    return (
      <div className="flex flex-col p-6 gap-[18px] bg-[#fff] w-[575px]">
        <div className="flex gap-[13px] items-center">
          <img src={picture} alt="" />
          <div className="flex flex-col justify-start gap-2">
            <div className="flex">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <img key={i} src={star} alt="" />
                ))}
            </div>
            <div className="flex gap-[10px]">
              <p className="text-[14px] leading-[14px] font-bold text-[#333333]">
                Ken T.
              </p>
              <div className="flex items-center gap-2">
                <img src={verify} alt="" />
                <p className="text-[12px] leading-[14.4px] font-normal text-[#5BB59A]">
                  Verified Customer
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[16px] leading-[24px] font-normal text-[#4D5254]">
          “As soon as the Clarifions arrived I put one in my bedroom. This was
          late in the afternoon. When I went to the bedroom in the evening it
          smelled clean. When I went to bed I felt I could breathe better.
          Wonderful.”
        </p>
      </div>
    );
  };

  const card = () => {
    return (
      <div
        className="flex flex-col gap-[24px]
      md:bg-[#FAFAFA]
      "
      >
        {/* <!-- big title --> */}
        <div className="md:hidden">{bigTitle()}</div>
        {/* <!-- main image --> */}
        <img src={mainCart} className="md:hidden" alt="" />

        {/* <!-- product statistics --> */}
        <div
          className="flex flex-col gap-4
        md:gap-6
        "
        >
          <div className="flex gap-[16px]">
            <img src={blueimage} className="md:w-[134px] md:h-[134px]" alt="" />
            <div
              className=" flex flex-col flex-auto gap-[10px] self-center
            md:gap-[5px]
            "
            >
              <div className="flex justify-between">
                <h3
                  className="text-[14px] leading-[19.6px] font-normal
                md:text-[20px] md:leading-[28px]
                "
                >
                  Clarifion Air Ionizer
                </h3>
                <div
                  className="flex gap-[8px] items-center
                md:gap-[10px]
                "
                >
                  <p
                    className="text-[10px] leading-[13.66px] font-semibold text-[#969696]
                  md:text-[16px] md:leading-[21.86px]
                  "
                  >
                    $180
                  </p>
                  <p
                    className="text-[14px] font-semibold leading-[19.6px] text-blueColor
                  md:text-[22px] md:leading-[30.8px]
                  "
                  >
                    $84
                  </p>
                </div>
              </div>
              <div className="flex">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <img
                      key={i}
                      src={star}
                      className="md:w-[14.89px] md:h-[14.22px]"
                      alt=""
                    />
                  ))}
              </div>
              <div className="flex gap-4">
                <img
                  src={bluePoint}
                  className="md:w-[16px] md:h-[16px]"
                  alt=""
                />
                <p
                  className="text-[12px] font-light leading-[16.39px]
                md:text-[16px] md:leading-[21.86px] md:text-[#37465A]
                "
                >
                  12 left in Stock
                </p>
              </div>
              <p
                className=" hidden text-[12px] font-normal leading-[16.8px] text-[#4D5254] text-center
          md:block md:text-start md:leading-[22.4px] md:text-[14px]
          "
              >
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>
          <p
            className="text-[12px] font-normal leading-[16.8px] text-[#4D5254] text-center
          md:hidden
          "
          >
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
        </div>

        {/* <!-- three checks --> */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <img src={blueCheck} className="md:w-[22px] md:h-[22px]" alt="" />
            <p
              className="text-[12px] leading-[19.2px] font-normal text-[#4D5254]
            md:text-[16px] md:leading-[25.6px]
            "
            >
              Negative Ion Technology may{" "}
              <span className=" font-black">help with allergens</span>
            </p>
          </div>
          <div className="flex gap-3">
            <img src={blueCheck} className="md:w-[22px] md:h-[22px]" alt="" />
            <p
              className="text-[12px] leading-[19.2px] font-normal text-[#4D5254]
            md:text-[16px] md:leading-[25.6px]
            "
            >
              Designed for <span className=" font-black">air rejuvenation</span>
            </p>
          </div>
          <div className="flex gap-3">
            <img src={blueCheck} className="md:w-[22px] md:h-[22px]" alt="" />
            <p
              className="text-[12px] leading-[19.2px] font-normal text-[#4D5254]
            md:text-[16px] md:leading-[25.6px]
            "
            >
              <span className=" font-black">Perfect for every room</span> in all
              types of places.
            </p>
          </div>
        </div>

        {/* <!-- save message --> */}
        <div className="flex gap-[10px] py-3 px-4 bg-[#EDF3FD] border-0 rounded-[10px] items-center">
          <img src={percen} className="md:w-[32px] md:h-[32px]" alt="" />
          <p
            className="text-[14px] font-medium leading-[19.6px] 
          md:text-[14px] md:leading-[22.4px]
          "
          >
            Save <span className="text-blueColor">53% </span>and get{" "}
            <span className="text-blueColor">6 extra Clarifision</span> for only{" "}
            <span className="text-blueColor">$14 Each.</span>
          </p>
        </div>

        {/* <!-- payment section --> */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            {/* <!-- button --> */}
            <button
              className="flex gap-[10px] rounded-[50px] py-4 px-[60px] bg-greenColor items-center justify-center
            
            "
            >
              <p
                className="text-[14px] font-bold text-white leading-[19.12px]
              md:text-[20px] md:leading-[27.32px]
              "
              >
                YES-CLAIM MY DISCOUNT
              </p>
              <img
                src={buttonArrow}
                className="md:w-[16px] md:h-[16px]"
                alt=""
              />
            </button>
            {/* <!-- payment methods --> */}
            <div className="flex flex-col gap-3 py-2 px-4 border-[1px] items-center">
              <div className="flex gap-3 md:gap-1">
                <h3
                  className="text-[11px] font-normal leading-[16.8px] text-[#4D5254]
                md:text-[10px]
                "
                >
                  Free Shipping
                </h3>
                <hr className=" border border-[#CFCFCF] w-[14px] rotate-90 self-center" />
                <div className="flex gap-2">
                  <img src={lock} alt="" />
                  <p
                    className="text-[11px] font-normal leading-[16.8px] text-[#4D5254]
                  md:text-[10px] 
                  "
                  >
                    Secure 256-Bit SSL Encryption
                  </p>
                  <hr className="hidden md:block border border-[#CFCFCF] w-[14px] rotate-90 self-center" />
                </div>
                <div className="hidden md:flex gap-[2px] md:gap-[1px]">
                  <img src={visa} alt="" />
                  <img src={shopPay} alt="" />
                  <img src={paypal} alt="" />
                  <img src={gpay} alt="" />
                  <img src={mastercard} alt="" />
                  <img src={applePay} alt="" />
                  <img src={amex} alt="" />
                </div>
              </div>
              <hr className="border border-[#CFCFCF] w-full md:hidden" />
              <div className="flex gap-[2px] md:hidden">
                <img src={visa} alt="" />
                <img src={shopPay} alt="" />
                <img src={paypal} alt="" />
                <img src={gpay} alt="" />
                <img src={mastercard} alt="" />
                <img src={applePay} alt="" />
                <img src={amex} alt="" />
              </div>
            </div>
          </div>
          <h2
            className="text-[12px] leading-[16.29px] text-redColor font-medium self-center
          md:text-[18px] md:leading-[24.59px]
          "
          >
            NO THANKS, I DON&apos;T WANT THIS.
          </h2>
        </div>

        {/* <!-- disclaimer --> */}
        <div className="flex gap-4">
          <img
            src={gold}
            className=" self-start md:w-[88px] md:h-[88px]"
            alt=""
          />
          <p
            className="text-[12px] leading-[16.8px] font-normal text-[#4D5254]
          md:text-[16px] md:leading-[22.4px]
          "
          >
            If you are not completely thrilled with your Clarifion - We have a{" "}
            <span className="font-bold">30 day satisfaction guarantee.</span>{" "}
            Please refer to our return policy at the bottom of the page for more
            details. Happy Shopping!
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="px-[20px] py-[40px] flex flex-col gap-[24px] md:px-[90px] md:py-[0px]">
      {/* <!------------------------------------------ Mobile Version --------------------------------------------------> */}
      {/* <!-- title --> */}
      <div className="md:flex md:flex-col md:gap-6">
        <h1
          className="text-[32px] leading-[44.8px] font-normal text-center 
        md:text-[44px] md:leading-[48px]
        "
        >
          Wait ! Your Order In Progress.
        </h1>
        <p
          className="font-normal text-[16px] leading[22.4px] text-center
        md:text-[24px] md:leading-[24px]
        "
        >
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>

      {/* <!-- steps --> */}
      <div
        className="flex justify-between
      md:mt-[40px]
      "
      >
        <div
          className="flex flex-col gap-[8px] justify-center items-center
        md:flex-row md:gap-5
        "
        >
          <img src={greenCheck} className="w-5 h-5 md:h-10 md:w-10" alt="" />
          <p
            className="text-[12px] leading-[13.2px] font-normal
          md:text-[18px] md:leading-[22px] md:flex
          "
          >
            <span className="hidden md:flex">Step 1:</span> Cart Review
          </p>
        </div>
        <div
          className="flex flex-col gap-[8px] justify-center items-center
        md:flex-row md:gap-5
        "
        >
          <img src={greenCheck} className="w-5 h-5 md:h-10 md:w-10" alt="" />
          <p
            className="text-[12px] leading-[13.2px] font-normal
          md:text-[18px] md:leading-[22px] md:flex
          "
          >
            <span className="hidden md:flex">Step 2: </span> Checkout
          </p>
        </div>
        <div
          className="flex flex-col gap-[8px] justify-center items-center
        md:flex-row md:gap-5
        "
        >
          <img src={three} className="w-5 h-5 md:h-10 md:w-10" alt="" />
          <p
            className="text-[12px] leading-[13.2px] font-black
          md:text-[18px] md:leading-[22px] md:flex
          "
          >
            <span className="hidden md:flex">Step 3:</span> Special Offer
          </p>
        </div>
        <div
          className="flex flex-col gap-[8px] justify-center items-center
        md:flex-row md:gap-5
        "
        >
          <img src={four} className="w-5 h-5 md:h-10 md:w-10" alt="" />
          <p
            className="text-[12px] leading-[13.2px] font-normal
          md:text-[18px] md:leading-[22px] md:flex
          "
          >
            <span className="hidden md:flex">Step 4:</span> Confirmation
          </p>
        </div>
      </div>

      {/* <!-- card --> */}
      <div className="md:hidden">{card()}</div>

      {/* <!------------------------------------------ Desktop version --------------------------------------------------> */}

      <div className="hidden md:flex md:mb-9 md:bg-[#FAFAFA] md:p-5 md:rounded-[10px] md:gap-6">
        <div className=" flex flex-col gap-3">
          <img src={mainCart} className="w-[575px] h-[591px]" alt="" />
          {userOpinion()}
        </div>
        <div className="flex flex-col gap-[24px]">
          {bigTitle()}
          {card()}
        </div>
      </div>
    </section>
  );
};

export default MainCart;
