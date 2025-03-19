'use client'

import React from 'react'

import '@/app/googleFont.css'
import Sidebar from './Sidebar'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div>
        <div className="w-full h-16 bg-gray-800 flex justify-between p-2 pl-4 items-center border-b-1 border-b-white">
            <button onClick={toggleSidebar} className='cursor-pointer'>
                <span className="material-symbols-outlined text-3xl text-white">menu</span>
            </button>      
        </div>
        <Sidebar isOpen={isSidebarOpen}/>
    </div>
  )
}
export default Header