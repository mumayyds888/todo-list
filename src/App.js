import React, { useState } from 'react';
import TaskList from './component/TaskList'; // 引入顯示任務的元件
import AddTask from './component/AddTask'; // 引入新增任務的元件
import ProgressBar from './component/ProgressBar'; // 引入進度條元件
import './App.css'; // 引入CSS樣式
import ProgressLabel from './component/ProgressLabel';

const TodoApp = () => {
  // 初始化任務狀態，這是一個包含任務資料的陣列
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React.js', done: true }, // 任務已完成
    { id: 2, text: 'Learn Golang', done: false }, // 任務未完成
    { id: 3, text: 'Learn Docker', done: true }, // 任務已完成
    { id: 4, text: 'Learn something else', done: false }, // 任務未完成
  ]);

  // 儲存新增任務文本的狀態
  const [newTask, setNewTask] = useState('');

  // 儲存是否要將已完成的任務移到末尾的狀態
  const [moveToEnd, setMoveToEnd] = useState(false);

  // 切換任務的完成狀態
  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task // 如果id匹配，則切換done屬性
    ));
  };

  // 新增任務的函數
  const addTask = () => {
    if (newTask.trim() !== '') { // 如果新增的任務文本不為空
      setTasks([
        ...tasks, // 保留現有的任務
        { id: tasks.length + 1, text: newTask, done: false } // 新增任務，默認為未完成
      ]);
      setNewTask(''); // 清空輸入框
    }
  };

  // 刪除任務的函數
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // 過濾掉id匹配的任務
  };

  // 根據是否勾選“將已完成的任務移到末尾”選項，排序任務
  const sortedTasks = moveToEnd
    ? [...tasks].sort((a, b) => a.done - b.done) // 如果勾選，將已完成的任務移到末尾
    : tasks; // 否則保持原始順序


  // 定義progress變數
  const progress = tasks.length
    ? (tasks.filter((task) => task.done).length / tasks.length) * 100
    : 0; // 確保任務列表為空時進度為 0


  return (
    <div className="todo-container">
      <h1>Todo List</h1> {/* 顯示應用標題 */}
      <p>Add things to do</p> {/* 提示使用者可以新增任務 */}
      {/* 使用 ProgressLabel */}
      <div className="progress-container">
        <ProgressLabel progress={progress} />
        <ProgressBar tasks={tasks} /> {/* 顯示任務進度條 */}
      </div>
      <TaskList tasks={sortedTasks} toggleTask={toggleTask} deleteTask={deleteTask} /> {/* 顯示任務清單 */}
      <div className="move-to-end">
        <label>
          Move done things to end? {/* 顯示是否將已完成的任務移到末尾 */}
          <button
            className={`toggle-button ${moveToEnd ? 'active' : ''}`} // 根據moveToEnd的狀態更改按鈕樣式
            onClick={() => setMoveToEnd(!moveToEnd)} // 按鈕點擊時切換moveToEnd狀態
          >
            {/* <span className="text">ON</span>
            <span className="text">OFF</span> */}
          </button>
        </label>
      </div>
      <div className='Add-to-list'>Add to list</div>
      <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} /> {/* 顯示新增任務元件 */}
    </div>
  );
};

export default TodoApp; // 導出TodoApp元件
