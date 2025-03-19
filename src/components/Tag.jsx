const Tag = ({ tag , tags }) => {
  return (
    <>
    {(tags || tag) && (
      <div className="w-auto h-8 md:h-6 p-2 rounded-xl cursor-pointer 
        bg-gradient-to-r from-red-500 to-red-700 
        text-white font-semibold shadow-md 
        flex items-center justify-center 
        transition-transform transform hover:scale-105 active:scale-95">{tag}{tags}
      </div>
    )}
    
    </>
  )
}
export default Tag