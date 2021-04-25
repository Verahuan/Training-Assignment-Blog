import React, { useEffect, useState } from 'react'
import { Affix, Layout, Menu, Pagination, Space } from 'antd'
import {connect} from "umi"

import HeaderAntD from '@/components/header'
import Article from '@/components/article'
import HotComments from '@/components/hot/hotComments'
import HotPaper from '@/components/hot/hotPaper/index.tsx'
import './index.less'

const { Header, Footer, Sider, Content } = Layout
const Index= (props: any) => {
  const {data}=props.ArticleContentModel
  const Arr=data.slice(0,10)
  const {length} = data
  const [articleArr,ChangeArticleArr]=useState(Arr)
  const [CurrentPage,ChangeCurrentPage]=useState(0)
  const [PageSize,ChangePageSize]=useState(10)

  function AddArticle(page, pageSize){
    console.log(page, pageSize)
    ChangeArticleArr(data.slice((page-1)*pageSize,pageSize+(page-1)*pageSize))
  }
  useEffect(()=>{
    props.dispatch({
      type:"ArticleContentModel/getRemote"
    })
    console.log("init")
  },[])
  useEffect(()=>{
    console.log(CurrentPage*PageSize,PageSize)
    ChangeArticleArr(data.slice(0,10))
  },[props.ArticleContentModel])

  return <div>
    <Affix offsetTop={0}>
      <HeaderAntD/>
    </Affix>
    <Layout className="indexLayout">
      <Content className="indexContent">
        <Space size={8} direction="vertical">
          {
            articleArr.length>0&&articleArr.map((item)=>{
              return <Article
                className="indexArticle" data={item} key={item.id}/>
            })
          }
          <Pagination
            pageSize={10}
            total={length}
            onChange={(page, pageSize)=>{
              ChangeCurrentPage(page)
              console.log(page)
              AddArticle(page, pageSize)}}/>
        </Space>
      </Content>
      <Content className="indexSide">
        <Space size={200}>
          <HotComments className="indexSideHotPaper"/>
          <HotPaper className="indexSideHotComments"/>
        </Space>
      </Content>
    </Layout>
  </div>
}
const mapToState=({ArticleContentModel})=>{
  return {
    ArticleContentModel
  }
}
export default connect(mapToState)(Index)
