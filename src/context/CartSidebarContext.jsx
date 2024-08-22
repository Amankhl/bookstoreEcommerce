'use client'

import { createContext, useState } from "react";

export const CartSidebarContext = createContext('')

const CartSidebarProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleOpenSidebar = () => setSidebarOpen(prev => !prev);
    const handleCloseSidebar = () => setSidebarOpen(false);

    return (
        <CartSidebarContext.Provider value={{ isSidebarOpen, handleOpenSidebar, handleCloseSidebar }}>
            {children}
        </CartSidebarContext.Provider>
    )
}
export default CartSidebarProvider
