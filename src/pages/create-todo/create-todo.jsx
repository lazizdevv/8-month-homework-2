import React from "react";
import { TodoForm } from "../../components/todo-form/todo-form";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../../store/todo";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export const CreateTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const navigate = useNavigate();

  const createTodo = (data) => {
    addTodo({
      id: nanoid(),
      title: data.title,
      description: data.description,
    });
    toast.success("ToDo Muvaffaqiyatli Yaratildi!");
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col gap-5 h-screen justify-center">
        <h1 className="text-center font-bold text-2xl">Create ToDo</h1>
        <TodoForm submit={createTodo} />
      </div>
    </>
  );
};
