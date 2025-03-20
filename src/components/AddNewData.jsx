'use client'

import React from 'react'
import TagPanel from './TagPanel'
import Tag from './Tag'

const AddNewData = ({ isAddDialogVisible , setIsAddDialogVisible, loadContent , addTag , setAddTag }) => {
    const [isTagPanelOpen , setIsTagPanelOpen] = React.useState(false)
    const [title, setTitle] = React.useState("");
    const [url,setUrl] = React.useState('')
    const [description, setDescription] = React.useState("");
    

    const opentagPanel = () => {
        setIsTagPanelOpen((prev) => !prev)
    }
    const handleCancle = () => {
        setIsAddDialogVisible(false)
        setTitle("");
        setUrl('')
        setDescription("");
        setAddTag([])
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
                body: JSON.stringify({ 
                    title: title, 
                    image: url,
                    description: description,
                    tag: addTag.join('-')
                })
            })
        } catch (error) {
            console.log(error)
        }
        setIsAddDialogVisible(false);
        setTitle("");
        setUrl('')
        setDescription("");
        setAddTag([])
        loadContent();
    }

  return (
    <div> {isAddDialogVisible && (
        <div className="w-full md:w-1/2 md:h-[55%] p-2 bg-white border-1 border-black absolute top-[15%] right-0 md:right-1/4 md:rounded-xl z-30">
            <div className="w-full h-[10%] flex p-2 items-center text-2xl">Add new data</div>
            <div className=" w-full h-[70%] md:h-[55%] flex">
                <div className="w-[100%] pl-2 pt-2 pr-2 flex flex-col">
                    <p className="text-xl">Title</p>
                    <input className="p-1 w-full h-7 border-b-1 border-gray-400 mb-2 placeholder-gray-400 
                                focus:outline-none pt-3 leading-normal" 
                                type="text" placeholder="Title.." 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} />
                    <p className="text-xl">Image src</p>
                    <input className="p-1 w-full h-7 border-b-1 border-gray-400 mb-2 placeholder-gray-400 
                            focus:outline-none pt-3 leading-normal" type="text" 
                            placeholder="Image src.." 
                            value={url} 
                            onChange={(e) => setUrl(e.target.value)} />
                    <div className=" w-full h-[20%] flex gap-3 items-center">
                        <p className="text-xl md:text-2xl">Tags</p>
                        <button
                        type="button"
                        className="w-24 h-8 md:h-8 rounded-xl cursor-pointer 
                            bg-gradient-to-r from-red-500 to-red-700 
                            text-white font-semibold shadow-md 
                            flex items-center justify-center 
                            transition-transform transform hover:scale-105 active:scale-95"
                            onClick={opentagPanel}
                        >
                            <span className="material-symbols-outlined mr-1">add</span>
                            <p>ADD</p>
                        </button>
                    </div>
                    <div className="w-full h-[20%] bg-white md:border-1 border-black flex items-center p-2 gap-2 overflow-x-auto overflow-y-hidden">
                        {addTag.map((tag , i) => (
                             <Tag key={i} tag={tag} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-[20%] md:h-[20%] mt-2">
                <div className="w-full h-[30%] ">Discription:</div>
                <input 
                    type="text" 
                    className="w-full h-10 text-[14px] bg-white placeholder-gray-400 
                                focus:outline-none pt-3 leading-normal"
                    placeholder="Write something here!"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="w-full h-[13%] flex items-center justify-end gap-10 pr-10">
                <button onClick={handleCancle} type="button" className="w-10 h-5 cursor-pointer bg-transparent text-cyan-400">CANCLE</button>
                <button type="button" className="w-10 h-5 cursor-pointer bg-transparent text-cyan-400" onClick={handleAddDataSubmit}>ADD</button>
            </div>
            <TagPanel isTagPanelOpen={isTagPanelOpen} setIsTagPanelOpen={setIsTagPanelOpen} addTag={addTag} setAddTag={setAddTag} />
        </div>
    )}
    </div>
  )
}
export default AddNewData