import React from "react";
import { useForm } from "react-hook-form";

export const TodoForm = ({ submit, defaultValues }) => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      ...defaultValues,
    },
  });
  return (
    <>
      <div className="container">
        <form
          onSubmit={handleSubmit(submit)}
          className="border border-blue-500 mx-auto mt-40 max-w-lg flex flex-col gap-10 p-5 lg:p-10 rounded-lg shadow-md shadow-blue-500"
        >
          <input
            {...register("title")}
            placeholder="Title"
            type="text"
            className="border-2 border-blue-500 p-2 rounded-lg text-lg font-bold bg-transparent"
          />
          <input
            {...register("description")}
            placeholder="Title"
            type="text"
            className="border-2 border-blue-500 p-2 rounded-lg text-lg font-bold bg-transparent"
          />
          <button
            type="submit"
            className="py-3 px-6 text-white font-bold bg-green-500 hover:bg-green-600 w-1/2 mx-auto rounded-lg"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};
