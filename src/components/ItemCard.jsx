'use client'
import React, { useState } from 'react';
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cart/cartSlice';

const ItemCard = ({ product }) => {

    const [addMessage, setAddMessage] = useState(false)

    const dispatch = useDispatch()
    const handAddToCart = () => {
        dispatch(addToCart(product))
        console.log(product)
        setAddMessage(true)
        setTimeout(() => {
            setAddMessage(false)
        },2000)
    }

    return (
        <div className='flex gap-2 flex-col items-center w-[16rem] h-[24rem] p-2 flex-shrink-0 group'>
            <div className='relative w-full h-[18rem]'>
                <div
                    className='w-full h-full bg-cover bg-center'
                    style={{ backgroundImage: `url(${product?.image})` }}
                ></div>
                <div className='absolute top-[35%] right-[-3%] flex flex-col gap-2 opacity-0 group-hover:right-[3%] group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                    <button onClick={handAddToCart} className='p-2 text-3xl bg-white rounded-full'><IoBagHandleOutline /></button>
                    <button className='p-2 text-3xl bg-white rounded-full'><IoIosStarOutline /></button>
                </div>
                {addMessage && 
                <div className='w-full flex absolute bottom-[0%] opacity-1 transition-all duration-300 ease-in-out'>
                    <span className='bg-green-500 text-white p-1 w-full text-center'>Added to Cart Successfully!</span>
                </div>
                }
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <h3 className='text-xl'>{product?.price}</h3>
                <p className='text-sm text-[#7b7a7a]'>{product?.name}</p>
            </div>
        </div>
    )
}

export default ItemCard;
