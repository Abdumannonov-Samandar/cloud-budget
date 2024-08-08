// import React from 'react'

import TechListGroup from "./TechListGroup"




const TechnologySection = () => {
    return (
        <section className="pt-[63px] pb-[104px] bg-white">
            <div className="container mx-auto px-4 max-w-[1140px]">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-semibold text-[36px] leading-[43px] text-black mb-[52px]">Technology</h2>
                    
                    <TechListGroup />
                </div>
            </div>
        </section>
    )
}

export default TechnologySection