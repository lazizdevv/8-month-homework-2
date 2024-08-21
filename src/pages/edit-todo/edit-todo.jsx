import React from "react";
import { useTodoStore } from "../../store/todo";
import { useNavigate, useParams } from "react-router-dom";
import { TodoForm } from "../../components/todo-form";
import { toast } from "react-toastify";

export const EditTodo = () => {
  const { updateTodo, todos } = useTodoStore();
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = todos.find((todo) => todo.id === id);
  console.log(todo);

  const handleUpdate = (data) => {
    updateTodo({ id, ...data });
    toast.success("ToDo Muvaffaqiyatli O'zgartirildi!");
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col gap-5 h-screen justify-center">
        <h1 className="text-center font-bold text-2xl">Edit ToDo</h1>
        <TodoForm submit={handleUpdate} defaultValues={todo} />
      </div>
    </>
  );
};
