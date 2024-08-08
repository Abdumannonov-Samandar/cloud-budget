// import React from 'react'

import FormContact from "./FormContact"


const ContactSection = () => {
  return (
    <section className="pt-[117px] pb-[78px] bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
            <div className="flex items-start gap-[114px]">
                <div className="max-w-[434px]">
                    <h2 className="font-semibold text-[36px] leading-[43px] text-black mb-[60px]">Contact</h2>
                    <p className="font-normal text-[14px] leading-[19px] text-black">Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</p>
                </div>
                
                <FormContact />
            </div>
        </div>
    </section>
  )
}

export default ContactSection