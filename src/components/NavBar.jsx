import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const NavBar = () => {
  const { logOut } = useAuth();

  return (
    <nav className='w-full h-[8vh] px-3 bg-blue-400 sticky top-0 flex justify-between items-center border-b-2 border-gray-400'>
      <button
        onClick={() => logOut()}
        className='flex gap-1 text-blue-500 font-semibold justify-center items-center py-1 px-1 bg-white rounded-full'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
          />
        </svg>
      </button>
      <Link to='' className='uppercase font-semibold text-2xl text-white'>
        TODOS
      </Link>
      <Link
        className='flex gap-1 text-blue-500 font-semibold justify-center items-center py-1 px-2 bg-white rounded-full'
        to='add-todo'
      >
        <p className='uppercase'>add</p>
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
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      </Link>
    </nav>
  );
};

export default NavBar;
