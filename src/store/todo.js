import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      updateTodo: (updatedTodo) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          ),
        })),
    }),
    {
      name: "todo",
    }
  )
);
