import React, { useEffect } from "react";
import LoadingSpin from "react-loading-spin";
import { Outlet, Link, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getTodosAction } from "../actions/TodosAction";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  const { auth } = useAuth();
  const dispatch = useDispatch();

  const loadingApp = useSelector((state) => state.todo.loadingApp);

  useEffect(() => {
    const getTodos = () => dispatch(getTodosAction());
    getTodos();
  }, []);

  if (loadingApp) {
    return (
      <div className='w-full h-[100vh] flex justify-center items-center flex-col gap-2'>
        <LoadingSpin width='5px' primaryColor='#3B82F6' />
        <p className='uppercase font-lato text-xl'>loading app...</p>
      </div>
    );
  }

  return (
    <>
      {auth.id ? (
        <div className='w-full flex flex-col justify-center items-center'>
          <NavBar />
          <Outlet />
        </div>
      ) : (
        <Navigate to='/auth' />
      )}
    </>
  );
};

export default AppLayout;
