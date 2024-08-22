import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-[#F7F7F7] py-5 gap-5 flex justify-center items-center flex-col'>
            <section className='flex w-full justify-around'>
                <div className='flex flex-col items-center'>
                    <Link href='#'>Home</Link>
                    <Link href='#'>About</Link>
                    <Link href='#'>Contact Us</Link>
                </div>
                <div className='flex flex-col items-center'>
                    <Link href='#'>Home</Link>
                    <Link href='#'>About</Link>
                    <Link href='#'>Contact Us</Link>
                </div>
            </section>
            <div>
                <p>© 2023 Store. All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer