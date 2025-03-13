
import '@/app/ResponsivePage.css'

const AddNewData = ({ isAddDialogVisible , setIsAddDialogVisible }) => {
  return (
    <div> {isAddDialogVisible && (
        <div className="databox w-1/2 h-1/2 p-2 bg-white border-1 border-black absolute top-[15%] right-1/4 rounded-4xl">
            <div className="w-full h-[10%] flex p-2 items-center text-2xl">Add new data</div>
            <div className="w-full h-[50%] flex">
                <div className="w-[30%] flex justify-center items-center">
                    <div className="w-1/2 h-full bg-amber-300"></div>
                </div>
                <div className="w-[70%] p-2 flex flex-col">
                    <p className="text-2xl">Title</p>
                    <input className="p-1 w-full h-7 border-b-1 border-gray-400 mb-2 placeholder-gray-400 
                                focus:outline-none pt-3 leading-normal" type="text" placeholder="Title.."/>
                    <div className="w-full h-full flex gap-3">
                        <p className="text-2xl">Tags</p>
                        <button type="button" className="w-20 h-3/4 rounded-xl cursor-pointer bg-red-500 flex items-center justify-center">
                            <span className="material-symbols-outlined">add</span>
                            <p>ADD</p>
                        </button>
                    </div>
                    <div className="w-full h-full bg-white border-1 border-black flex items-center justify-center p-2"></div>
                </div>
            </div>
            <div className="w-full h-[27%]  mt-2">
                <div className="w-full h-[20%] ">Discription:</div>
                <input 
                    type="text" 
                    className="w-full h-14 text-[14px] bg-white placeholder-gray-400 
                                focus:outline-none pt-3 leading-normal"
                    placeholder="Write something here!"
                />


            </div>
            <div className="w-full h-[13%] flex items-center justify-end gap-10 pr-10">
                <button onClick={() => setIsAddDialogVisible(false)} type="button" className="w-10 h-5 cursor-pointer bg-transparent text-cyan-400">CANCLE</button>
                <button type="button" className="w-10 h-5 cursor-pointer bg-transparent text-cyan-400">ADD</button>
            </div>
        </div>
    )}
    </div>
  )
}
export default AddNewData