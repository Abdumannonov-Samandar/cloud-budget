// import React from 'react'

import FooterListGroup from "../FooterListGroup"

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] pt-[85px] pb-[86px]">
        <div className="container mx-auto px-4 max-w-[1140px]">
            <FooterListGroup/>
            <p className="font-normal text-[12px] leading-[14px] text-[#101010] text-start">Copyright 2018 CloudBudget</p>
        </div>
    </footer>
  )
}

export default Footer