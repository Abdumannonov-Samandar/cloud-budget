// import React from 'react'
import Play from '../assets/icons/play_button.svg'
import Poster from '../assets/images/video_bg.png'


const VideoSection = () => {
  return (
    <section className="py-[95px] bg-white">
            <div className="container mx-auto px-4 max-w-[1140px]">
                <div className="flex gap-[125px] items-center relative">
                    <div className="max-w-[445px]">
                        <h2 className="font-semibold text-[36px] leading-[43px] text-black mb-6">Easy to Use Cloud Budget Management Software</h2>
                        <p className="font-normal text-[14px] leading-[19.6px] text-black mb-4">Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.</p>

                        <a className='font-semibold text-[#ED4C5C] text-[14px] leading-[19.6px]' href='#'>
                            <p className="group relative w-max">
                                <span>Learn More</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                            </p>
                        </a>
                    </div>
                    <img className='w-[445px] h-[311px] rounded-[15px]' src={Poster}/>
                    <button type='button'>
                        <img className='w-[66px] h-[66px] absolute right-80 top-[40%]' src={Play} alt='play icon img'/>
                    </button>
                </div>
            </div>
    </section>
  )
}

export default VideoSection