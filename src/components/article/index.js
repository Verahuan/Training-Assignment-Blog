import React from 'react';
import { Layout, Space, Divider, Avatar, Typography, Tag, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MessageIcon, ReadingIcon } from '@/assets/svg';
import './index.less';
const { Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const data = {
    head: "图文版设计分会：基础设计原理",
    name: "张三丰",
    time: "2020-08-12 12:31",
    reading: "20192",
    comments: "192",
    content: "本期篇幅很短了，作为 WWDC 设计分会之“基础设计原理”的收尾。这场时长约为一个小时的讲演，被我们拆解为五期图文；期间，我们跟随 Apple 设计布道者团队的 Mike Stern 老师一起了解了十项基本设计原理，包括导航、反馈、可见性、一致性、心智模型、邻近性、映射、可供性、渐进呈现、对称性。",
    tags: ["用户体验", "设计原则", "设计原则", "设计原则"]
};
const Article = (props) => {
    const { head, name, time, reading, comments, content, tags } = data;
    const Tags = (React.createElement("div", null, tags.map((tag) => {
        return (
        // 对map 循环出来的每个属性插入标签元素
        React.createElement(Tag, { color: "cyan", style: { margin: "0 8px" } }, tag));
    })));
    const ShowImage = (props) => {
        const { isShowImage } = props;
        if (isShowImage) {
            return (React.createElement(Image, { width: 809, height: 240, src: "error" }));
        }
        return null;
    };
    return (React.createElement("div", { className: "article" },
        React.createElement(Layout, null,
            React.createElement(Content, { style: { backgroundColor: "#fff" } },
                React.createElement(Typography, null,
                    React.createElement(Title, { level: 2, className: "articleTitle" }, head),
                    React.createElement(Space, { split: React.createElement(Divider, { type: "vertical" }), className: "articleInfo" },
                        React.createElement(Space, { align: "center", size: 8, className: "info" },
                            React.createElement(Avatar, { size: 24, icon: React.createElement(UserOutlined, null) }),
                            React.createElement("div", null, name)),
                        React.createElement("div", null,
                            "\u53D1\u8868\u4E8E\uFF1A",
                            time),
                        React.createElement("div", null,
                            React.createElement(Space, { size: 7 },
                                React.createElement(MessageIcon, null),
                                React.createElement("div", null, reading))),
                        React.createElement("div", null,
                            React.createElement(Space, { size: 7 },
                                React.createElement(ReadingIcon, null),
                                React.createElement("div", null, comments)))),
                    React.createElement(Paragraph, { className: "paragraph" },
                        React.createElement(ShowImage, { isShowImage: false }),
                        React.createElement("div", null, content)))),
            React.createElement(Content, { style: { backgroundColor: "#fff" } }, Tags))));
};
export default Article;
//# sourceMappingURL=index.js.map