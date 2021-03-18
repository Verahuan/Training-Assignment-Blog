// input table 结合网络请求 数据处理过程交给服务端
import { Table,Button,Space,Popconfirm, Tag,Input } from 'antd'
import {useState} from 'react'
import {SearchIcon,PlusCircleIcon} from '@/assets/svg'
import styles from "./index.less"
import React from 'react'

const data: any[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    state: i%2?"已发布":(<Tag color='red'>草稿</Tag>),
    stateFilter:i%2?"已发布":"草稿",
    time:`${i}hours`,
    operation:"delete"
  })
}

const TagsManagement=()=>{
  const [dataSource,changeDateSource]=useState(data)
  const columns = [
    {
      title: '标签名称',
      dataIndex: 'name',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width:120,
      render: (_, record) =>
        data.length >= 1 ? (
          <Space size={16}>
            <a
              href="#"
              onClick={console.log("edit")}
              style={{
                marginRight: 8,
              }}
            >
              编辑
            </a>
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
      <Input placeholder="搜索标签名称" prefix={<SearchIcon/>} className={styles.input}/>
      <Button type="primary" icon={<PlusCircleIcon />} className={styles.btn}>
        新键文章
      </Button>
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
export default TagsManagement
