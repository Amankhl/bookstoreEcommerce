'use client'
import { WishlistSidebarContext } from '@/context/WishlistSidebarContext';
import Link from 'next/link';
import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";

const WishlistSidebar = () => {
    const { isWishlistSidebarOpen, handleCloseWishlistSidebar } = useContext(WishlistSidebarContext)
    const cartItems = [
        { id: 1, name: 'Ikigai: The Japanese Secret', quantity: 1, price: 10.99, image: 'https://i.pinimg.com/564x/50/41/84/5041846eb283ce4f89336417b3b4e516.jpg' },
        { id: 2, name: 'Atomic Habits', quantity: 2, price: 15.99, image: 'https://i.pinimg.com/564x/30/d7/59/30d759f5af80b6d22d129751273a26fc.jpg' },
        { id: 3, name: 'The Subtle Art of Not Giving a F*ck', quantity: 1, price: 12.99, image: 'https://i.pinimg.com/564x/3a/dc/ff/3adcff7a670cde2ea2bb8ceadb6cceac.jpg' },
    ];
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    return (
        <div onClick={handleCloseWishlistSidebar} className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity z-50 ${isWishlistSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <aside className={`fixed top-0 z-50 right-0 h-full w-72 bg-white shadow-lg transform transition-transform ${isWishlistSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={handleCloseWishlistSidebar} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                    <RxCross2 size={30} />
                </button>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Your Wishlist</h2>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center">
                                <img src={item.image} alt={item.name} className="w-15 h-16 object-cover rounded mr-4" />
                                <div>
                                    <h3 className="text-lg font-medium">{item.name}</h3>
                                    <p className="text-gray-600">Qty: {item.quantity}</p>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 border-t pt-4 w-full flex flex-col">
                        <p className="text-lg font-semibold">Total: ${totalAmount.toFixed(2)}</p>
                        <Link href="/cart" onClick={handleCloseWishlistSidebar} className="mt-4 w-full text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Checkout</Link>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default WishlistSidebar