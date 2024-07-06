'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from './data/article';

const ITEMS_PER_PAGE = 12; // Adjust this number to set items per page

const ArticlesGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on the selected category and search query
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate the total number of pages for the filtered articles
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  // Determine the articles to display for the current page
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Function to change page
  const changePage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get unique categories from articles
  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];

  return (
    <div className="w-full items-center justify-center p-4 flex flex-col">
    <div className='w-[85%] 2xl:w-[60%] mt-6'>
      {/* Search Field */}
      <div className="my-4 w-full md:w-[50%]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to first page on search change
          }}
          placeholder="Search articles..."
          className="p-2 border 2xl:text-[20px] border-[#D0D5DD] rounded w-full"
        />
      </div>
        {/* Category Filter */}
        <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // Reset to first page on category change
            }}
            className={`p-2 cursor-pointer 2xl:text-[20px]  text-[14px] ${selectedCategory === category ? ' text-[#235784] underline' : 'bg-white text-[#667085]'}`}
          >
            {category}
          </div>
        ))}
      </div>

      

      {/* Articles Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentArticles.length > 0 ? (
          currentArticles.map((article) => (
            <Link href={`/articles/${article.id}`}  key={article.id} className="border-[1px] border-[#000] rounded-[5px] overflow-hidden">
            <div>
              <Image 
                src={article.imageUrl} 
                alt={article.title} 
                width={400} 
                height={250} 
                className="w-full h-auto" 
              />
              
              <div className="p-4 px-6 flex flex-col justify-between h-[300px]">
                <div>
                <div className="text-[#000] text-[12px] font-[600] flex justify-between items-center">
                  <div className='bg-[#f2f2f2] p-[3px]'>
                {article.date} | {article.category}</div>
                <div>
                {article.time} </div>
                </div>
                <h2 className="text-[#000] text-[20px] lg:text-[20px] 2xl:text-[30px] font-[700] mt-2">{article.title}</h2>
                <p className="text-[#000] text-[14px] font-[400] 2xl:text-[20px] mt-2">{article.description}</p>
                </div>
                <Link href={`/articles/${article.id}`} className="text-[#000] mt-4 text-[16px] 2xl:text-[20px] font-[600] inline-block">
                  Read more &gt;
                </Link>
              </div>
              
            </div></Link>
          ))
        ) : (
          <p className="text-[#000] text-[18px] font-[600]">No articles found</p>
        )}
      </div>

      {/* Pagination */}
      {filteredArticles.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
      )}
    </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page: number) => void }) => {
  const getVisiblePages = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all page numbers if there are 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show the first and last 2 pages, and ellipsis in between
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pageNumbers;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="w-[90%] flex flex-row justify-between items-center mt-20">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`p-2 rounded border text-[14px] border-[#D0D5DD] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === 1}
      >
        &lt; Previous
      </button>
      <div className="flex space-x-2 mx-4">
        {visiblePages.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            className={`p-2 rounded text-[14px] ${currentPage === page ? 'border border-[#D0D5DD]' : ''} ${page === '...' ? 'cursor-default' : ''}`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`p-2 rounded border text-[14px] border-[#D0D5DD] ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default ArticlesGrid;
