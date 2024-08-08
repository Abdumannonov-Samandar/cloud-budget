// import React from 'react'

import ServeceListGroup from "./ServeceListGroup"
import SocialListGroup from "./SocialListGroup"
import VISA from '../assets/icons/visa.svg'

const FooterListGroup = () => {
  return (
    <ul className="grid grid-cols-4 items-start gap-[30px] mb-[100px]">
        <li>
            <h3 className="font-semibold text-[18px] leading-[21px] text-[#101010] mb-[33px]">Address</h3>
            <address>
                <p className="not-italic font-normal text-[12px] leading-[18px] text-[#101010] pr-24">
                    Pipang Ltd, Griva Digeni,
                    81-83 Jacovides Tower, 1st Floor
                    1090 Picosia USA
                </p>
            </address>
        </li>
        <li>
            <h3 className="font-semibold text-[18px] leading-[21px] text-[#101010] mb-[33px]">Services</h3>
            <ServeceListGroup/>
        </li>
        <li className="flex flex-col">
            <h3 className="font-semibold text-[18px] leading-[21px] text-[#101010] mb-[33px]">Get in Touch</h3>
            <a className='mb-[11px] font-normal text-[12px] leading-[14px] text-[#101010]' href='info@cloudbudget.com'>
                <p className="group relative w-max">
                    <span>info@cloudbudget.com</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black/50 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black/50 group-hover:w-3/6"></span>
                </p>
            </a>
            <a className='mb-5 font-normal text-[12px] leading-[14px] text-[#121212]' href='tel:+18447217120'>
                <p className="group relative w-max">
                    <span>+1 844-721-7120</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black/50 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black/50 group-hover:w-3/6"></span>
                </p>
            </a>

            <SocialListGroup/>
        </li>
        <li>
            <h3 className="font-semibold text-[18px] leading-[21px] text-[#101010] mb-[33px]">We Support</h3>
            <a href="#">
                <img className="w-[216px] h-[31px]" src={VISA} alt="visa car img" />
            </a>
        </li>
    </ul>
  )
}

export default FooterListGroup