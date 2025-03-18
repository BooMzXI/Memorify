'use client'

import React from "react";
import DataBox from "./DataBox";
import SortedBox from "./Sorted";
import AddNewData from "./AddNewData";
import '@/app/ResponsivePage.css';
import './Effect.css'
import ActivitiesPanel from "./MB_ActivitiesDialog";
import { Time } from "@/app/function/Time"
import SearchBar from "./SeachBar";

const ShowContent = () => {
  const [isAddDialogVisible, setIsAddDialogVisible] = React.useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = React.useState(false);
  const [contents, setContent] = React.useState([]);
  const [searchInput , setSearchInput] = React.useState('')
  const [filteredContents, setFilteredContents] = React.useState([])
  const [addTag , setAddTag] = React.useState([])


  React.useEffect(() => {
    loadContent();
  }, [])
  const loadContent = async () => {
    const res = await fetch("/api/content/get");
    const data = await res.json();
    setContent(data);
  }
  const openAddDialog = () => {
    setIsAddDialogVisible((prev) => !prev);
  };
  const openActivitie = () => {
    setIsActivitiesOpen((prev) => !prev);
  }

  React.useEffect(() => {
    const filter = contents.filter((content) => {
      return content.title.toLowerCase().includes(searchInput.toLowerCase())
    })
    setFilteredContents(filter)
  },[searchInput , contents])
  
  return (
    <div className=" h-[calc(100vh-80px)] w-full mt-4 flex justify-end">
      {(isAddDialogVisible || isActivitiesOpen) && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-all duration-300"></div>
      )}
      <div className="h-full w-full md:w-[80%] flex">
        <div className="h-full w-full md:w-3/4 flex flex-col items-center">

          <SortedBox contents={contents || []} setContent={setContent} />

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

        <div className="w-full h-20 flex justify-center items-center">
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>

        <div className="w-full h-full pt-4 flex flex-col p-2 overflow-y-auto">
          {filteredContents.map((val, index) => (
            <DataBox 
            key={index} 
            title={val.title} 
            description={val.description}
            image={val.image}
            tag={val.tag}
            timestamp={val.timestamp}
            id={val.id}
            loadContent={loadContent} />
          ))}
        </div>

          
        </div>
        <div className="h-full hidden md:w-1/4 md:flex pt-4 pl-2 border-l-1 border-l-black flex-col">
          <h1 className="text-3xl">Activities this mounth</h1>
          {contents.length > 0 && (
            contents.map((val, i) => (
            <li key={i} className="w-full h-10 mt-1 flex items-center">
              <div className="h-full w-[60%] flex items-center"> 
                <span className="w-2 h-2 rounded-full mr-2 bg-green-700"></span>
                <div className="text-[16px]">{val.title}</div>
              </div>
              <div className="h-full w-[40%] flex items-center justify-end pr-2">{Time(val.timestamp)}</div>
            </li> 
            ))  
          )}
          
    
        </div>
      </div>
      
      <ActivitiesPanel isActivitiesOpen={isActivitiesOpen} setIsActivitiesOpen={setIsActivitiesOpen} contents={contents} />
      <AddNewData isAddDialogVisible={isAddDialogVisible} setIsAddDialogVisible={setIsAddDialogVisible} loadContent={loadContent} addTag={addTag} setAddTag={setAddTag} />
    </div>
  );
};

export default ShowContent;
