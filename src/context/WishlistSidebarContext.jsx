'use client'

import { createContext, useState } from 'react'


export const WishlistSidebarContext = createContext("")

const WishlistSidebarProvider = ({ children }) => {
    const [isWishlistSidebarOpen, setWishlistSidebarOpen] = useState(false);

    const handleOpenWishlistSidebar = () => setWishlistSidebarOpen(prev => !prev);
    const handleCloseWishlistSidebar = () => setWishlistSidebarOpen(false);


  return (
      <WishlistSidebarContext.Provider value={{ isWishlistSidebarOpen , handleOpenWishlistSidebar, handleCloseWishlistSidebar}} >
      {children}
    </WishlistSidebarContext.Provider>
  )
}

export default WishlistSidebarProvider