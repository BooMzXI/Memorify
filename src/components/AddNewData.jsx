'use client'

import React from 'react'
import '@/app/ResponsivePage.css'
import TagPanel from './TagPanel'

const AddNewData = ({ isAddDialogVisible , setIsAddDialogVisible, loadContent }) => {
    const [isTagPanelOpen , setIsTagPanelOpen] = React.useState(false)
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const opentagPanel = () => {
        setIsTagPanelOpen((prev) => !prev)
    }

    const handleAddDataSubmit = async () => {
        if (!title.trim()) {
            alert("Please enter a title!");
            return;
        }
    
        if (!description.trim()) {
            alert("Please enter a description!");
            return;
        }

        try {
            await fetch("api/content/add", {
                method: "POST",
                body: JSON.stringify({ title: title, description: description })
            })
        } catch (error) {
            alert(error);
        }
        setIsAddDialogVisible(false);
        setTitle("");
        setDescription("");
        loadContent();
    }

  return (
    <div> {isAddDialogVisible && (
        <div className="databox w-full md:w-1/2 md:h-1/2 p-2 bg-white border-1 border-black absolute top-[15%] right-0 md:right-1/4 md:rounded-xl">
            <div className="w-full h-[10%] flex p-2 items-center text-2xl">Add new data</div>
            <div className="w-full h-[60%] md:h-[50%] flex">
                <div className="w-[30%] flex justify-center items-center">
                    <div className="w-full h-full bg-amber-300"></div>
                </div>
                <div className="w-[70%] pl-2 pt-2 pr-2 flex flex-col">
                    <p className="text-2xl">Title</p>
                    <input className="p-1 w-full h-7 border-b-1 border-gray-400 mb-2 placeholder-gray-400 
                                focus:outline-none pt-3 leading-normal" type="text" placeholder="Title.." value={title} onChange={(e) => setTitle(e.target.value)} />
                    <div className="w-full h-full flex gap-3 items-center">
                        <p className="text-xl md:text-2xl">Tags</p>
                        <button type="button"
                         className="w-20 h-5 md:h-2/4 rounded-xl cursor-pointer bg-red-500 text-white flex items-center justify-center"
                         onClick={opentagPanel}
                         >
                            <span className="material-symbols-outlined">add</span>
                            <p>ADD</p>
                        </button>
                    </div>
                    <div className="w-full h-full bg-white md:border-1 border-black flex items-center justify-center p-2"></div>
                </div>
            </div>
            <div className="w-full h-[20%] md:h-[25%] mt-2">
                <div className="w-full h-[20%] ">Discription:</div>
                <input 
                    type="text" 
                    className="w-full h-14 text-[14px] bg-white placeholder-gray-400 
                                focus:outline-none pt-3 leading-normal"
                    placeholder="Write something here!"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />


            </div>
            <div className="w-full h-[13%] flex items-center justify-end gap-10 pr-10">
                <button onClick={() => setIsAddDialogVisible(false)} type="button" className="w-10 h-5 cursor-pointer bg-transparent text-cyan-400">CANCLE</button>
                <button type="button" className="w-10 h-5 cursor-pointer bg-transparent text-cyan-400" onClick={handleAddDataSubmit}>ADD</button>
            </div>
            <TagPanel isTagPanelOpen={isTagPanelOpen} setIsTagPanelOpen={setIsTagPanelOpen}/>
        </div>
    )}
    </div>
  )
}
export default AddNewData