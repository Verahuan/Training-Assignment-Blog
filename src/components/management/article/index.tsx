// input table 结合网络请求 数据处理过程交给服务端
import {useState} from 'react'
import { Table,Button,Space,Popconfirm, Tag,Input } from 'antd'
import {Link,connect} from "umi"
import {SearchIcon,PlusCircleIcon} from '@/assets/svg'
import styles from "./index.less"
import React from 'react'

const data: any[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    content:`<p>这是第${i}篇的内容</p>`,
    tags:["持续","加油","可可爱爱"],
    state: i%2?"已发布":(<Tag color='red'>草稿</Tag>),
    stateFilter:i%2?"已发布":"草稿",
    time:`${i}hours`,
    operation:"delete"
  })
}

const ArticleManagement=(props)=>{
  const [dataSource,changeDateSource]=useState(data)
  const Edit=(id)=>{
    props.dispatch({
      type:'articleContentModel/getList',
      payload:{
        title:data[id].name,
        content:data[id].content,
        tags:data[id].tags
      }
    })
  }
  const newEdit=()=>{
    props.dispatch({
      type:'articleContentModel/getList',
      payload:{
        title:"",
        content:"",
        tags:[]
      }
    })

  }

  console.log(props.articleContentModel,"model")
  const columns = [
    {
      title: '标题',
      dataIndex: 'name',
    },
    {
      title: '标签',
      dataIndex: 'age',
    },
    {
      title: '状态',
      dataIndex: 'state',
      filters:[{
        text:'已发布',
        value:'已发布',
      },{
        text:'草稿',
        value:'草稿',
      }
      ],
      onFilter: (value, record) => {
        console.log((record))
        return record.stateFilter.indexOf(value) === 0}
    },
    {
      title: '更新时间',
      dataIndex: 'time',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) =>
        data.length >= 1 ? (
          <Space size={16}>
            <Link to="/writing">
              <a
                href="#"
                onClick={()=>{
                  Edit(record.key)
                }}
                style={{
                  marginRight: 8,
                }}
              >
                编辑
              </a>
            </Link>

            <Popconfirm
              title="Sure to delete?" onConfirm={() => {
                const newDate=[...dataSource]
                console.log(record.key)
                changeDateSource(newDate.filter((item) => item.key !== record.key))
              }}>
              <a>删除</a>
            </Popconfirm>
          </Space>

        ) : null,
    },
  ]
  const [selectedRowKeys,SelectChange]=useState([])
  const rowSelection={
    selectedRowKeys,
    onChange: (selectedRowKeys)=>SelectChange(selectedRowKeys)}
  const hasSelected = selectedRowKeys.length > 0
  const onSearch = value => console.log(value)
  return (
    <>
      <Input placeholder="搜索文章标题" prefix={<SearchIcon/>} className={styles.input}/>
      <Link to="/writing">
        <Button type="primary" icon={<PlusCircleIcon />} className={styles.btn} onClick={newEdit}>
          新键文章
        </Button>
      </Link>
      <Table
        rowSelection={rowSelection} columns={columns} dataSource={dataSource} pagination={{
          showQuickJumper:true,
          defaultPageSize:20,
          showSizeChanger:true}} />
      <div style={{ marginTop: 16 }}>
        <Popconfirm
          title="Sure to delete?" onConfirm={() => {
            const newDate=[...dataSource]
            changeDateSource(newDate.filter((item) => !selectedRowKeys.includes(item.key)))
          }}>
          <Button type="primary" disabled={!hasSelected} className={styles.deleteBtn}>
          批量删除
          </Button>
        </Popconfirm>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
    </>
  )
}

const mapStateToProps=({articleContentModel})=>{
  return {
    articleContentModel
  }
}
export default connect(mapStateToProps)(ArticleManagement)
