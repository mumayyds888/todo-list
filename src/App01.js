import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React.js', done: true },
    { id: 2, text: 'Learn Golang', done: false },
    { id: 3, text: 'Learn Docker', done: true },
    { id: 4, text: 'Learn something else', done: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [moveToEnd, setMoveToEnd] = useState(false);

  // Toggle task completion
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  // Add new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask,
        done: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Move completed tasks to the end
  const sortedTasks = moveToEnd
    ? [...tasks].sort((a, b) => a.done - b.done)
    : tasks;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <p>Add things to do</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${
              (tasks.filter((task) => task.done).length / tasks.length) * 100 || 0
            }%`,
          }}
        ></div>
      </div>
      <div class="scroll-bar">
        {sortedTasks.map((task) => (
          <div key={task.id} className="task">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.done ? 'done' : ''}>{task.text}</span>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              ✖
            </button>
          </div>
        ))}
      </div>
      <div className="move-to-end">
        <label>
          Move done things to end?
          <input
            type="checkbox"
            checked={moveToEnd}
            onChange={() => setMoveToEnd(!moveToEnd)}
          />
        </label>
      </div>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add to list"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>+</button>
      </div>
    </div>
  );
}

export default App;
