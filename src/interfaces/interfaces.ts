export interface Todo {
  id: number ;
  title: string;
  completed: boolean;
}

export type Todos = Todo[];

export interface TodosProps {
  todos: Todos;
  handleRemove(id: number): void;
  handleCompleted(id: number, completed: boolean): void;
}

export interface TodoProps extends Todo {
  handleRemove(id: number): void;
  handleCompleted(id: number, completed: boolean): void;
}
