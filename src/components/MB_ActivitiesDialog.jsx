'use client'

import React from "react"
import { Time } from "@/app/function/Time"

const ActivitiesPanel = ({ isActivitiesOpen, setIsActivitiesOpen , contents }) => {
  return (
    <>
      {isActivitiesOpen && 
        <div className="md:hidden w-full h-1/2 p-2 flex flex-col bg-white border-1 border-black absolute top-[15%] z-20">
          <h1 className="text-3xl">Activities this mounth</h1>
          <div className="w-full h-3/4 overflow-y-auto">
          {contents.length > 0 && 
            contents.map((val,i) => 
              <li key={i} className="w-full h-10 mt-1 flex items-center">
              <div className="h-full w-[60%] flex items-center">
                <span className="w-2 h-2 rounded-full mr-2 bg-green-700"></span>
                <div className="text-[16px]">{val.title}</div>
              </div>
              <div className="h-full w-[40%] flex items-center justify-end pr-2">{Time(val.timestamp)}</div>
            </li>
            )
          }
            
            
          </div>
          <div className="w-full h-[50px] flex items-center justify-end p-2 pr-4 gap-10">
            <button 
            type="button" 
            className="w-10 h-5 cursor-pointer bg-transparent text-cyan-400"
            onClick={() => setIsActivitiesOpen(false)}
            >OK</button>
          </div>
        </div>
      }
    </>
  )
}
export default ActivitiesPanel