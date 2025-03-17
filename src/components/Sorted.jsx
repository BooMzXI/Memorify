import { useState } from 'react';
import { SortedByTime , SortedByName } from '@/app/function/Sorted';

const SortedBox = ({ contents, setContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortedClick = () => {
    setIsOpen(!isOpen)
  };
  const handleSortByTime = () => {
    const sorted = SortedByTime(contents)
    setContent([...sorted])
    setIsOpen(false)
  };
  const handleSortByTimeReverse = () => {
    const sorted = SortedByTime(contents).reverse()
    setContent([...sorted])
    setIsOpen(false)
  };
  const handleSortedByName = () => {
    const sorted = SortedByName(contents)
    setContent([...sorted])
    setIsOpen(false)
  }
  const handleSortedByNameReverse = () => {
    const sorted = SortedByName(contents).reverse()
    setContent([...sorted])
    setIsOpen(false)
  }
  return (
    <>
      <div className="w-2/4 h-10 bg-emerald-900 flex items-center justify-center gap-1 mt-1 relative z-10">
        <button 
          className="w-full cursor-pointer flex items-center justify-center gap-1" 
          type="button"
          onClick={handleSortedClick}
        >
          <p className="text-white text-[18px]">Sorted by</p>
          <span className="material-symbols-outlined text-[24px] text-white">
            {isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
          </span>
        </button>

        <div 
          className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-44 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="p-2">
            <li 
              className="cursor-pointer p-2 hover:bg-gray-200" 
              onClick={handleSortByTime}
            >
              Date (New to old)
            </li>
            <li 
              className="cursor-pointer p-2 hover:bg-gray-200" 
              onClick={handleSortByTimeReverse}
            >
              Date (Old to new)
            </li>
            <li 
              className="cursor-pointer p-2 hover:bg-gray-200" 
              onClick={handleSortedByName}
            >
              Name (A - Z)
            </li>
            <li 
              className="cursor-pointer p-2 hover:bg-gray-200"
              onClick={handleSortedByNameReverse} 
            >
              Name (Z - A)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SortedBox;
