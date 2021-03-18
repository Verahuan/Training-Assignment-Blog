import React from 'react'
import HeaderAntD from '@/components/header'
import { Avatar, Breadcrumb, Divider, Space, Typography,Affix,Anchor,Tree, Comment,Input,Button,BackTop } from 'antd'
import styles from './index.less'
import { UserOutlined } from '@ant-design/icons'
import { MessageIcon, ReadingIcon } from '@/assets/svg'

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

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: <Link href="#title1" title="title1"/>,
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title:  <Link href="#title2" title="title2" />,
            key: '0-0-0-0',
          },
          {
            title: <Link href="#title3" title="title3" />,
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: <Link href="#title4" title="title4" />,
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
]
const SingleConment=({children })=>{
  return (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      }
    >{
        children
      }
    </Comment>
  )
}
const ArticleContent=()=>{
  const {head,name,time,reading,comments,content,tags}=data
  return (
    <>
      <Affix offsetTop={0}>
        <HeaderAntD/>
      </Affix>
      <div className={styles.articleLayout}>
        <div className={styles.articleLeft}>
          <Breadcrumb separator=">" className={styles.articleBread}>
            <Breadcrumb.Item href="">首页</Breadcrumb.Item>
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
                    {comments}
                  </div>
                </Space>
              </div>
            </Space>
            <Paragraph>
              <Space size={48} direction={'vertical'}>
                <div className={styles.articleContent} id="title1">{content}</div>
                <div className={styles.articleContent} id="title2">{content}</div>
                <div className={styles.articleContent} id="title4">{content}</div>
                <div className={styles.articleContent} id="title5">{content}</div>
                <div className={styles.articleContent}>{content}</div>
                <div className={styles.articleContent}>{content}</div>
                <div className={styles.articleContent}>{content}</div>
                <div className={styles.articleContent}>{content}</div>
                <div className={styles.articleContent}>{content}</div>
                <div className={styles.articleContent}>{content}</div>
                <div className={styles.articleContent} id="title3" style={{backgroundColor:'red'}}>{content}</div>
              </Space>
            </Paragraph>
          </Typography>
          <div style={{marginTop:72}}>
            全部评论{comments}
            <Divider/>
            <div style={{
              position:'relative',
            }}>
              <Space size={12}>
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
                <TextArea rows={4} style={{width:757,height:98}}/>
              </Space>
              <Button
                disabled={true} style={{
                  position:'absolute',
                  right:0,
                  top:138
                }}>发表评论</Button>

            </div>
            <div style={{
              marginTop:68
            }}>
              <SingleConment>
                <SingleConment>
                  <SingleConment/>
                </SingleConment>
              </SingleConment>
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
                className={styles.articleAnchor}>
                <Tree treeData={treeData} defaultExpandAll={true}>
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
export default ArticleContent
