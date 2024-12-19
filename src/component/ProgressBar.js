import React from 'react';

// 定義一個名為 ProgressBar 的函數型元件
// 接收一個屬性 tasks，表示任務列表
const ProgressBar = ({ tasks }) => {
    // 計算進度百分比：已完成任務數量除以總任務數量，乘以 100
    // 如果 tasks.length 為 0，預設進度為 0（避免除以 0 的錯誤）
    const progress = (tasks.filter((task) => task.done).length / tasks.length) * 100 || 0;

    return (
        // 包裹進度條的外層容器，類名為 "progress-bar"
        <div className="progress-bar">
            {/* 實際的進度條 */}
            <div
                className="progress"
                style={{
                    width: `${progress}%`, // 設定進度條的寬度為計算出的百分比
                }}
            ></div>
        </div>
    );
};

// 將 ProgressBar 元件導出，供其他文件使用
export default ProgressBar;


// import React from 'react';

// const ProgressBar = ({ tasks }) => {
//     const progress = (tasks.filter((task) => task.done).length / tasks.length) * 100 || 0;

//     return (
//         <div className="progress-bar" style={{ position: 'relative' }}>
//             {/* 顯示百分比數字 */}
//             <span
//                 className="progress-label"
//                 style={{
//                     position: 'absolute',
//                     left: `${progress}%`,
//                     transform: 'translateX(-50%)',
//                     top: '0px', // 根據需要調整位置
//                     fontSize: '12px',
//                     fontWeight: 'bold',
//                     color: '#000 !important', // 設定黑色
//                 }}
//             >
//                 {Math.round(progress)}%
//             </span>
//             <div
//                 className="progress"
//                 style={{
//                     width: `${progress}%`,
//                     height: '10px',
//                     backgroundColor: '#4caf50',
//                 }}
//             ></div>
//         </div>
//     );
// };

// export default ProgressBar;

