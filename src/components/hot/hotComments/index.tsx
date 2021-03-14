import React from 'react'
import {Card,Tag,Space} from 'antd'

const comments=[
  {
    id:1,
    context:"存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。"
  },
  {
    id:2,
    context:"此目录下所有文件会被 copy 到输出路径。"
  }

]
const Comment= (
  <div>
    {
      comments.map((comment) => {
        return (
          // 对map 循环出来的每个属性插入标签元素
          <Space size={8}>
            <Tag color="#0CCCC3">
              {comment.id}
            </Tag>
            <p style={{width:309,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}}>{comment.context}</p>
          </Space>
        )
      })
    }
  </div>)

const HotComments=()=>{
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
          {
            Comment
          }
        </Space>
      </Card>
    </div>
  )
}

export default HotComments
