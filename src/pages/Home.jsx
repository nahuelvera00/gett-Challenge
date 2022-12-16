import React, { useState, useEffect } from "react";
import Todo from "../components/Todo";
//REDUX
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";

const Home = () => {
  const getTodos = useSelector((state) => state.todo.todos);

  const [todos, setTodos] = useState(getTodos);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setTodos(getTodos);
  }, [getTodos, itemsPerPage]);

  useEffect(() => {
    setItems([...todos].splice(currentPage * itemsPerPage, itemsPerPage));
  }, [itemsPerPage, getTodos, todos, currentPage]);

  useEffect(() => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(todos.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    setPages(pageNumbers);
  }, [itemsPerPage]);

  const todoPerPage = (num) => {
    setItemsPerPage(num);
    setCurrentPage(0);
  };

  const nextPage = () => {
    const nextPageIndex = currentPage + 1;

    const firstIndex = nextPageIndex * itemsPerPage;

    if (pages.length === nextPageIndex) return;

    setItems([...todos].splice(firstIndex, itemsPerPage));
    setCurrentPage(nextPageIndex);
  };

  const prevPage = () => {
    const prevPageIndex = currentPage - 1;

    if (prevPageIndex < 0) return;

    const firstIndex = prevPageIndex * itemsPerPage;
    setItems([...todos].splice(firstIndex, itemsPerPage));
    setCurrentPage(prevPageIndex);
  };

  const paginate = (number) => setCurrentPage(number);

  return (
    <div className='w-full md:w-2/3 xl:w-1/2 flex flex-col justify-between  min-h-[92vh] px-3'>
      <div className='w-full justify-end flex gap-2 py-1 mb-3'>
        <p className='uppercase text-gray-600 '>items per page:</p>
        <select
          className='w-10'
          name=''
          id=''
          onChange={(e) => todoPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div
        className={`grid grid-cols-1 ${
          itemsPerPage == 5 ? " " : "md:grid-cols-2"
        } gap-2`}
      >
        {items.map((item) => (
          <Todo key={item.id} dataTodo={item} />
        ))}
      </div>

      <div className='flex justify-center items-center py-5'>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          paginate={paginate}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
};

export default Home;
