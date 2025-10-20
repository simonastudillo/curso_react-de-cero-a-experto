interface Todo {
   id: number;
   text: string;
   completed: boolean;
}

interface TasksState {
   todos: Todo[],
   length: number,
   completed: number,
   pending: number
}

type TaskAction =
   { type: 'ADD_TODO', payload: string }
   | { type: 'DELETE_TODO', payload: number }
   | { type: 'TOGGLE_TODO', payload: number }

export const tasksReducer = (state: TasksState, action: TaskAction): TasksState => {

   return state;
};