import React, { useState } from "react";

function TodoCard() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    if (newTask) {
      setTodo([...todo, newTask]);
    } else {
      alert("Enter the task");
    }
    setNewTask("");
  };
  const deleteTask = (index) => {
    const list = [...todo];
    if (index > -1) {
      list.splice(index, 1);
      setTodo(list);
    }
  };

  return (
    <div class="flex flex-col justify-center items-center">
      <div class="flex justify-center items-center w-96">
        <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full h-48 flex flex-col justify-evenly items-center shadow-2xl">
          <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <input
              value={newTask || ""}
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              name="todo"
              id="todo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400"
              placeholder="Add a task"
              required
            />
          </div>
          <button
            type="submit"
            onClick={addTask}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </div>
      <div class="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-4/6 flex flex-col justify-evenly items-center shadow-2xl my-8">
        <h4 class="my-3">List of Tasks</h4>
        <div class="my-6 text-lg w-64 mx-4">
          {todo?.length > 0 ? (
            todo?.map((item, index) => (
              <div class="p-3 my-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between items-center shadow-2xl">
                <div>
                  {item}
                  <button onClick={() => deleteTask(index)}>
                    {" "}
                    <i class="fa fa-trash ms-5" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No Tasks</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
