import React from 'react'
import { FcBusinesswoman ,FcBriefcase,FcSupport ,FcPortraitMode,FcMoneyTransfer ,FcHome } from "react-icons/fc";
import { PiAirplaneTiltDuotone } from "react-icons/pi";
import { FaCar,FaHandHoldingUsd ,FaChevronCircleDown} from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { MdCastForEducation } from "react-icons/md";
import { FaVanShuttle,FaRegHandshake } from "react-icons/fa6";
import { LuHotel } from "react-icons/lu";
import HomeService from './HomeService';

function Home() {

  const iconContainer = [
    {
      id: 1,
      title: "B2B",
      icon: <FaRegHandshake />
    },
    {
      id: 2,
      title: "Doctors",
      icon: <FcBriefcase />
    },
    {
      id: 3,
      title: "Travel",
      icon: <PiAirplaneTiltDuotone />
    },
    {
      id: 4,
      title: "Car Hire",
      icon: <FaCar />
    },
    {
      id: 5,
      title: "Beauty",
      icon: <FcBusinesswoman />
    },
    {
      id: 6,
      title: "Wedding",
      icon: <GiDiamondRing />
    },
    {
      id: 7,
      title: "Gyms",
      icon: <CgGym />
    },
    {
      id: 8,
      title: "Education",
      icon: <MdCastForEducation />
    },
    {
      id: 9,
      title: "packers & Movers",
      icon: <FaVanShuttle />
    },
    {
      id: 10,
      title: "Repairs & Services",
      icon: <FcSupport />
    },
    {
      id: 11,
      title: "Rent or Hire",
      icon: <FaHandHoldingUsd />
    },
    {
      id: 12,
      title: "Jobs",
      icon: <FcPortraitMode />
    },
    {
      id: 13,
      title: "Loans",
      icon: <FcMoneyTransfer />
    },
    {
      id: 14,
      title: "Real  Estate",
      icon: <FcHome />
    },
    {
      id: 15,
      title: "PG/Hotel",
      icon: <LuHotel />
    },
    {
      id: 16,
      title: "Show More",
      icon: <FaChevronCircleDown />
    },
  ]

  return (
    <>

      <div className=' mt-5 flex  justify-center'>

        <div className='w-full grid grid-cols-4 md:grid-cols-8 place-items-center '>

          {iconContainer.map(({ id, title, icon }) => (

            <div key={id} className='w-20 h-14 p-1 m-1 flex flex-col'>
              <div className='text-xl mx-auto pb-1'>{icon}</div>
              <p className='text-[11px] font-semibold text-center '>{title}</p>
            </div>
          )
          )}

        </div>

      </div>

        <div className='text-[10px] relative inline-block rounded-md left-[27px] px-[4px] text-red-600 font-bold top-[-15px] md:hidden border-red-500 border-[2px]'>
        Instant
        </div>

      {/* Poster */}
      {/* <div className=' bg-blue-200 flex flex-row p-3 mx-4 md:mx-8 rounded-lg h-[9rem] md:h-[15rem] md:mt-10 gap-2 md:gap-6'>

        <div className=' w-[45%] md:w-[50%] md:p-10 '>

          <p className='text-gray-500 text-xs md:text-2xl '>Connect With</p>
          <h1 className='text-blue-900 font-bold text-xl md:text-4xl'>17.1 Crore+ Buyers <span className='text-xs md:text-lg  text-gray-500 font-normal'>on</span> <span className='text-gray-700 text-xs md:text-xl'>Justdial</span> </h1>

          <button className='text-white bg-blue-950 rounded-lg px-3 py-2 md:py-[4px] text-[12px] md:text-xl mt-2 md:mt-4 md:px-3'>List your business for 
          <span className='bg-red-600 px-1 md:px-3 md:text-lg md:py-[2px] rounded-tl-lg relative left-[14px] md:left-[14px]'>FREE</span></button>

        </div>

        <div className=' w-[53%] md:w-[50%]'>
          <img src={businessmanImg} alt="No Image" className='object-fit w-[100%] h-full' />
        </div>

      </div> */}

      {/* Home Services */}
      <div className='md:pt-6' >
        <HomeService />
      </div>

    </>
  )
}

export default Home