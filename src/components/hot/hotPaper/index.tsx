import React from 'react'
import { Comment, Tooltip, Avatar, Space, Card } from 'antd'
import moment from 'moment'
import {TextSvgIcon} from '@/assets/svg/index.tsx'


const Author=(props)=>{
  return (
    <div style={{
      display:'flex',
      alignItems:'center',
    }}>
      <Space size={8}>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Name"
          style={{
            height:30,
            width:30
          }}
        />
        <a>{props.name}</a>
      </Space>
      <span style={{
        position:'absolute',
        right:0
      }}>{moment().fromNow()}</span>
    </div>)
}
const Content=()=>{
  return (
    <div>
      <Space
        size={0} direction='vertical' style={{
          marginTop:0,
        marginBottom:14
        }}>
        <div style={{
          position:'relative',
          left:8,
          width:0,
          borderBottom: '6px solid #F7F7F7',
          borderRight:'6px solid transparent',
          borderLeft:'6px solid transparent'
        }}>
        </div>
        <div style={{
          backgroundColor:'#F7F7F7',
          borderRadius:4,
          padding:16
        }}>
        如何构建自己的认知体系？收下高级设计师的总...
        </div>
      </Space>
      <div>
        <Space size={8}>
          <TextSvgIcon/>
          <div>{"props.source"}</div>
        </Space>
      </div>
    </div>
  )
}
const HotPaper=(props)=>{
  return (
    <div {...props}>
      <Card
        title="热门评论" bordered={false} style={{
          width: 375 ,
          position:'absolute',
          top:44,
          left:0
        }}>
        <Space direction="vertical">
          <Comment
            author={<Author name="张三"/>}
            content={<Content/>}
          />
        </Space>
      </Card>
    </div>
  )
}
export default HotPaper
