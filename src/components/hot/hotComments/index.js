import React from 'react';
import { Card, Tag, Space } from 'antd';
const comments = [
    {
        id: 1,
        context: "存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。"
    },
    {
        id: 2,
        context: "此目录下所有文件会被 copy 到输出路径。"
    }
];
const Comment = (React.createElement("div", null, comments.map((comment) => {
    return (
    // 对map 循环出来的每个属性插入标签元素
    React.createElement(Space, { size: 8 },
        React.createElement(Tag, { color: "#0CCCC3" }, comment.id),
        React.createElement("p", { style: { width: 309, whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" } }, comment.context)));
})));
const HotComments = () => {
    return (React.createElement("div", null,
        React.createElement(Card, { title: "\u70ED\u95E8\u6587\u7AE0", bordered: false, style: {
                width: 375,
                position: 'absolute',
                top: 44,
                left: 0
            } },
            React.createElement(Space, { direction: "vertical" }, Comment))));
};
export default HotComments;
//# sourceMappingURL=index.js.map