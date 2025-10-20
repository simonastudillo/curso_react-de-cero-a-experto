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
   | { type: 'TOGGLE_TODO', payload: number }
   | { type: 'DELETE_TODO', payload: number }

export const tasksReducer = (state: TasksState, { type, payload }: TaskAction): TasksState => {

   switch (type) {
      case 'ADD_TODO': {
         const newTodo: Todo = {
            id: Date.now(),
            text: payload.trim(),
            completed: false
         };
         return {
            ...state,
            todos: [newTodo, ...state.todos],
            length: state.length + 1
         };
      }
      case 'TOGGLE_TODO': {
         const updatedTodos: Todo[] = state.todos.map((todo) => {
            if (todo.id === payload) {
               return { ...todo, completed: !todo.completed }
            }
            return todo;
         });

         return {
            ...state,
            todos: updatedTodos,
            completed: updatedTodos.filter((todo) => todo.completed).length,
            pending: updatedTodos.filter((todo) => !todo.completed).length
         }
      }
      case 'DELETE_TODO': {

         return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== payload),
            length: state.length - 1
         }
      }
      default:
         return state;
   }
};