import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './App.css';

import Header from './components/Header';
import List from './components/List';

import { useLazyFetchPostsQuery } from './store/api/posts.api';

function App() {

  const containerRef = useRef(null);
  const [trigger] = useLazyFetchPostsQuery();

  const [pageNumber, setPageNumber] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const data = useSelector(state => state.posts.data);
  const filterKeyword = useSelector(state => state.posts.filterKeyword);

  useEffect(() => {
    if (filterKeyword)
      setFilteredData(data.filter(el => el.name.toLowerCase().includes(filterKeyword.toLowerCase())))
    else
      setFilteredData(data);
  }, [data, filterKeyword])


  useEffect(() => {
    trigger(pageNumber);
  }, [pageNumber, trigger])

  const handleScroll = (e) => {
    const { offsetHeight, scrollHeight, scrollTop } = containerRef.current;
    /**
     * scrollOffset defines the amount of scroll before scroll end is reached when the
     * next pagination API is called
     */
    const scrollOffset = 100;
    if (offsetHeight + scrollTop + scrollOffset >= scrollHeight && pageNumber < 3)
      setPageNumber(pageNumber => pageNumber + 1);
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className='container w-screen h-screen m-0 max-w-none flex flex-col pt-16 md:pt-24 pb-10 bg-black overflow-auto'>
      <Header />
      <List data={filteredData || []} />
    </div>
  );
}

export default App;
