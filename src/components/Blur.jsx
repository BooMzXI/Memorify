'use client'

import React from "react"
import Alert from "./Alert"

const Blur = () => {
    const [isAlertVisible , setIsAlertVisible] = React.useState(true)
  return (
    <div> {isAlertVisible && 
        <div className="absolute inset-0 bg-black/30 flex justify-center items-center backdrop-blur-[2px] transition-all duration-300">
            <Alert isAlertVisible={isAlertVisible} setIsAlertVisible={setIsAlertVisible} />
        </div>
    }
    </div>
  )
}
export default Blur