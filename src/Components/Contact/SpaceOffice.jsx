import React from 'react'
import firstPhoto from "../Assets/office1.png"
import secondPhoto from "../Assets/office2.png"
import thirdPhoto from "../Assets/officeTreku.png"
import fourthPhoto from "../Assets/office5.png"

const SpaceOffice = () => {
  return (
    <>
    <div className="py-0 lg:py-[100px] bg-black lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0">
        <h1 className="text-4xl md:text-[33px] font-bold text-white font-custom leading-[47px]">
          Our space
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[505px] text-base font-medium font-custom1 text-white">
          Nestled in the heart of Prishtina, our space is a dynamic workspace where creativity knows no bounds. <br /> <br />
          It's more than just a place to work—it's a vibrant hub where ideas come to life. From warm collaborative nooks to top-notch amenities, our space is designed to inspire innovation and foster collaboration.<br /> <br />
          Whether you're brainstorming with colleagues, hosting client meetings, or diving into focused work, our space provides the perfect environment to fuel your creativity and drive success.
        </span>
      </div>
    </div>
      <div className='w-full flex lg:pt-[33px] lg:px-[50px]'>
        <div className='w-1/2 flex flex-col'>
          <img className='flex-grow m-3' src={firstPhoto} alt="" />
          <img className='flex-grow m-3' src={thirdPhoto} alt="" />
        </div>
        <div className='w-1/2 flex flex-col'>
          <img className='flex-grow m-3' src={secondPhoto} alt="" />
          <img className='flex-grow m-3' src={fourthPhoto} alt="" />
        </div>
      </div>
    </>
  )
}

export default SpaceOffice