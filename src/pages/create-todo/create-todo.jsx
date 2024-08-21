import React from "react";
import { TodoForm } from "../../components/todo-form/todo-form";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../../store/todo";

export const CreateTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const navigate = useNavigate();

  const createTodo = (data) => {
    addTodo({
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
    });
    // reset();
    navigate("/");
  };
  return (
    <>
      <div className="">
        <TodoForm submit={createTodo} />
      </div>
    </>
  );
};
