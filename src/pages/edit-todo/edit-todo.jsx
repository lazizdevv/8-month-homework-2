import React from "react";
import { useTodoStore } from "../../store/todo";
import { useNavigate, useParams } from "react-router-dom";
import { TodoForm } from "../../components/todo-form";

export const EditTodo = () => {
  const { updateTodo, todos } = useTodoStore();
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = todos.find((todo) => todo.id === id);
  console.log(todo);

  const handleUpdate = (data) => {
    updateTodo({ id, ...data });
    navigate("/");
  };

  return <TodoForm submit={handleUpdate} defaultValues={todo} />;
  
};
