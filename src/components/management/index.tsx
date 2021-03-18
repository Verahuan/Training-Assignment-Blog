import React from 'react'
import HeaderAntD from '@/components/header'
import { Affix,Tabs  } from 'antd'
import styles from './index.less'
import ArticleManagement from '@/components/management/article'
import TagsManagement from '@/components/management/tags'

const { TabPane } = Tabs
const Management=()=>{
  return(
    <>
      <Affix offsetTop={0}>
        <HeaderAntD/>
      </Affix>
      <div>
        <div className={styles.management}>
          <p>管理后台</p>
          <Tabs defaultActiveKey="1" className={styles.tabs}>
            <TabPane tab="文章管理" key="1">
              <ArticleManagement/>
            </TabPane>
            <TabPane tab="标签管理" key="2">
              <TagsManagement/>
            </TabPane>
          </Tabs>
        </div>

      </div>

    </>

  )
}
export default Management
