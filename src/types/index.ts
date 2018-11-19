export interface IToDo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IUsers {
  username: string;
  password: string;
}

export interface IStoreState {
    todo: IToDo[];
    users: IUsers[];
    authenticated: boolean;
}