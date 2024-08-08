
// import React from 'react'
import Usa from '../assets/icons/usa.svg'
import up from '../assets/icons/pas.svg'

const SelectLanguage = () => {
return (
    <div className="flex max-w-[96px]">
        <button id="states-button" data-dropdown-toggle="dropdown-states" className="z-10 inline-flex items-center text-sm font-bold text-center text-white" type="button">
            <div className='flex items-center gap-[5px]'>
                <img className='rounded-full w-8 h-8 object-cover' src={Usa} alt='usa flag img'/>
                    <span className='ml-[6px]'>EN</span>
                <img className='w-5 h-5' src={up} alt='upicon'/>
            </div>
        </button>

        <div id="dropdown-states" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="laung-button">
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <div className="inline-flex items-center">
                            <img src='' alt='img'/>
                                <span>RU</span>548719
                            <img className='w-5 h-5' src={up} alt='upicon'/>
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <div className="inline-flex items-center">
                            <img src='' alt='img'/>
                                <span>UZ</span>
                            <img className='w-5 h-5' src={up} alt='upicon'/>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
)
}


export default SelectLanguage