import React from "react";
import { Link } from "react-router-dom";
import { useTodoStore } from "../../store/todo";
import { EditIcon } from "../../assets/svg/EditIcon";
import { DeleteIcon } from "../../assets/svg/DeleteIcon";
import { toast } from "react-toastify";

export const TodoCard = ({ title, description, id }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleDelete = () => {
    removeTodo(id);
    toast.success("ToDo Muvaffaqiyatli O'chirildi!");
  };

  return (
    <>
      <div className="flex gap-5 flex-wrap relative p-5 pb-12 max-w-screen-md w-full  border-blue-500 border rounded-lg shadow-md shadow-blue-400">
        <h1 className="w-9/12 break-words">Title: {title}</h1>
        <h1 className="w-9/12 break-words">Description: {description}</h1>

        <div className="absolute bottom-3 right-3 flex gap-5">
          <Link to={`/edit-todo/${id}`}>
            <button className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md">
              <EditIcon />
            </button>
          </Link>

          <button
            className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
};
