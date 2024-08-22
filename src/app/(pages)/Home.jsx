'use client';
import Banner from '@/components/Banner';
import Carousel from '@/components/Carousel'
import ItemCard from '@/components/ItemCard'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";


const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data.books))
            .catch(err => console.log(err))
    },[])

    return (
        <main className='w-full'>
            <Carousel />

            {/* Banners */}
            <section className='w-full flex justify-center gap-7 py-6'>
                <Banner title="Business books" src="https://i.pinimg.com/736x/8a/80/71/8a8071090c187e1e7fa38d35318be393.jpg" price="289" />
                <Banner title="Self-help books" src="https://i.pinimg.com/564x/6c/30/01/6c3001882241fb1c44970861fcaeecc8.jpg" price="249" />
                <Banner title="Biographies" src="https://i.pinimg.com/564x/eb/c7/b3/ebc7b3b48eeefb557b4938f3c8917978.jpg" price="379" />
            </section>

            {/* Trending Books */}
            <section className='w-full px-14 flex flex-col gap-3 py-5'>
                <div className='w-full flex justify-between'>
                    <h1 className='text-4xl font-semibold'>Trending Books</h1>
                    <Link href='#' className='flex items-center gap-2 text-2xl'>Show all books <FaArrowRightLong /></Link>
                </div>
                <div className='flex gap-4 has-scrollbar'>
                    {products.map((product) => (
                        <ItemCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Best Selling Books */}
            <section className='w-full px-14 flex flex-col gap-3 py-5'>
                <div className='w-full flex justify-between'>
                    <h1 className='text-4xl font-semibold'>Best Sellers</h1>
                    <Link href='#' className='flex items-center gap-2 text-2xl'>Show all books <FaArrowRightLong /></Link>
                </div>
                <div className='flex gap-4 has-scrollbar'>
                    {products.map((product) => (
                        <ItemCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Featured Books */}
            <section className='w-full px-14 flex flex-col gap-3 py-5'>
                <div className='w-full flex justify-between'>
                    <h1 className='text-4xl font-semibold'>Featured Books</h1>
                    <Link href='#' className='flex items-center gap-2 text-2xl'>Show all books <FaArrowRightLong /></Link>
                </div>
                <div className='flex gap-4 has-scrollbar'>
                    {products.map((product) => (
                        <ItemCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className='w-full flex flex-col items-center gap-12 py-5'>
                <h1 className='text-5xl font-semibold'>Features</h1>

                <div className='flex gap-16 text-3xl'>
                    <div className='flex flex-col items-center gap-1'>
                        <GiMoneyStack size={50} />
                        <h2>Cash On Delivery</h2>
                        <p className='text-[1.2rem] text-[#7D7D7D]'>COD on all orders</p>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <FaTruck size={50} />
                        <h2>Free Shipping</h2>
                        <p className='text-[1.2rem] text-[#7D7D7D]'>Free shipping on all orders</p>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <RiCustomerService2Fill size={50} />
                        <h2>24/7 Support</h2>
                        <p className='text-[1.2rem] text-[#7D7D7D]'>24/7 customer support</p>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <FaMoneyBillTransfer size={50} />
                        <h2>Easy Returns</h2>
                        <p className='text-[1.2rem] text-[#7D7D7D]'>100% money back</p>
                    </div>
                </div>

            </section>

            {/* Offer */}
            <section className='w-full flex justify-center p-10 gap-20 items-center'>
                <div className='relative group overflow-hidden'>
                <img className='transition-transform duration-300 ease-in-out group-hover:scale-110' src="https://i.pinimg.com/564x/7c/e8/93/7ce89369067e9cd5821538ff79c11064.jpg" alt="" />
                    <img className='absolute z-10 h-[20rem] w-[20rem] ' src="https://i.pinimg.com/564x/e1/14/09/e11409017c5a82ec9d49e8cfce4973dc.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p>SPECIAL OFFER <span className='text-white bg-[#9F8B82] px-1 rounded-sm'>-20%</span></p>
                    <h1 className='text-4xl font-semibold'>The Ultimate Business Bundle</h1>
                    <p className='text-[#7D7D7D] text-lg'>Get the ultimate business bundle and grow your business</p>
                    <button className='text-white w-24 bg-black text-lg px-3 py-1 hover:bg-gray-800'>₹499/-</button>
                </div>
            </section>

            {/* Subsribe */}
            <section className='w-full flex flex-col items-center justify-center py-10 gap-3'>
                <h1 className='text-4xl font-semibold'>Subscribe to our newsletter</h1>
                <div className='flex bg-white border border-black'>
                    <input type="text" placeholder='Enter your email' className='px-2 py-1 outline-none' />
                    <button className='text-white bg-black px-3 hover:bg-gray-800'>Subscribe</button>
                </div>

            </section>
        </main>
    )
}

export default Home