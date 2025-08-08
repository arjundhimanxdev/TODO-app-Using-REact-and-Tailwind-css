
import { BiLoaderCircle } from "react-icons/bi";
import { useState } from "react";
import TodoForm from "../TodoForm";
import Todo from "../Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
      isEditing: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const newTask = prompt("Edit task:");
    if (newTask) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task: newTask } : todo
        )
      );
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className=" flex flex-col justify-center items-center mt-10 py-3">
      
      <TodoForm addTodo={addTodo} />

      <div className="w-full mt-4 flex flex-col justify-center items-center">
        {/* Status Count + Clear Completed */}
        <div className="flex bg-blue-6-- py-2 px-5 rounded-md shadow-[10px_16px_22px_rgba(0,4,4,0.2)] mt-8 justify-between md:w-[60%] w-full">
         <span>
            <span style={{ color: "blue" }}>{activeCount}</span> active,{" "}
            <span style={{ color: "green" }}>{completedCount}</span> completed
          </span>
          <button
            onClick={clearCompleted}
            className="text-red-500 cursor-pointer hover:text-red-700 font-medium"
          >
            Clear completed
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center w-full md:w-[60%] bg-gray-200 py-2 px-5 rounded-md shadow-[30px_40px_50px_rgba(0,4,14,0.3)] mt-4 justify-between ">
          <button
            className={`w-[33%] text-center px-4 py-1.5 rounded cursor-pointer peer-checked/all:bg-blue-500 peer-checked/all:text-white text-black ${
              filter === "All" ? "bg-blue-500 text-white" : " "
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`w-[33%] text-center px-4 py-1.5 rounded cursor-pointer peer-checked/all:bg-blue-500 peer-checked/all:text-white text-black ${
              filter === "Active" ? "bg-blue-500 text-white" : " "
            }`}
            onClick={() => setFilter("Active")}
          >
            Active
          </button>
          <button
            className={`w-[33%] text-center px-4 py-1.5 rounded cursor-pointer peer-checked/all:bg-blue-500 peer-checked/all:text-white text-black ${
              filter === "Completed" ? "bg-blue-500 text-white" : " "
            }`}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
        </div>
      </div>

    {filteredTodos.length === 0 ? (
       <div className="text-center flex flex-col text-gray-400 py-22 w-full bg-blue-6-- mt-5 rounded-md italic">
        <div className="text-center flex justify-center mb-5">
        <BiLoaderCircle className=" w-12 h-12 animate-spin"/>
        </div>
         Nothing here yet. Start by adding a task 👆
       </div>
     ) : (
       filteredTodos.map((todo) => (
    <Todo
      key={todo.id}
      task={todo}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleComplete={toggleComplete}
        />
        ))
      )}

      
    </div>
  );
}

export default TodoWrapper;
