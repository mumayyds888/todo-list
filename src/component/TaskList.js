import React from 'react';
import Task from './Task'; // 導入 Task 元件

// 定義一個名為 TaskList 的函數型元件
// 接收三個屬性：tasks（任務列表）、toggleTask（切換任務完成狀態的函數）、deleteTask（刪除任務的函數）
const TaskList = ({ tasks, toggleTask, deleteTask }) => {
    return (
        // 包裹所有任務的外層容器，類名為 "scroll-bar"（可以用來設定滾動條樣式）
        <div className="scroll-bar">
            {/* 使用 map 函數遍歷任務列表，為每個任務渲染一個 Task 元件 */}
            {tasks.map((task) => (
                // 每個 Task 元件需要一個唯一的 key（這裡使用 task.id 作為 key）
                // 傳遞 task、toggleTask 和 deleteTask 這些屬性給每個 Task 元件
                <Task
                    key={task.id} // 設定 key，React 需要每個列表項目有唯一的 key 值
                    task={task} // 傳遞當前的任務物件
                    toggleTask={toggleTask} // 傳遞切換任務完成狀態的函數
                    deleteTask={deleteTask} // 傳遞刪除任務的函數
                />
            ))}
        </div>
    );
};

// 將 TaskList 元件導出，供其他文件使用
export default TaskList;
