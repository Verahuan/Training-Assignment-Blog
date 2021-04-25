import React from 'react'
import {connect,Link} from 'umi'
import { Layout, Space, Divider, Avatar, Typography, Tag, Image, Table } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import {MessageIcon,ReadingIcon} from '@/assets/svg'
import './index.less'

const { Content } = Layout
const { Title, Paragraph } = Typography
const data={
  head:"图文版设计分会：基础设计原理",
  name:"张丰",
  time:"2020-08-12 12:31",
  reading:"20192",
  comments:"192",
  content:"本期篇幅很短了，作为 WWDC 设计分会之“基础设计原理”的收尾。这场时长约为一个小时的讲演，被我们拆解为五期图文；期间，我们跟随 Apple 设计布道者团队的 Mike Stern 老师一起了解了十项基本设计原理，包括导航、反馈、可见性、一致性、心智模型、邻近性、映射、可供性、渐进呈现、对称性。",
  tags:["用户体验","设计原则","设计原则","设计原则"]
}

const Article=(props: any)=>{
  const {id,head,name,time,reading,comments,content,tags}=props.data
  const toArticleContent=()=>{
    props.dispatch({
      type:"CurrentArticleContentModel/getList",
      payload:{
        id,head,name,time,reading,comments,content,tags
      }
    })
  }
  const Tags= (
    <div>
      {
        tags.map((tag) => {
          return (
            // 对map 循环出来的每个属性插入标签元素
            <Tag color="cyan" style={{margin:"0 8px"}}>{tag}</Tag>
          )
        })
      }
    </div>)
  const ShowImage=(props)=>{
    const {isShowImage} = props
    if(isShowImage){
      return (<Image
        width={809}
        height={240}
        src="error"
      />)
    }
    return  null
  }
  return (
    <div className="article" onClick={toArticleContent}>
      <Link to="/content">
        <Layout>
          <Content style={{backgroundColor:"#fff"}}>
            <Typography>
              <Title  level={2} className="articleTitle">
                {head}
              </Title>
              <Space split={<Divider type="vertical" />} className="articleInfo">
                <Space align="center" size={8} className="info">
                  <Avatar size={24} icon={<UserOutlined />} />
                  <div>
                    {name}
                  </div>
                </Space>
                <div>发表于：{time}</div>
                <div>
                  <Space size={7}>
                    <MessageIcon/>
                    <div>{reading}</div>
                  </Space>
                </div>
                <div>
                  <Space size={7}>
                    <ReadingIcon/>
                    <div>
                      {comments}
                    </div>
                  </Space>
                </div>
              </Space>
              <Paragraph className="paragraph">
                <ShowImage isShowImage={false}/>
                <div>{content}</div>
              </Paragraph>
            </Typography>
          </Content>
          <Content style={{backgroundColor:"#fff"}}>
            {Tags}
          </Content>
        </Layout>
      </Link>
    </div>

  )
}
const mapStateToModel=({CurrentArticleContentModel})=>{
  return {
    CurrentArticleContentModel
  }
}
export default connect(mapStateToModel)(Article)
