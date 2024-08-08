// import React from 'react'

import FACE from '../assets/icons/facebook.svg'
import LIN from '../assets/icons/linkedin.svg'
import TW from '../assets/icons/twitter.svg'

const SocialListGroup = () => {
  return (
    <ul className='flex gap-3 items-center'>
        <li>
            <a className='hover:opacity-60' href='#'>
                <img className='w-[14px] h-[14px]' src={FACE} alt='facebook logo' />
            </a>
        </li>
        <li>
            <a className='hover:opacity-60' href='#'>
                <img className='w-[14px] h-[14px]' src={LIN} alt='linkedn logo' />
            </a>
        </li>
        <li>
            <a className='hover:opacity-60' href='#'>
                <img className='w-[14px] h-[14px]' src={TW} alt='twitter logo' />
            </a>
        </li>
    </ul>
  )
}

export default SocialListGroup