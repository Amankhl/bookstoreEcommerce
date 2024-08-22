'use client'
import { CartSidebarContext } from '@/context/CartSidebarContext'
import { addToCart, clearCart, decrementQuantity, removeFromCart } from '@/features/cart/cartSlice';
import Link from 'next/link';
import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';

const CartSidebar = () => {
    const { isSidebarOpen, handleCloseSidebar } = useContext(CartSidebarContext)

    const cartItems = useSelector(state => state.cart.items)

    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        console.log(product)
    }
    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id))
        console.log(id)
    }
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
        console.log(id)
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div onClick={handleCloseSidebar} className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity z-50 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <aside className={`fixed top-0 z-50 right-0 h-full w-72 bg-white shadow-lg transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                <button onClick={handleCloseSidebar} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                    <RxCross2 size={30} />
                </button>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center">
                                <img src={item.image} alt={item.name} className="w-15 h-16 object-cover rounded mr-4" />
                                <div>
                                    <h3 className="text-lg font-medium">{item.name}</h3>
                                    <div className="flex items-center justify-between">
                                    <p className="text-gray-600">Qty: {item.quantity}</p>
                                    <div className="flex items-center border gap-3">
                                    <button onClick={() => handleAddToCart(item)} className="text-blue-500 hover:text-blue-700 text-xl">+</button>
                                    <button onClick={() => handleDecrementQuantity(item.id)} className="text-red-500 hover:text-red-700 text-xl">-</button>
                                    </div>
                                    <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700 text-sm">Remove</button>
                                    </div>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {cartItems.length === 0 && <p className="text-center mt-4">Your cart is empty.</p>}
                    {cartItems.length > 0 && <button onClick={handleClearCart} className='w-full text-center text-grey-500 py-2 mt-4'>Clear Cart</button>}
                    <div className="mt-6 border-t pt-4 w-full flex flex-col">
                        <p className="text-lg font-semibold">Total: ${totalAmount.toFixed(2)}</p>
                        <Link href="/cart" onClick={handleCloseSidebar} className="mt-4 w-full text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Checkout</Link>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default CartSidebar
