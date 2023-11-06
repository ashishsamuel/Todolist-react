import React, { useState } from "react";
import '../App.css'

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
    <div class="flex flex-col justify-center items-center" style={{padding: '18px 10px',borderRadius: '22px',backgroundColor: 'gray'}}>
      <div class="flex justify-center items-center w-96" style={{borderRadius:'15px'}} className="width-small">
        <div style={{backgroundColor:'aliceblue'}} class="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 w-full h-48 flex flex-col justify-evenly items-center shadow-2xl">
          <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <input style={{backgroundColor:'aliceblue'}}
              value={newTask || ""}
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              name="todo"
              id="todo"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
              placeholder="Add a task"
              required
            />
          </div>
          <button
            type="submit"
            onClick={addTask}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </div>
      <div style={{backgroundColor:'aliceblue'}} class="border border-gray-200 rounded-lg shadow dark:border-gray-700 w-96 flex flex-col justify-evenly items-center shadow-2xl my-8" className="width-small">
        <h4 style={{backgroundColor:'aliceblue'}} class="my-3">List of Tasks</h4>
        <div class="my-6 text-lg w-64 mx-4" style={{backgroundColor:'aliceblue'}}>
          {todo?.length > 0 ? (
            todo?.map((item, index) => (
              <div style={{backgroundColor:'aliceblue'}} class="p-3 my-5 border border-gray-200 rounded-lg shadow dark:border-gray-700 flex flex-col justify-between items-center shadow-2xl">
                <div style={{backgroundColor:'aliceblue'}}>
                  {item}
                  <button onClick={() => deleteTask(index)}>
                    {" "}
                    <i class="fa fa-trash ms-5" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{backgroundColor:'aliceblue'}}>No Tasks</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
