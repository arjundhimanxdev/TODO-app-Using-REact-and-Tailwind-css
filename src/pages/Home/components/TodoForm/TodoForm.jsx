

import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex bg-white py-2 px-5 rounded-md shadow-[10px_16px_22px_rgba(0,4,4,0.2)] mt-8 justify-between md:w-[60%] w-full">
      <input
        type="text"
        className="w-[60%] border-none outline-none"
        placeholder="Enter a todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 cursor-pointer py-3 text-white font-semibold px-6 rounded-md ">
        + Add
      </button>
    </form>
  );
}

export default TodoForm;

