'use client'

import React from 'react'

import { useRouter } from "next/navigation";
import '@/app/googleFont.css'
import Sidebar from './Sidebar'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const router = useRouter()

    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const handleLogout = async () => {
    try {
        const res = await fetch('/api/logout', {
            method: "POST",
        })
        if (!res.ok) {
            console.log("Logout fail")
        }
        const data = await res.json()
        router.push(data.redirectUrl)
    } catch (err) {
        console.log(err)
    }
  }
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <div>
        <div className="w-full h-16 bg-gray-800 flex justify-between p-2 pl-4 items-center border-b-1 border-b-white">
            <button onClick={toggleSidebar} className='cursor-pointer'>
                <span className="material-symbols-outlined text-3xl text-white">menu</span>
            </button>
            <div className="w-[420px] h-full flex items-center justify-center">
            </div>
            <div className="w-40 h-auto flex justify-between p-2 gap-2">
                <div className="w-10 h-10 rounded-4xl bg-white flex items-center justify-center border-1 border-black">
                    <span className="material-symbols-outlined">question_mark</span>
                </div>
                    <div className="relative">
                        <div onClick={toggleDropdown} className=" h-full w-full flex items-center">
                            <div className="w-10 h-10 rounded-4xl bg-white"></div>
                            <span className="material-symbols-outlined text-[100px] text-white">arrow_drop_down</span>

                            <div 
                            className={`absolute z-30 top-full right-0 mt-2 w-40 bg-white border shadow-lg transition-all duration-300 overflow-hidden ${
                                isDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <ul className="text-black">
                                <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Sidebar isOpen={isSidebarOpen}/>

    </div>
  )
}
export default Header