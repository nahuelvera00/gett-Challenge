import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { updateTodoAction } from "../actions/TodosAction";

const UpdateTodo = () => {
  const [todo, setTodo] = useState();
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    const todo = todos.filter((e) => e.id == id);
    setTodo(todo[0]);
    setTitle(todo[0].title);
  }, []);

  const updateTodo = (todoUpdated, id) =>
    dispatch(updateTodoAction(todoUpdated, id));

  const handleClic = async () => {
    const todoUpdated = todo;
    todoUpdated.title = title;
    if (await updateTodo(todoUpdated, Number(id))) {
      navigate("/home");
    }
  };

  return (
    <div className='w-full min-h-[92vh] flex justify-center items-center'>
      <div className='bg-gray-200 p-2 rounded-md flex flex-col gap-2'>
        <h1 className='w-full flex justify-center uppercase text-xl text-gray-600 font-bold'>
          Update Todo
        </h1>
        <div className=''>
          <label
            className='uppercase text-gray-600 block font-bold pl-1'
            htmlFor='text'
          >
            title
          </label>
          <input
            id='title'
            type='text'
            placeholder='Enter the title'
            className='w-full mt-1 p-3 border rounded-xl bg-gray-50'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button
          onClick={() => handleClic()}
          className='w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-md uppercase text-white font-semibold'
        >
          Update TODO
        </button>
      </div>
    </div>
  );
};

export default UpdateTodo;
