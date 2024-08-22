'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { CartSidebarContext } from '@/context/CartSidebarContext';
import { WishlistSidebarContext } from '@/context/WishlistSidebarContext';

const Header = () => {
    const { handleOpenSidebar } = useContext(CartSidebarContext)
    const {handleOpenWishlistSidebar} = useContext(WishlistSidebarContext)
    return (
        <header className='w-full p-4 sticky shadow-md top-0 z-30 bg-white '>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl'>Store</h1>
                <ul className='flex gap-7'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">Shop</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
                <ul className='flex gap-3 items-center text-[1.5rem]'>
                    <li><button onClick={handleOpenSidebar}><IoBagHandleOutline /></button></li>
                    <li><button onClick={handleOpenWishlistSidebar}><IoIosStarOutline /></button></li>
                    <li><Link href="#"><CiUser /></Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header