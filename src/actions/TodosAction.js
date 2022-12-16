//IMPORT TYPES
import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  COMPLETE_TODO,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_FAIL,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from "../types";

//IMPORT DEPENDENCIES
import Swal from "sweetalert";
import { useNavigate } from "react-router-dom";

//FUNCTIONS

//------------------------GET TODOS---------------------------
export function getTodosAction() {
  return async (dispatch) => {
    dispatch(getTodos());
    const API = "https://jsonplaceholder.typicode.com/todos";
    try {
      await fetch(API)
        .then((response) => response.json())
        .then((data) => dispatch(getTodosSuccess(data)));
    } catch (error) {
      console.log(error);
      dispatch(getTodosFail(true));
    }
  };
}

const getTodos = () => ({
  type: GET_TODOS,
  payload: true,
});

const getTodosSuccess = (data) => ({
  type: GET_TODOS_SUCCESS,
  payload: data,
});

const getTodosFail = (state) => ({
  type: GET_TODOS_FAIL,
  payload: state,
});

//------------------------ADD TODO---------------------------
export function addTodoAction(todo) {
  return async (dispatch) => {
    dispatch(addTodo());
    try {
      dispatch(addTodoSuccess(todo));
      Swal("TODO Created Successfully", {
        icon: "success",
      });
      setTimeout(() => {}, 2000);
      return true;
    } catch (error) {
      dispatch(addTodoFail(true));
    }
  };
}

const addTodo = () => ({
  type: ADD_TODO,
});

const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: todo,
});

const addTodoFail = (state) => ({
  type: ADD_TODO_FAIL,
  payload: state,
});

//----------------------- COMPLETE TODOS -----------------------------------------
export function completeTodoAction(todo) {
  return async (dispatch) => {
    dispatch(completeTodo());
    try {
      todo.completed = true;
      dispatch(completeTodoSuccess(todo));
      Swal("TODO Complete", {
        icon: "success",
      });
    } catch (error) {
      dispatch(completeTodoFail(true));
    }
  };
}

const completeTodo = () => ({
  type: COMPLETE_TODO,
  payload: true,
});

const completeTodoSuccess = (todo) => ({
  type: COMPLETE_TODO_SUCCESS,
  payload: todo,
});

const completeTodoFail = (state) => ({
  type: COMPLETE_TODO_FAIL,
  payload: state,
});

//----------------------- UPDATE TODO -----------------------------------------
export function updateTodoAction(todo, id) {
  return async (dispatch) => {
    dispatch(updateTodo(id));
    try {
      dispatch(updateTodoSuccess(todo));
      Swal("TODO Updated", {
        icon: "success",
      });
      return true;
    } catch (error) {
      dispatch(updateTodoFail(true));
    }
  };
}

const updateTodo = (id) => ({
  type: UPDATE_TODO,
  payload: id,
});

const updateTodoSuccess = (todo) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: todo,
});

const updateTodoFail = (state) => ({
  type: UPDATE_TODO_FAIL,
  payload: state,
});

//----------------------- DELETE TODO  --------------------------
export function deleteTodoAction(todoId) {
  return async (dispatch) => {
    dispatch(deleteTodo(todoId));
    try {
      Swal("TODO Deleted successfully", {
        icon: "success",
      });
      dispatch(deleteTodoSuccess(todoId));
    } catch (error) {
      dispatch(deleteTodoFail(true));
    }
  };
}

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

const deleteTodoSuccess = (id) => ({
  type: DELETE_TODO_SUCCESS,
  payload: id,
});

const deleteTodoFail = (state) => ({
  type: DELETE_TODO_FAIL,
  payload: state,
});
