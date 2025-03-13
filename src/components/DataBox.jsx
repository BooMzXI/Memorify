const DataBox = () => {
  return (
    <div className="DataboxContainer w-full">
        <div className="DataBox mt-3 w-full h-60 flex bg-gray-400 rounded-[10px]">
            <div className="Databox-First-part w-1/4 h-full flex flex-col p-3 justify-center items-center">
                <div className="Picture w-[100px] h-[170px] bg-white"></div>
            </div>
            <div className="w-3/4 h-full flex flex-col p-2">
                <div className="w-full h-1/6 text-2xl">Title {/* Show title here */}</div>
                <div className="w-full h-2/6">
                    <div className="w-full h-[30%] flex items-center p-1">Discription</div>
                    <div className="w-full h-[70%] p-1 text-[14px]">
                        {/* Show discription here */}
                        
                    </div>
                </div>
                <div className="w-full h-2/6">
                    <div className="w-full h-[30%] p-2 mb-1"><b>Tags</b></div>
                    <div className="w-full h-[70%] flex items-center justify-center ">
                        <div className="w-full h-3/4 bg-white mt-1"></div>
                    </div>
                </div>
                <div className="w-full h-1/6 flex items-center justify-end gap-4">
                    <p>Created on</p>
                    {/* Show created time here */}
                </div>
            </div>
        </div>
    </div>
  )
}
export default DataBox