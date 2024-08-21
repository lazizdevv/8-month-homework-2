import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../../store/todo";
import { TodoCard } from "../../components/todo-card";
import { LightModeToggle } from "../../components/mode";
import { EmptyCard } from "../../components/empty-card";

export const Home = () => {
  const { todos } = useTodoStore((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <section className="border-b-2 bg-blue-300 border-b-blue-500 py-3 sticky top-0 z-10 mt-0">
        <div className="container">
          <div className="flex justify-between items-center max-w-screen-lg mx-auto">
            <button
              onClick={() => navigate("create-todo")}
              className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md shadow-slate-500"
            >
              Create ToDo
            </button>

            <LightModeToggle />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="mt-10 flex flex-col items-center gap-5">
          {todos.length > 0 ? (
            todos.map((todo) => <TodoCard key={todo.id} {...todo} />)
          ) : (
            <EmptyCard />
          )}
        </div>
      </div>
    </>
  );
};
