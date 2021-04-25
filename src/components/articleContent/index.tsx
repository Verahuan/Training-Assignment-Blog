import React, { useState } from 'react'
import {connect} from 'umi'
import HeaderAntD from '@/components/header'
import { Avatar, Breadcrumb, Divider, Space, Typography,Affix,Anchor,Tree, Comment,Input,Button,BackTop } from 'antd'
import styles from './index.less'
import { UserOutlined } from '@ant-design/icons'
import { MessageIcon, ReadingIcon,TreeDownSvgIcon } from '@/assets/svg'

const { Title, Paragraph} = Typography
const {Link} = Anchor
const { TextArea } = Input
const data={
  head:"图文版设计分会：基础设计原理",
  name:"张三丰",
  time:"2020-08-12 12:31",
  reading:"20192",
  comments:"192",
  content:"本期篇幅很短了，作为 WWDC 设计分会之“基础设计原理”的收尾。这场时长约为一个小时的讲演，被我们拆解为五期图文；期间，我们跟随 Apple 设计布道者团队的 Mike Stern 老师一起了解了十项基本设计原理，包括导航、反馈、可见性、一致性、心智模型、邻近性、映射、可供性、渐进呈现、对称性。",
  tags:["用户体验","设计原则","设计原则","设计原则"]
}

const contentToTree=(content)=>{
  const TreeDate=[]
  content.map((item)=>{
    console.log(item.title,"title")
    const temp={
      title:<Link href={`#${item.id}`} title={item.title} className={styles.articleAnchorLink}/>,
      key: item.id
    }
    if(item.children){
      temp.children=[]
      item.children.map((child)=>{
        temp.children.push({
          title:<Link href={`#${child.id}`} title={child.title} className={styles.articleAnchorLink}/>,
          key: child.id
        })
      })
    }
    TreeDate.push(temp)
  })
  return TreeDate
}
const LinkRoad=()=>{
  return (
    <div>zhhh</div>
  )
}
const SingleConment=({data})=>{
  return (
    <div>
      {
        data.map((item)=>{
          return (<Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>{item.author}</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                {item.content}
              </p>
            }
          >{}
          </Comment>)
        })
      }
    </div>

  )
}
const ContentShow=(props)=>{
  return (
    <div>
      {
        props.content.map((item)=>{
          console.log(item.children,"item")
          return (<div >
            <div id={item.id} className={styles.articleContentH1}>{item.title}</div>
            <div className={styles.articleContent}>{item.content}</div>
            {
              item.children && item.children.map((child)=>{
                return (
                  <div>
                    <div id={child.id} className={styles.articleContentH2}>{child.title}</div>
                    <div className={styles.articleContent}>{child.content}</div>
                  </div>
                )
              })
            }
          </div>)
        })
      }
    </div>
  )}
const ArticleContent=(props)=>{

  const {head,name,time,reading,comments,content,tags}=props.CurrentArticleContentModel
  const [comment,CommentChange]=useState("")

  console.log(comments,'comments')
  const res= contentToTree(content)
  const changeComment=(value)=>{
    CommentChange(value)
  }
  const submit=()=>{
    const node=document.getElementById("submit")
    node.value=""
    props.dispatch({
      type:'CurrentArticleContentModel/changeComment',
      payload:{
        author:"Test",
        content:comment
      }
    })
  }

  return (
    <>
      <Affix offsetTop={0}>
        <HeaderAntD/>
      </Affix>
      <div className={styles.articleLayout}>
        <div className={styles.articleLeft}>
          <Breadcrumb separator=">" className={styles.articleBread}>
            <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">正文</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <Title  level={2} className={styles.articleTitle}>
              {head}
            </Title>
            <Space split={<Divider type="vertical" />} className={styles.articleInfo}>
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
                    {comments.length}
                  </div>
                </Space>
              </div>
            </Space>
            <Paragraph>
              <Space size={48} direction={'vertical'}>
                <ContentShow content={content}/>
              </Space>
            </Paragraph>
          </Typography>
          <div style={{marginTop:72}}>
            全部评论({comments.length})
            <Divider/>
            <div style={{
              position:'relative',
            }}>
              <Space size={12}>
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
                <TextArea id="submit" rows={4} style={{width:757,height:98}} onChange={(e)=>{changeComment(e.target.value)}}/>
              </Space>
              <Button

                style={{
                  position:'absolute',
                  right:0,
                  top:138
                }}
                onClick={submit}
              >发表评论</Button>

            </div>
            <div style={{
              marginTop:68
            }}>
              <SingleConment data={comments}/>
              <Divider style={{
                marginTop:48,
                marginBottom:160
              }}>没有更多评论了</Divider>
            </div>
          </div>
        </div>
        <div className={styles.articleRight}>
          <Affix offsetTop={137}>
            <div>
              文章目录
              <Anchor
                targetOffset={window.innerHeight / 2}
                className={styles.articleAnchor}
                affix={false}
                showInkInFixed={false}
              >
                <Tree
                  treeData={res}
                  defaultExpandAll={true}
                  switcherIcon={<TreeDownSvgIcon />}
                >
                </Tree>
              </Anchor>
            </div>
          </Affix>
        </div>
        <BackTop/>
      </div>
    </>
  )
}
const mapStateToModel=({CurrentArticleContentModel})=>{
  return {
    CurrentArticleContentModel
  }
}
export default connect(mapStateToModel)(ArticleContent)
