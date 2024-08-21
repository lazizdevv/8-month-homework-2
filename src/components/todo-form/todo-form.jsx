import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../../validations/schema/form-schema";

export const TodoForm = ({ submit, defaultValues }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...defaultValues,
    },
    resolver: zodResolver(formSchema),
  });
  return (
    <>
      <div className="container">
        <form
          onSubmit={handleSubmit(submit)}
          className="border border-blue-500 mx-auto  max-w-lg flex flex-col gap-5 px-5 py-10 lg:p-10 rounded-lg shadow-md shadow-blue-500"
        >
          <div className="pb-7 relative">
            <input
              {...register("title")}
              placeholder="Title"
              type="text"
              className="border-2 w-full border-blue-500 focus:border-2 focus:outline-none focus:border-green-500 p-2 rounded-lg text-lg font-bold bg-transparent"
            />
            {errors.title && (
              <p className="absolute bottom-0 text-red-500 font-bold text-xs">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="pb-7 relative">
            <input
              {...register("description")}
              placeholder="Description"
              type="text"
              className="border-2 w-full border-blue-500 focus:border-2 focus:outline-none focus:border-green-500 p-2 rounded-lg text-lg font-bold bg-transparent"
            />
            {errors.description && (
              <p className="absolute bottom-0 text-red-500 font-bold text-xs">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-3 px-6 text-white font-bold bg-green-500 hover:bg-green-600 w-9/12 mx-auto rounded-lg"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};
