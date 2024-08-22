import React from 'react'

const Banner = ({ src, title, price }) => {
    return (
        <div className="relative bg-gray-100 p-6 w-[25rem] h-[25rem] overflow-hidden group">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${src})` }}
            />
            <div className="relative z-10 flex justify-between flex-col h-full">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <div className='flex flex-col gap-5'>
                    <p className="text-lg">Starting at <span className="font-bold">₹{price}</span></p>
                <a
                    href="#"
                    className="inline-block px-4 py-2 bg-black w-[35%] text-white text-sm font-medium hover:bg-gray-800"
                    >
                    Shop Now &rarr;
                </a>
                    </div>
            </div>
        </div>
    )
}

export default Banner
