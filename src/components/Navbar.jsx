import React from 'react'
import logo from '../assets/cozylogored.png'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const linkClass = 'pb-5 text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    return (
        <nav className='bg-purple-950 border-b border-orange-950'>
            <div className='max-auto max-w-8xl px-3 sm:px-8 lg:px-7'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
                            <img className='h-10 w-auto scale-150'  src={logo} alt='React Jobs' />
                            <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                CozyPotion Games
              </span>
                        </NavLink>
                        <div className='md:ml-auto'>
                            <div className='flex space-x-2 sm:pt-3'>
                                <NavLink to='/' className={linkClass}>
                                    Home
                                </NavLink>
                                <NavLink to='/Games' className={linkClass}>
                                    Games
                                </NavLink>
                                <NavLink to='/Socials' className={linkClass}>
                                    Socials
                                </NavLink>
                                <NavLink to='/About' className={linkClass}>
                                    About
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
