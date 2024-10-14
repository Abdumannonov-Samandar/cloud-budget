// import React from 'react'

import CARD1 from '../assets/images/card_1.jpg'
import CARD2 from '../assets/images/card_2.jpg'
import CARD3 from '../assets/images/card_3.jpg'

const cardInitials = [
    {
        img: CARD1,
        title: "Supports All Currencies",
        text: "We support all popular currencies and is fully customizable to addditional currencies.",
        link: "#"
    },
    {
        img: CARD2,
        title: "Manage your expenses on the go",
        text: "You can access your account from anywhere in the world on any device.",
        link: "#"
    },
    {
        img: CARD3,
        title: "Cloud Budget Management Software",
        text: "Our software is made so you can access and manage your budget",
        link: "#"
    }
]

const CardList = () => {
  return (
    <ul className="flex items-center gap-[30px]  text-center">
        {cardInitials.map((card, index) => (
            <li key={index} className='relative'>
            
            <img className='w-[350px] h-[250px] rounded-[8px]' src={card.img} alt={card.title}/>
        
        <div className='absolute top-40 right-0 left-0 max-w-[293px] rounded-[8px] bg-white shadow-boxshadow1 pt-[33px] px-5 pb-[25px] flex flex-col gap-5 mx-auto'>
            <h3 className='font-bold text-[18px] leading-[21px] text-[#101010]'>{card.title}</h3>
            <p className='font-semibold text-[12px] leading-[18px] text-[#101010] px-5'>{card.text}</p>
            <a className='font-semibold text-[12px] leading-[18px] text-[#ED4C5C] mx-auto' href='#'>
                <p className="group relative w-max">
                    <span>Read More</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                </p>
            </a>
        </div>
        </li>    
        ))}
    </ul>
  )
}

export default CardList