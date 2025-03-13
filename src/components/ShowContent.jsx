'use client'

import React from "react";
import DataBox from "./DataBox";
import SortedBox from "./Sorted";
import AddNewData from "./AddNewData";
import '@/app/ResponsivePage.css';

const ShowContent = () => {
  const [isAddDialogVisible, setIsAddDialogVisible] = React.useState(false);

  const openAddDialog = () => {
    setIsAddDialogVisible((prev) => !prev);
  };

  return (
    <div className="h-[calc(100vh-80px)] w-full mt-4 flex md:flex-row justify-center gap-10">
      
      {/* Left side content */}
      <div className="fixedContentTocenter h-full w-full md:w-[40%] flex flex-col items-center">
        
        <SortedBox />

        <div className="w-full h-10 flex items-center p-2 justify-center mt-3">
          <button onClick={openAddDialog}
            type="button"
            className="w-32 h-8 flex items-center justify-center cursor-pointer bg-gray-800 rounded-[8px] text-white">
            <span className="material-symbols-outlined">add</span>
            <p className="text-[14px]">ADD</p>
          </button>
        </div>

        <div className="w-full h-[550px] mt-4 overflow-auto">
          {/*    Show all data here    */}
        <DataBox />
        </div>
      </div>

      {/* Right side content for showing activities */}
      <div className="showActivities w-full md:w-1/4 h-[calc(100vh-80px)] border-b-black border-l-1 absolute md:relative left-0 pl-2 mt-4 md:mt-0">
        <h1 className="mt-2 w-full h-10 p-2 text-3xl flex items-center">Activities this month</h1>

        {/* Activity Box */}
        <div className="mt-4 w-full h-7 flex items-center p-1 justify-between">
          <div className="w-2 h-2 rounded-full bg-green-800"></div>
        </div>
      </div>

      <AddNewData isAddDialogVisible={isAddDialogVisible} setIsAddDialogVisible={setIsAddDialogVisible} />
    </div>
  );
};

export default ShowContent;
