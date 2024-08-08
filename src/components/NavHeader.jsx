// import React from 'react'

const NavHeader = () => {
  return (
    <nav>
        <ul className='flex gap-6'>
            <li>
                <a className='font-bold text-[14px] leading-[16.8px] text-[white]' href='#'>
                    <p className="group relative w-max">
                        <span>OVERVIEW</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            <li>
                <a className='font-bold text-[14px] leading-[16.8px] text-[white]' href='#'>
                    <p className="group relative w-max">
                        <span>FEATURES</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            <li>
                <a className='font-bold text-[14px] leading-[16.8px] text-[white]' href='#'>
                    <p className="group relative w-max">
                        <span>TECHNOLOGY</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            <li>
                <a className='font-bold text-[14px] leading-[16.8px] text-[white]' href='tel:+998997777777'>
                    <p className="group relative w-max">
                        <span>CONTACT</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            <li>
                <a className='font-bold text-[14px] leading-[16.8px] text-[white]' href='#'>
                    <p className="group relative w-max">
                        <span>SIGN UP</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default NavHeader