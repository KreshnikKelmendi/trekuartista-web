import React from 'react';
// import photoTreku from "../Assets/welcome.png";

const FirstContentOfAbout = () => {
  return (
    <div className="py-0 lg:py-[100px] bg-[#E6E6E6] lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0" >
        <h1 className="text-4xl md:text-[33px] font-bold font-custom leading-[47px]">
          About us
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[625px] text-lg font-medium font-custom1 text-[#1E1E1E]">
        Welcome to Trekuartista, your premier destination for cutting-edge marketing and advertising solutions. Founded in 2012 amidst the vibrant cityscape of Prishtina, Kosovo, our agency has since solidified its reputation as a powerhouse in the industry.
        <br /> <br />
        At Trekuartista, we provide a full range of tailored marketing and advertising services, ensuring exceptional results through our creative strategies. Our approach is grounded in meticulous research, driving data-driven recommendations and close campaign monitoring for maximum impact. What truly sets us apart is our unwavering commitment to exceptional creativity, infusing passion into every project to push the boundaries of innovation.
        </span>
        {/* <div className='flex justify-center items-center ml-0 mt-5 md:mt-0 md:ml-20 xxl:ml-[163px]'>
          <img className='w-[425px] h-[72px] object-contain' src={photoTreku} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default FirstContentOfAbout;
