// ProgressLabel.js
import React from 'react';

// 定義一個名為 ProgressLabel 的函數型元件
// 接收一個屬性 progress，表示進度的百分比
const ProgressLabel = ({ progress }) => {
    return (
        // 顯示進度百分比的文字
        <span
            className="progress-label"
            style={{
                position: 'relative', // 設定相對位置，讓進度標籤可以定位
                // left: `${progress}%`, // 這行被註解掉了，本來是用來根據進度百分比調整位置
                transform: 'translateX(-50%)', // 將進度標籤水平居中顯示
                top: '0px', // 調整標籤垂直位置，這裡設為 0，根據需要可以改變
                fontSize: '12px', // 設定字體大小為 12px
                fontWeight: 'bold', // 設定字體為加粗
                color: '#000', // 設定文字顏色為黑色
            }}
        >
            {Math.round(progress)}% {/* 顯示進度的整數百分比，使用 Math.round 四捨五入 */}
        </span>
    );
};

// 將 ProgressLabel 元件導出，供其他文件使用
export default ProgressLabel;
