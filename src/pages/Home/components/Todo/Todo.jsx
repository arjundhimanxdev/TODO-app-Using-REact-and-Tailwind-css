

import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Todo = ({ task, editTodo, deleteTodo, toggleComplete }) => {
  return (
    <div className='flex bg-gray-200 py-3 px-5 rounded-md shadow-[30px_40px_50px_rgba(0,4,14,0.3)] mt-4 justify-between w-full md:w-[60%] '>
      <div className="flex gap-4">
        <input
        type="checkbox"
        onClick={() => toggleComplete(task.id)}
        checked={task.completed}
        className={`${task.completed ? "completed" : "incompleted"}`}
      />
      <p className={`${task.completed ? "line-through text-gray-400" : ""}`}>{task.task}</p>
      </div>
      <div className="flex gap-3">
        <MdOutlineEdit onClick={() => editTodo(task.id)} className="h-5 cursor-pointer w-5 text-blue-500" />
        <RiDeleteBin6Line className="h-5 w-5 cursor-pointer text-red-600" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;