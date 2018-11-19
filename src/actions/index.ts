import {
  ADD_TO_TODO,
  ADD_TO_USERS,
  TOGGLE_AUTHENTICATED,
  TOGGLE_TODO
} from '../constants';
import { IToDo, IUsers } from '../types';

export interface IaddToUsers {
  type: ADD_TO_USERS;
  user: IUsers;
}
export interface IaddToToDo {
  type: ADD_TO_TODO;
  task: IToDo;
}
export interface ItoggleAuthenticated {
  type: TOGGLE_AUTHENTICATED;
}
export interface ItoggleToDo {
  type: TOGGLE_TODO;
  id: string;
}
export type ToDoAction =
  | IaddToToDo
  | IaddToUsers
  | ItoggleAuthenticated
  | ItoggleToDo;

export const addToUsers = (user: IUsers): IaddToUsers => {
    return ({
  type: ADD_TO_USERS,
  user
}); };

export const toggleAuthenticated = (): ItoggleAuthenticated => ({
  type: TOGGLE_AUTHENTICATED
});

export const addToToDo = (task: IToDo): IaddToToDo => ({
    task,
    type: ADD_TO_TODO,
});

export const toggleToDo = (id: string): ItoggleToDo => ({
  id,
  type: TOGGLE_TODO,
});
