import React, { useState } from 'react';
import { Menu, Dropdown, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DownIcon, TriangleIcon, TriangleReverseIcon } from '@/assets/svg';
import 'antd/dist/antd.css';
import './styles.less';
const menu = (React.createElement(Menu, null,
    React.createElement(Menu.Item, null, "\u767B\u5F55\u540E\u53F0"),
    React.createElement(Menu.Item, null, "\u9000\u51FA")));
const HeaderAntD = () => {
    const [name, setName] = useState("张三丰");
    return (React.createElement("div", { className: "main" },
        React.createElement(Space, { align: "center", size: 8, className: "logo" },
            React.createElement(Space, { size: -10, align: "start" },
                React.createElement(TriangleIcon, null),
                React.createElement(TriangleReverseIcon, null)),
            React.createElement("div", { className: "logoText" }, "logo")),
        React.createElement(Space, { align: "center", size: 8, className: "info" },
            React.createElement(Avatar, { size: 32, icon: React.createElement(UserOutlined, null) }),
            React.createElement("div", null, name),
            React.createElement(Dropdown, { overlay: menu },
                React.createElement(DownIcon, null)))));
};
export default HeaderAntD;
//# sourceMappingURL=index.js.map