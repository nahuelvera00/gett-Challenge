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

const initialState = {
  loadingApp: true,
  todos: [],
  todoDelete: null,
  todoUpdate: null,
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        loadingApp: false,
      };
    case GET_TODOS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        loadingApp: false,
      };
    case ADD_TODO:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        loading: false,
      };
    case ADD_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case COMPLETE_TODO:
      return {
        ...state,
        loading: true,
      };

    case COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) =>
          todo.id !== action.payload.id ? todo : action.payload
        ),
      };
    case COMPLETE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        loading: true,
        todoUpdate: action.payload,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) =>
          todo.id === state.todoUpdate ? action.payload : todo
        ),
      };
    case UPDATE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        loading: true,
        todoDelete: action.payload,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) =>
          todo.id !== state.todoDelete ? todo : null
        ),
        loading: false,
      };
    case DELETE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //DEFAULT
    default:
      return state;
  }
}
