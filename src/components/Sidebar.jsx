'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
const Sidebar = ({ isOpen }) => {
    const router = useRouter()
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
  return (
    <div>
        <div className={`w-64 h-[calc(100vh-64px)] flex flex-col bg-gray-800 absolute transition-transform duration-300 z-20 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <ul>
                <Link href="/" className="mt-10 w-full h-10 text-white text-2xl flex items-center justify-center" >
                    <div className="w-[40%] h-full p-2 flex items-center justify-end">
                        <span className="material-symbols-outlined">home</span>
                    </div>
                    <div className="w-[60%] h-full flex items-center justify-start p-2 text-[18px]">Home</div>
                </Link>
                <div className="cursor-pointer mt-10 w-full h-10 text-white text-2xl flex items-center justify-center" >
                    <div className="w-[40%] h-full p-2 flex items-center justify-end">
                    <span className="material-symbols-outlined">logout</span>
                    </div>
                    <div className="w-[60%] h-full flex items-center justify-start p-2 text-[18px]" onClick={handleLogout}>Logout</div>
                </div>
            </ul>
        </div>
    </div>
  )
}
export default Sidebar