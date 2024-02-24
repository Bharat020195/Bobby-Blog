"use client"
import React from 'react'
import Logo from '../public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Header = () => {
  const [Menu, SetMenu] = useState(false);


  const handleClick = () =>{

  SetMenu(!Menu)
  }
  return (
    <div className='bg-gradient-to-r from-[#FFA2A6] to-white/10 justify-between flex items-center h-20 lg:h-40 md:h-40 lg:mx-20 md:mx-20 rounded-b-3xl lg:px-10 md:px-10 px-4 shadow-lg'>
        <div className='lg:flex md:flex hidden'>
            <Image 
            src ={Logo}
            alt= 'No Image Found'
            height={0}
            width={0}
            className='lg:w-28 md:w-28 w-10 lg:h-28 md:h-28 h-10 '
            />

        </div>
        <div className='lg:hidden md:hidden flex items-center'>
       <div>< MdOutlineRestaurantMenu size={30} onClick={handleClick} className='relative'/>
        {Menu && (
          <ul className='absolute flex flex-col gap-10 p-10 left-0 bg-[#FFA2A6] rounded-xl shadow-lg font-bold'>
           <Link href='/'><li className='hover:text-white'>Home</li></Link>
           <Link href='/Recipe'><li className='hover:text-white'>Recipe</li></Link>
           <Link href='/About'><li className='hover:text-white'>About</li></Link>
           <Link href='/Subscribe'><li className='hover:text-white'>Subscribe</li></Link>
          </ul>
        ) }
        </div>
        <Link href='/'>
        <Image
        src={Logo}
        height={60}
        width={60}
        alt='No Image Found'
        className='ml-72 flex justify-center' />
        </Link>
        </div>
        <div className='hidden lg:flex md:flex'>
            <ul className='flex gap-10 '>
                <Link href='/' className='hover:text-white font-semibold'><li>Home</li></Link>
                <Link href='/Recipe' className='hover:text-white font-semibold'><li>Recipe</li></Link>
                <Link href='/About' className='hover:text-white font-semibold'><li>About</li></Link>
                <Link href='/Subscribe' className='hover:text-white font-semibold'><li>Subscribe</li></Link>

            </ul>
        </div>

    </div>
  )
}

export default Header