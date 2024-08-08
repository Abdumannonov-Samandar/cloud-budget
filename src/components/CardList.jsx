// import React from 'react'

import CARD1 from '../assets/images/card_1.jpg'
import CARD2 from '../assets/images/card_2.jpg'
import CARD3 from '../assets/images/card_3.jpg'

const CardList = () => {
  return (
    <ul className="flex items-center gap-[30px]  text-center">
        <li className=' relative'>
            
                <img className='w-[350px] h-[250px] rounded-[8px]' src={CARD1} alt='Supports All Currencies and Cards'/>
            
            <div className='absolute top-40 right-0 left-0 max-w-[293px] rounded-[8px] bg-white shadow-boxshadow1 pt-[33px] px-5 pb-[25px] flex flex-col gap-5 mx-auto'>
                <h3 className='font-bold text-[18px] leading-[21px] text-[#101010]'>Supports All Currencies and Cards</h3>
                <p className='font-semibold text-[12px] leading-[18px] text-[#101010] px-5'>We support all popular currencies and is fully customizable to add</p>
                <a className='font-semibold text-[12px] leading-[18px] text-[#ED4C5C] mx-auto' href='#'>
                    <p className="group relative w-max">
                        <span>Read More</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                    </p>
                </a>
            </div>
        </li>
        <li className=' relative'>
            
                <img className='w-[350px] h-[250px] rounded-[8px]' src={CARD2} alt='Manage your expenses on the go'/>
            
            <div className='absolute top-40 right-0 left-0 max-w-[293px] rounded-[8px] bg-white shadow-boxshadow1 pt-[33px] px-5 pb-[25px] flex flex-col gap-5 mx-auto'>
                <h3 className='font-bold text-[18px] leading-[21px] text-[#101010]'>Manage your expenses on the go</h3>
                <p className='font-semibold text-[12px] leading-[18px] text-[#101010] px-5'>You can access your account from anywhere in the world on any device</p>
                <a className='font-semibold text-[12px] leading-[18px] text-[#ED4C5C] mx-auto' href='#'>
                    <p className="group relative w-max">
                        <span>Read More</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                    </p>
                </a>
            </div>
        </li>
        <li className=' relative'>
            
                <img className='w-[350px] h-[250px] rounded-[8px]' src={CARD3} alt='Cloud Budget Management Software'/>
            
            <div className='absolute top-40 right-0 left-0 max-w-[293px] rounded-[8px] bg-white shadow-boxshadow1 pt-[33px] px-5 pb-[25px] flex flex-col gap-5 mx-auto'>
                <h3 className='font-bold text-[18px] leading-[21px] text-[#101010]'>Cloud Budget Management Software</h3>
                <p className='font-semibold text-[12px] leading-[18px] text-[#101010] px-5'>Our software is made so you can access and manage your budget</p>
                <a className='font-semibold text-[12px] leading-[18px] text-[#ED4C5C] mx-auto' href='#'>
                    <p className="group relative w-max">
                        <span>Read More</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                    </p>
                </a>
            </div>
        </li>
    </ul>
  )
}

export default CardList