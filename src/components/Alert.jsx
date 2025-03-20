'use client'
import React from "react"

const Alert = ({ isAlertVisible , setIsAlertVisible }) => {

const handleClick = () => {
    setIsAlertVisible(false)
}
  return (
    <> {isAlertVisible && 
        <div className="absolute p-4 bg-gradient-to-r from-red-50 to-red-100 border border-red-400 rounded-xl shadow-xl w-3/4 md:w-1/2 h-60 md:h-48 z-30">
    <h1 className="text-2xl font-bold text-red-600 opacity-90">⚠️ THIS SITE IS NOT SECURE</h1>
    <p className="mt-3 text-gray-700 opacity-90">
        If you want to register, <span className="font-semibold">PLEASE DON'T</span> reuse your password anywhere else. This site does not encrypt your password.
    </p>
    <div className="w-full h-auto flex p-2 items-center justify-end">
        <button 
            type="button" 
            className="text-lg text-blue-600 font-medium hover:text-blue-800 transition-colors"
            onClick={handleClick}
        >
            OK
        </button>
    </div>
</div>

    } 
    </>
  )
}
export default Alert