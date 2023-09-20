import lockWhite from "../assets/images/lockWhite.svg";

const Footer = () => {
  return (
    <footer
      className="flex flex-col gap-[16px] p-[20px] bg-backHeader justify-center items-center
    md:flex-row md:justify-between md:h-[88px] md:px-[100px]
    "
    >
      <div className="flex gap-3 py-2">
        <p
          className="text-[12px] text-white leading-[16.8px] font-normal
            md:text-[16px] md:leading-[22.4px]
            "
        >
          Copyright (c) 2023
        </p>
        <hr className=" border border-[#fff] w-[14px] rotate-90 self-center" />
        <p
          className="text-[12px] text-white leading-[16.8px] font-normal
            md:text-[16px] md:leading-[22.4px]
            "
        >
          Clarifionsupport@clarifion.com
        </p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <img src={lockWhite} className="md:w-[16px] md:h-[16px]" alt="" />
        <p
          className="text-[12px] leading-[18px] font-normal text-white
            md:text-[16px] md:leading-[22.4px]
            "
        >
          Secure 256-bit SSL Encryption.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
