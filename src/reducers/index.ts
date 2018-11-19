import { combineReducers } from 'redux';
import { ToDoAction } from '../actions';
import {
  ADD_TO_TODO,
  TOGGLE_AUTHENTICATED,
  TOGGLE_TODO
} from '../constants';
import { IToDo, IUsers } from '../types';

const authenticated = (state: boolean = false, action: ToDoAction) => {
  switch (action.type) {
    case TOGGLE_AUTHENTICATED:
      return !state;
    default:
      return state;
  }
};
const users = (state: IUsers[]= [], action: ToDoAction) => {
  switch (action.type) {
    case 'ADD_TO_USERS': {
      return [...state, action.user];
    }
    default: {
      return state;
    }
  }
};
const todo = (state: IToDo[] = [], action: ToDoAction) => {
  switch (action.type) {
    case ADD_TO_TODO: {
      return [...state, action.task];
    }
    case TOGGLE_TODO: {
      return state.map(task => {
        if (task.id === action.id) {
          task.completed = !task.completed;
        }
        return task;
      });
    }

    default:
      return state;
  }
};

export default combineReducers({ authenticated, users, todo });
