import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilterKeyword, updateFilterKeyword } from "../../store/features/posts/posts.slice";

const Header = (props) => {
  const dispatch = useDispatch();
  const { title } = useSelector(state => state.posts.meta);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    if (!isSearchOpen)
      setIsSearchOpen(true);
    // else
    //   setIsSearchOpen(false);
  }

  const handleInputChange = (e) => {
    dispatch(updateFilterKeyword(e.target.value));
  }

  return (
    <div className='container max-w-none h-20 bg-header-pattern bg-no-repeat bg-cover bg-center fixed top-0 left-0 z-10'>
      <div className='w-full h-12 flex items-center justify-between px-4 md:px-8'>
        <div className='h-full flex items-center'>
          <span
            onClick={() => { dispatch(resetFilterKeyword());setIsSearchOpen(false) }}
            className='w-4 md:w-6 h-full bg-back-bttn bg-contain bg-center bg-no-repeat cursor-pointer mr-3 select-none'
          />
          <span
            className={`text-white md:text-[16pt] ${isSearchOpen ? 'hidden md:inline' : ''}`}>
            {title}
          </span>
        </div>
        <div className={`flex h-full py-3 ${isSearchOpen ? 'w-full md:w-[50%]' : ''}`}>
          {
            isSearchOpen && <input className='mr-2 flex-1 pl-2 outline-none rounded-md' placeholder="Search by title" onChange={handleInputChange} />
          }
          <span onClick={handleSearchClick} className='w-5 md:w-7 h-full bg-search-bttn bg-contain bg-center bg-no-repeat cursor-pointer' />
        </div>
      </div>

    </div>
  );
};

export default Header;