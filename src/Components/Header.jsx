import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineCenterFocusStrong } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";

function Header() {
  return (
    <div>

      <div className=' flex flex-row items-center justify-between px-4 py-2'>

        <div className='text-2xl'>
          <FaUserCircle />
        </div>

        <div className='text-[2rem] text-blue-600 font-bold'>
          Just<span className='text-red-400'>dial</span>
        </div>

        <div className='flex flex-row justify-evenly items-center gap-4'>

          <div className='text-2xl'>

            <div className='border-[1px] border-red-600 w-[12px] h-[12px] rounded-xl bg-red-500 relative left-2 top-2 '>
              <div className='text-[10px] relative inline-block top-[-16px] left-[-2px] text-white p-[2px]'>54</div>
            </div>

            <div>
              <IoIosNotificationsOutline />
            </div>

          </div>

        </div>

      </div>

      {/* Search box  (fixed top-0)*/}
      <div className=' flex flex-row border-[1px] border-slate-200 rounded-md items-center mx-3 md:mx-auto justify-between  py-2  px-4 md:px-12 my-4 shadow-[inset_0px_0px_5px_-1px_#D3D3D3] md:max-w-[85%]'>

        <div className=' flex items-center flex-row md:gap-8'>

          <label htmlFor="search-box" className='inline-block text-xl md:text-2xl ' ><IoMdSearch /></label>

          <input type="search" id="search-box" placeholder='Restaurants near me ' className=' w-[95%] py-1 pl-[10px] placeholder-slate-600 placeholder:text-[14px] md:placeholder:text-lg' />

        </div>

        <div className='flex gap-2 md:gap-8 flex-row '>
          <label htmlFor="search-box" className='text-2xl md:text-3xl '><MdOutlineCenterFocusStrong /></label>

          <label htmlFor="search-box" className=' inline-block text-2xl' ><MdKeyboardVoice /></label>

        </div>

      </div>

    </div>
  )
}

export default Header