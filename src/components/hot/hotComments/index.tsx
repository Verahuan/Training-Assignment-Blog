import React, { useEffect, useState } from 'react'
import {Card,Tag,Space} from 'antd'
import {connect} from 'umi'

/* const comments=[
  {
    id:1,
    context:"存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。"
  },
  {
    id:2,
    context:"此目录下所有文件会被 copy 到输出路径。"
  },
  {
    id:3,
    context:"此目录下所有文件会被 copy 到输出路径。"
  },
  {
    id:4,
    context:"此目录下所有文件会被 copy 到输出路径。"
  },
  {
    id:5,
    context:"此目录下所有文件会被 copy 到输出路径。"
  }

] */
const Comment=(props)=>{
  const comments=props.data
  return   (
    <div>
      {
        <Space size={20} direction="vertical">{
          comments.map((comment) => {
            return (
              // 对map 循环出来的每个属性插入标签元素
              <Space size={8}>
                <Tag color="#0CCCC3" style={{borderRadius:2}}>
                  {comment.id}
                </Tag>
                <p style={{width:309,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}}>{comment.context}</p>
              </Space>
            )
          })}</Space>
      }
    </div>)
}


const HotComments=(props)=>{
  useEffect(()=>{
    props.dispatch({
      type:'hotCommentsModal/getRemote'
    })
  },[])
  console.log(props.hotCommentsModal)
  return (
    <div>
      <Card
        title="热门文章" bordered={false} style={{
          width: 375 ,
          position:'absolute',
          top:44,
          left:0
        }}>
        <Space direction="vertical">
          <Comment data={props.hotCommentsModal.data}/>
        </Space>
      </Card>
    </div>
  )
}
const mapToState=({hotCommentsModal})=>{
  return {
    hotCommentsModal
  }

}
export default connect(mapToState)(HotComments)
