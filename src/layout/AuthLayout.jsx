import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <nav className='w-full h-[8vh] bg-blue-400 flex justify-center items-center border-b-2 border-gray-400'>
        <p className='uppercase font-semibold text-2xl text-white'>TODOS</p>
      </nav>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
