// import React from 'react'

import AppDowLinkGroup from "./AppDowLinkGroup"

import Sl from '../assets/images/slider.png'

const AppDowSection = () => {
  return (
    <section className="pt-[94px] pb-[95px] bg-[#ED4C5C]">
        <div className="container px-4 mx-auto max-w-[1140px]">
            <div className="flex items-center gap-[81px]">
                <div className="max-w-[445px]">
                    <h2 className="font-semibold text-[36px] leading-[43px] text-white mb-6">Stay focused on saving money</h2>
                    <p className="font-normal text-[14px] leading-[19px] text-white mb-10">It is important to stay focused on saving money in any way you can. We help you monitor your spending habits so you can easily spot and cut any unnecessary expenses. Simply join today to get started!</p>
                    <AppDowLinkGroup/>
                </div>
                <img className="w-[533px] h-[311px] object-cover" src={Sl}/>
            </div>
        </div>
    </section>
  )
}

export default AppDowSection