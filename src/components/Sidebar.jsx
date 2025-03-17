import Link from "next/link"
const Sidebar = ({ isOpen }) => {
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
                <Link href="/contact" className="mt-4 w-full h-10 text-white text-2xl flex items-center justify-center" >
                <div className="w-[40%] h-full p-2 flex items-center justify-end">
                    <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div className="w-[60%] h-full flex items-center justify-start p-2 text-[18px]">Contact</div>
                </Link>
            </ul>
        </div>
    </div>
  )
}
export default Sidebar