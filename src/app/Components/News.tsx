'use client'
import React, { useState } from 'react';
import NewsContent from './NewsContent';
import { Spin } from "antd";

function News() {
  const [visibleItems, setVisibleItems] = useState(4);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
      setLoading(false);
    }, 1000); // Simulate loading delay
  };

  return (
    <div className='mt-20'>
      <main className='w-full flex flex-col items-center gap-10'>
        {NewsContent.slice(0, visibleItems).map((item, i) => (
          <div key={i} className='w-[90%] lg:w-[60%]'>
            <div className='bg-[#EAF2FE] w-[121px] px-2 flex flex-col items-center mb-2'>
              <p className='font-[600] text-[16px] lg:text-[22.35px]'>{item.category}</p>
            </div>
            <div>
              <h1 className='text-[21px] lg:text-[33px] font-[800] mb-6'>{item.title}</h1>
              <p className='text-[14px] lg:text-[16px] font-[400]'>{item.news}</p>
            </div>
          </div>
        ))}
        {visibleItems < NewsContent.length && (
          <div className='flex flex-col items-center'>
            {loading ? (
              <div className='loader mb-4 flex gap-2'>
                <Spin />
                <p>Loading more...</p></div>
            ) : (
              <button 
                onClick={loadMore} 
                className='bg-[#F3F4F6] text-[#000] rounded-[18px] py-2 px-4'
              >
                Load More News
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default News;
