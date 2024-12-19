import React from 'react';

// 定義一個名為 Task 的函數型元件
// 接收三個屬性：task（單一任務物件）、toggleTask（切換任務完成狀態的函數）、deleteTask（刪除任務的函數）
const Task = ({ task, toggleTask, deleteTask }) => {
    return (
        // 任務的外層 div，類名為 "task"
        <div className="task">
            {/* 勾選框，顯示任務是否完成 */}
            <input
                type="checkbox" // 設定為勾選框
                checked={task.done} // 勾選框是否被選中，根據 task.done 決定
                onChange={() => toggleTask(task.id)} // 當勾選框狀態改變時，觸發 toggleTask 函數
            />
            {/* 顯示任務文字，如果任務完成，文字顯示 "done" 類名，這樣可以應用完成的樣式 */}
            <span className={task.done ? 'done' : ''}>{task.text}</span>
            {/* 刪除按鈕，點擊後會執行 deleteTask 函數，並傳遞當前任務的 id */}
            <button className="delete" onClick={() => deleteTask(task.id)}>
                ✖ {/* 顯示刪除符號 */}
            </button>
        </div>
    );
};

// 將 Task 元件導出，供其他文件使用
export default Task;
