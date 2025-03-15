'use client'

import React from "react";
import DataBox from "./DataBox";
import SortedBox from "./Sorted";
import AddNewData from "./AddNewData";
import '@/app/ResponsivePage.css';
import './Effect.css'
import ActivitiesPanel from "./MB_ActivitiesDialog";

const ShowContent = () => {
  const [isAddDialogVisible, setIsAddDialogVisible] = React.useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = React.useState(false);
  const openAddDialog = () => {
    setIsAddDialogVisible((prev) => !prev);
  };
  const openActivitie = () => {
    setIsActivitiesOpen((prev) => !prev);
  }
  return (
    <div className=" h-[calc(100vh-80px)] w-full mt-4 flex justify-end">
      {(isAddDialogVisible || isActivitiesOpen) && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-all duration-300"></div>
      )}
      <div className="h-full w-full md:w-[80%] flex">
        <div className="h-full w-full md:w-3/4 flex flex-col items-center">

          <SortedBox />

          <div className="w-full h-10 gap-2 flex items-center justify-center mt-3">
            <button 
            type="button" 
            onClick={openAddDialog} 
            className="md:w-40 w-20 h-full bg-gray-800 rounded-2xl text-white flex items-center justify-center text-[15px] cursor-pointer">
              <span className="material-symbols-outlined">add</span>
              <p>ADD</p>
            </button>
            <button type="button" 
            className="md:hidden w-20 h-full bg-gray-800 rounded-2xl text-white flex items-center justify-center texts-[15px] cursor-pointer"
            onClick={openActivitie}
            >
              <p>Activities</p>
            </button>
          </div>

        <div className="w-full h-full pt-4 flex flex-col p-2 overflow-y-auto">
          {/* map data to databox here */}
        </div>

          
        </div>
        <div className="h-full hidden md:w-1/4 md:flex pt-4 pl-2 border-l-1 border-l-black flex-col">
          <h1 className="text-3xl">Activities this mounth</h1>
          {/* Map all activities here */}
          <li className="w-full h-10 mt-1 flex items-center">
            <div className="h-full w-[60%] flex items-center"> 
              <span className="w-2 h-2 rounded-full mr-2 bg-green-700"></span>
              <div className="text-[16px]">{/* Activities Here */}</div>
            </div>
            <div className="h-full w-[40%] flex items-center justify-end pr-2">{/* Time here */}</div>
          </li> 
    
        </div>
      </div>
      
      <ActivitiesPanel isActivitiesOpen={isActivitiesOpen} setIsActivitiesOpen={setIsActivitiesOpen} />
      <AddNewData isAddDialogVisible={isAddDialogVisible} setIsAddDialogVisible={setIsAddDialogVisible} />
    </div>
  );
};

export default ShowContent;
