import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoAction } from "../actions/TodosAction";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getTodos = useSelector((state) => state.todo.todos);

  const lastId = getTodos
    .map((todo) => todo.id)
    .reduce(function (a, b) {
      return Math.max(a, b);
    });

  const TODO = {
    userId: 1,
    id: lastId + 1,
    title: title,
    completed: false,
  };

  const addTodo = (todo) => dispatch(addTodoAction(todo));

  const handleClic = async (todo) => {
    if (await addTodo(todo)) {
      navigate("/home");
    }
  };
  return (
    <div className='w-full min-h-[92vh] flex justify-center items-center'>
      <div className='bg-gray-200 p-2 rounded-md flex flex-col gap-2'>
        <h1 className='w-full flex justify-center uppercase text-xl text-gray-600 font-bold'>
          Add TODO
        </h1>
        <div className=''>
          <label
            className='uppercase text-gray-600 block font-bold pl-1'
            htmlFor='email'
          >
            title
          </label>
          <input
            id='email'
            type='email'
            placeholder='Enter the title'
            className='w-full mt-1 p-3 border rounded-xl bg-gray-50'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button
          onClick={() => handleClic(TODO)}
          className='w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-md uppercase text-white font-semibold'
        >
          Create TODO
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
