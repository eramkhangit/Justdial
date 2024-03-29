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

            <div key={id} className='w-20 h-14 p-1 mb-1 flex flex-col'>
              <div className='text-2xl mx-auto'>{icon}</div>
              <p className='text-[12px] font-semibold text-center '>{title}</p>
            </div>
          )
          )}

        </div>

      </div>

        <div className='text-[10px] relative inline-block rounded-md left-[31px] px-[4px] text-red-600 font-bold top-[-15px] md:hidden border-red-500 border-[2px]'>
        Instant
        </div>


      {/* Home Services */}
      <div className='md:pt-6 border-2 border-red-500' >
        <HomeService />

      </div>

    </>
  )
}

export default Home