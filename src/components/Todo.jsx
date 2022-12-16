import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodoAction, deleteTodoAction } from "../actions/TodosAction";
import Swal from "sweetalert";
import { Link } from "react-router-dom";
const Todo = ({ dataTodo }) => {
  const [data, setData] = useState(dataTodo);
  const dispatch = useDispatch();

  const completeTodo = (todo) => {
    dispatch(completeTodoAction(todo));
  };

  const deleteTodo = (todoId) => {
    Swal({
      title: "You want to delete TODO?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        dispatch(deleteTodoAction(todoId));
      }
    });
  };

  return (
    <div className='w-full bg-gray-200 flex flex-col justify-between rounded-md py-1 px-2'>
      <div>
        <div className='flex justify-between gap-1'>
          <h1 className='uppercase flex items-center'>{data.title}</h1>
          <Link to={`edit-todo/${data.id}`} className='flex items-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
              />
            </svg>
          </Link>
        </div>
        <div className='py-1'>
          <p className='uppercase text-sm text-gray-700'>
            state:{" "}
            <span className='font-bold'>
              {data.completed ? "complete" : "incomplete"}
            </span>
          </p>
        </div>
      </div>
      <div className='w-full flex gap-2 pb-1'>
        <button
          onClick={() => completeTodo(data)}
          className={`w-full bg-blue-500 hover:bg-blue-600 rounded-md py-1 uppercase text-white ${
            data.completed ? "hidden" : ""
          }`}
        >
          complete
        </button>
        <button
          onClick={() => deleteTodo(data.id)}
          className='w-full bg-red-500 hover:bg-red-600 rounded-md py-1 uppercase text-white'
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
