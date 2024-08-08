// import React from 'react'

import PlayStore from '../assets/icons/playstore_logo.svg'
import AppStore from '../assets/icons/appstore_logo.svg'
import Windows from '../assets/icons/windows_logo.svg'



const AppDowLinkGroup = () => {
  return (
    <ul className="flex gap-[23px] items-center">
        <li>
            <a href="#">
                <img className='w-8 h-8 object-cover' src={PlayStore}/>
            </a>
        </li>
        <li>
            <a href="#">
                <img className='w-8 h-8 object-cover' src={AppStore}/>
            </a>
        </li>
        <li>
            <a href="#">
                <img className='w-6 h-6 object-cover' src={Windows}/>
            </a>
        </li>
    </ul>
  )
}

export default AppDowLinkGroup