import React from 'react';
import { Layout, Pagination, Space } from 'antd';
import HeaderAntDader from '@/components/header';
import Article from '@/components/article';
import HotComments from '@/components/hot/hotComments';
import './index.less';
const { Header, Footer, Sider, Content } = Layout;
export default (props) => {
    return React.createElement("div", null,
        React.createElement(HeaderAntDader, null),
        React.createElement(Layout, { className: "indexLayout" },
            React.createElement(Content, { className: "indexContent" },
                React.createElement(Space, { size: 8, direction: "vertical" },
                    React.createElement(Article, { className: "indexArticle" }),
                    React.createElement(Article, { className: "indexArticle" }),
                    React.createElement(Article, { className: "indexArticle" }),
                    React.createElement(Pagination, { defaultCurrent: 1, total: 50 }))),
            React.createElement(Content, { className: "indexSide" },
                React.createElement(HotComments, null))));
};
//# sourceMappingURL=index.js.map