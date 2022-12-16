import React from "react";

const Pagination = ({ pages, currentPage, paginate, prevPage, nextPage }) => {
  return (
    <div className='flex gap-[1px] items-center'>
      <button
        className='w-5 h-5 flex justify-center items-center'
        onClick={() => prevPage()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </button>
      {pages.map((number) => (
        <button
          className={`${
            currentPage + 1 <= 3
              ? //If current page > 3 viewed page 1 - 5
                number > 5
                ? "hidden"
                : ""
              : // if current page < 3
              currentPage + 1 > 3 && currentPage + 1 < pages.length - 1
              ? number < currentPage - 1
                ? "hidden "
                : number > currentPage + 3
                ? "hidden "
                : ""
              : //last pages
              currentPage + 1 == pages.length - 1
              ? number >= currentPage - 2
                ? " "
                : "hidden "
              : currentPage + 1 == pages.length
              ? number >= currentPage - 3
                ? ""
                : "hidden"
              : ""
          } bg-gray-300 w-6 border-black border-[1px]`}
          onClick={() => paginate(number - 1)}
          key={number}
        >
          {number}
        </button>
      ))}
      <button
        className='w-5 h-5 flex justify-center items-center'
        onClick={() => nextPage()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
