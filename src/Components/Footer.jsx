import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { PiFactoryBold } from "react-icons/pi";
import { RiQrScan2Line } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

function Footer() {
  const footerIcons = [
    {
      id: 1,
      icon: <IoMdHome />,
      title: "Home"
    },
    {
      id: 2,
      icon: <IoMailOutline />,
      title: "Leads"
    },
    {
      id: 3,
      icon: <PiFactoryBold />,
      title: "Stocks"
    },
    {
      id: 4,
      icon: <RiQrScan2Line />,
      title: "Pay"
    },
    {
      id: 5,
      icon: <FaRegNewspaper />,
      title: "News"
    }, {
      id: 6,
      icon: <IoMdMenu />,
      title: "More"
    }

  ]
  return (
    <div className=' bg-white w-screen'>

      <div className=' w-screen flex flex-row items-center gap-8'>
        {
          footerIcons.map(({ id, icon, title }) => (

            <div key={id} className='flex items-center flex-col w-[12%] md:w-[24%] '>
              <div className='text-2xl md:text-3xl'>
                {icon}
              </div>
              <p className='font-semibold text-xs md:text-[15px] '>{title}</p>
            </div>
          ))

        }

      </div>

      

    </div>
  )
}

export default Footer