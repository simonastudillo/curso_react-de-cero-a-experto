import * as z from "zod";

interface Todo {
   id: number;
   text: string;
   completed: boolean;
}

interface TasksState {
   todos: Todo[];
   length: number;
   completed: number;
   pending: number;
}

type TaskAction =
   { type: 'ADD_TODO', payload: string }
   | { type: 'TOGGLE_TODO', payload: number }
   | { type: 'DELETE_TODO', payload: number }

const todoSchema = z.object({
   id: z.number(),
   text: z.string(),
   completed: z.boolean()
});

const taskStateSchema = z.object({
   todos: z.array(todoSchema),
   length: z.number(),
   completed: z.number(),
   pending: z.number(),
});

export const getTasksInitialState = (): TasksState => {

   const localStorageState = localStorage.getItem('tasks-state');

   if (!localStorageState) {
      return {
         todos: [],
         length: 0,
         completed: 0,
         pending: 0
      }
   }
   const result = taskStateSchema.safeParse(JSON.parse(localStorageState));

   if (result.error) {
      console.log(result.error);
      return {
         todos: [],
         length: 0,
         completed: 0,
         pending: 0
      }
   }
   return result.data;

}

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
            length: state.todos.length + 1,
            pending: state.pending + 1
         };
      }
      case 'TOGGLE_TODO': {
         const updatedTodos: Todo[] = state.todos.map((todo) => {
            if (todo.id === payload) {
               return { ...todo, completed: !todo.completed }
            }
            return todo;
         });
         const completedTodos = updatedTodos.filter((todo) => todo.completed).length;

         return {
            ...state,
            todos: updatedTodos,
            completed: completedTodos,
            pending: updatedTodos.length - completedTodos
         }
      }
      case 'DELETE_TODO': {

         const updatedTodos = state.todos.filter((todo) => todo.id !== payload);
         const completedTodos = updatedTodos.filter((todo) => todo.completed).length;

         return {
            ...state,
            todos: updatedTodos,
            length: updatedTodos.length,
            completed: completedTodos,
            pending: updatedTodos.length - completedTodos
         }
      }
      default:
         return state;
   }
};