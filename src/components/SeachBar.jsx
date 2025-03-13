import '@/app/ResponsivePage.css'

const SearchBar = () => {
  return (
    <div className="searchbarClass relative w-80">
      <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        search
      </span>
      <input 
        type="text" 
        className="w-full h-10 bg-white rounded-4xl pl-10 pr-3 border border-gray-300 focus:outline-none" 
        placeholder="Search.." 
      />
    </div>
  )
}
export default SearchBar