import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import AcRepair from '../Image/ACrepair.webp'
import Chemist from '../Image/Chemist.webp'
import Engineer from '../Image/Engineer.jpg'
import Painter from '../Image/Painter.jpg'

function HomeService() {

    const cards = [
        {
            id: 1,
            image: AcRepair,
            title: "AC REPAIR"
        },
        {
            id: 2,
            image: Chemist,
            title: "KEEP CLEANING"
        },
        {
            id: 3,
            image: Engineer,
            title: "CONTROL"
        },
        {
            id: 4,
            image: Painter,
            title: "MOVE"
        }
    ]

    return (
        <div className=' shadow-[2px_0px_8px_1px_#D3D3D3] rounded-tr-xl rounded-tl-2xl'>

            <div className='px-2 pt-4'>

                <p className='pt-1 rounded-2xl border-gray-400 w-[10%] bg-slate-400 relative mx-auto'></p>

                <div className='flex items-center justify-between pb-2 md:pb-4  font-semibold' >
                    <h2 className=' md:text-2xl text-slate-800'>Home Services</h2>
                    <div className='font-bold text-xl md:text-2xl' ><IoIosArrowForward /></div>
                </div>

                <div className='w-full flex flex-row justify-center items-center gap-4 h-[8rem] md:h-[14rem]'>

                {/*  Cards */}
                {
                    cards.map(({ id, image, title }) => (
                        
                        <div key={id} className='rounded-lg w-[23%] h-[90%] '>
                           <div className='w-full h-full  '>
                           <img src={image} alt="No image" className='object-cover h-full rounded-lg w-full' />
                           </div>
                            <p className='relative top-[-59px] md:top-[-70px] md:text-white text-black text-[14px] md:text-3xl md:font-bold px-2 font-semibold'>{title}</p>
                        </div>
                    ))
                }

                </div>

            </div>

        </div>
    )
}

export default HomeService