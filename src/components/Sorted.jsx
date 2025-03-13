const SortedBox = () => {
  return (
    <>
        <button className="w-3/4 h-10 bg-emerald-900 cursor-pointer flex items-center justify-center gap-1 mt-1">
            <p className="text-white text-[18px]">Sorted by</p>
            {/* Add sorted by here */}
            <span className="material-symbols-outlined text-[100px] text-white">arrow_drop_down</span>
        </button>
    </>
  )
}
export default SortedBox