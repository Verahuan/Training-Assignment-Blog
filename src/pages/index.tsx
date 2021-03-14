import React from 'react'
import { Layout ,Pagination ,Space} from 'antd'

import HeaderAntDader from '@/components/header'
import Article from '@/components/article'
import HotComments from '@/components/hot/hotComments'
import './index.less'

const { Header, Footer, Sider, Content } = Layout

export default (props: any) => {

  return <div>
    <HeaderAntDader/>
    <Layout className="indexLayout">
      <Content className="indexContent">
        <Space size={8} direction="vertical">
          <Article className="indexArticle"/>
          <Article className="indexArticle"/>
          <Article className="indexArticle"/>
          <Pagination defaultCurrent={1} total={50} />
        </Space>
      </Content>
      <Content className="indexSide">
        <HotComments/>
      </Content>
    </Layout>
  </div>
}
