// import React from 'react'

import CLOD from '../assets/icons/blut_1.svg'
import SEC from '../assets/icons/secure_2.svg'
import DOW from '../assets/icons/dow_3.svg'
import CSV from '../assets/icons/csv_4.svg'

import ONE from '../assets/icons/one.svg'
import Two from '../assets/icons/two.svg'
import Three from '../assets/icons/three.svg'
import Four from '../assets/icons/four.svg'

const TechListGroup = () => {
  return (
    <ul className="grid grid-cols-4 items-center max-w-[1110px] w-full gap-[30px]">
                        <li className="relative pl-[34px] h-[226px] pr-[30px] pb-[30px]">
                            <img className='w-[117px] h-[120px] mx-auto' src={ONE} alt='Cloud Storage'/>
                            <img className='absolute w-20 h-20 mx-auto left-0 right-0 top-[57px]' src={CLOD} alt='Cloud Storage'/>

                            <h3 className='font-semibold text-[18px] leading-[21.6px] text-black pt-4 mb-[10px]'>Cloud Storage</h3>
                            <p className='font-semibold text-[12px] leading-[14.4px] text-black'>Access your account from anywhere in the world on any device</p>
                        </li>
                        <li className="relative pl-[34px] h-[226px] pr-[30px] pb-[30px]">
                            <img className='w-[117px] h-[120px] mx-auto' src={Two} alt='Secure'/>
                            <img className='absolute w-[66px] h-[66px] mx-auto left-0 right-0 top-[60px]' src={SEC} alt='Secure'/>

                            <h3 className='font-semibold text-[18px] leading-[21.6px] text-black pt-4 mb-[10px]'>Secure</h3>
                            <p className='font-semibold text-[12px] leading-[14.4px] text-black'>All your information is stored on secure cloud servers</p>
                        </li>
                        <li className="relative pl-[34px] h-[226px] pr-[30px] pb-[30px]">
                            <img className='w-[117px] h-[120px] mx-auto' src={Three} alt='PDF Download'/>
                            <img className='absolute w-[70px] h-[70px] mx-auto left-0 right-0 top-[58px]' src={DOW} alt='PDF Download'/>

                            <h3 className='font-semibold text-[18px] leading-[21.6px] text-black pt-4 mb-[10px]'>PDF Download</h3>
                            <p className='font-semibold text-[12px] leading-[14.4px] text-black'>Download any of your reports in PDF format</p>
                        </li>
                        <li className="relative pl-[34px] h-[226px] pr-[30px] pb-[30px]">
                            <img className='w-[117px] h-[120px] mx-auto' src={Four} alt='CSV Download'/>
                            <img className='absolute w-[47px] h-[54px] mx-auto left-0 right-0 top-[66px]' src={CSV} alt='CSV Download'/>

                            <h3 className='font-semibold text-[18px] leading-[21.6px] text-black pt-4 mb-[10px]'>CSV Download</h3>
                            <p className='font-semibold text-[12px] leading-[14.4px] text-black'>All your information is stored on secure cloud servers</p>
                        </li>
                    </ul>
  )
}

export default TechListGroup