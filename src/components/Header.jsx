'use client'

import React from 'react'
import '@/app/googleFont.css'
import SearchBar from './SeachBar'
import Sidebar from './Sidebar'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div>
        <div className="w-full h-16 bg-gray-800 flex justify-between p-2 pl-4 items-center border-b-1 border-b-white">
            <button onClick={toggleSidebar} className='cursor-pointer'>
                <span className="material-symbols-outlined text-3xl text-white">menu</span>
            </button>
            <div className="w-[420px] h-full flex items-center justify-center">
                <SearchBar />
            </div>
            <div className="w-40 h-auto flex justify-between p-2 gap-2">
                <div className="w-10 h-10 rounded-4xl bg-white flex items-center justify-center border-1 border-black">
                    <span className="material-symbols-outlined">question_mark</span>
                </div>
                <div className="h-full w-[60%] flex items-center">
                    <div className="w-10 h-10 rounded-4xl bg-white"></div>
                    <span className="material-symbols-outlined text-[100px] text-white">arrow_drop_down</span>
                </div>
            </div>
        </div>

        <Sidebar isOpen={isSidebarOpen}/>

    </div>
  )
}
export default Header