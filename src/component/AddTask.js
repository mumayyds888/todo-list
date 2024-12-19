import React from 'react';

// 定義一個名為 AddTask 的函數型元件
// 該元件接收三個屬性（props）：newTask（新任務）、setNewTask（更新新任務的函數）以及 addTask（添加任務的函數）
const AddTask = ({ newTask, setNewTask, addTask }) => {
    return (
        // 包裹輸入框與按鈕的 div，類名為 "add-task"
        <div className="add-task">
            {/* 輸入框，用於輸入新的任務 */}
            <input
                type="text" // 設定輸入框的類型為文字
                value={newTask} // 將輸入框的值綁定到 newTask
                // 當輸入框內容改變時，觸發 setNewTask 函數，更新 newTask 的值
                onChange={(e) => setNewTask(e.target.value)}
            />
            {/* 按鈕，用於添加新任務 */}
            <button onClick={addTask}>+</button>
        </div>
    );
};

// 將 AddTask 元件導出，供其他文件使用
export default AddTask;
