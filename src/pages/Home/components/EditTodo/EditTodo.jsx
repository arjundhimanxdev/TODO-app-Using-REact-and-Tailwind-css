import { useState } from "react";

function EditTodo({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      editTodo(value, task.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-2">
      <input
        type="text"
        className="w-full p-2 rounded border border-gray-300"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-3 rounded hover:bg-green-600"
      >
        Update
      </button>
    </form>
  );
}

export default EditTodo;
