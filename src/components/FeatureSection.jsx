// import React from 'react'

import CardList from "./CardList"

const FeatureSection = () => {
    return (
        <section className="pt-[63px] pb-[229px] bg-[#FAFAFA]">
            <div className="container mx-auto px-4 max-w-[1140px]">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-semibold text-[36px] leading-[43px] text-black mb-[63px]">Features</h2>
                    <CardList/>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection