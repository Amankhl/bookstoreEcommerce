'use client'
import { addToCart, decrementQuantity, removeFromCart } from '@/features/cart/cartSlice';
import { IoBagCheckOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

const Page = () => {

    // const handleQuantityChange = (id, quantity) => {
    //     setItems(items.map(item =>
    //         item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    //     ));
    // };


    const cartItems = useSelector(state => state.cart.items)

    const dispatch = useDispatch();

    const incrementToCart = (product) => {
        dispatch(addToCart(product))
    }
    const decrementfromCart = (id) => {
        dispatch(decrementQuantity(id))
    }
    const deleteItem = (id)=>{
        dispatch(removeFromCart(id))
    }

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

  return (
      <main className='w-full p-6 bg-gray-100 min-h-screen'>
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          <div className="bg-white overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                      <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                          <th className="px-6 py-3"></th>
                      </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                      {cartItems.map(item => (
                          <tr key={item.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {/* <input type="number" min="1" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} className="border border-gray-300 rounded-md p-1 w-16 text-center" /> */}
                                  <button onClick={() => decrementfromCart(item.id)} className="text-red-500 hover:text-red-700 text-xl">-</button>
                                  <span className='px-3 border text-lg'>{item.quantity}</span>
                                  <button onClick={() => incrementToCart(item)} className="text-blue-500 hover:text-blue-700 text-xl">+</button>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price * item.quantity}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <button
                                      onClick={() => deleteItem(item.id)}
                                      className="text-red-600 hover:text-red-800"
                                  >
                                      Delete
                                  </button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-lg font-semibold">${getTotal()}</span>
                  </div>
              </div>
          </div>
          <div className='w-full flex justify-center'>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 text-2xl flex items-center gap-1">Checkout<IoBagCheckOutline /> </button>
          </div>
    </main>
  )
}

export default Page