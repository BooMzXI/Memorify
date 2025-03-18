import React from "react"

const TagPanel = ({isTagPanelOpen , setIsTagPanelOpen , addTag, setAddTag}) => {
  const [tagInput, setTagInput] = React.useState("");
  const handleAddTags = async () => {
    if (!tagInput.trim()) return;
    setAddTag((prev) => [...prev , tagInput])
    setTagInput("");
    setIsTagPanelOpen(false)
  }
  return (
    <> {isTagPanelOpen && 
        <div className="absolute w-3/4 h-[100px] right-10 top-15 md:right-25 p-2 md:top-25 bg-white border-1 border-black">
            <div className="w-full h-20px">Tag name</div>
            <input 
            type="text"
            placeholder="Tag name..."
            className="w-full h-[30px] border-gray-400 mb-2 placeholder-gray-400 
                focus:outline-none leading-normal p-2 border-b-1"
            onChange={(e) => setTagInput(e.target.value)}
            />
            <div className="w-full h-[30px] flex items-center justify-end gap-10">
            <button type="button" 
            className="w-10 h-5 cursor-pointer bg-transparent text-cyan-400"
            onClick={() => setIsTagPanelOpen(false)}
            >CANCLE</button>
            <button 
            type="button" 
            className="w-10 h-5 cursor-pointer bg-transparent text-cyan-400"
            onClick={handleAddTags}
            >
              ADD</button>
            </div>
        </div>
    } 
    </>
  )
}
export default TagPanel