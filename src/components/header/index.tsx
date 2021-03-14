import React, { useState } from 'react'
import { Menu, Dropdown,Avatar,Space } from 'antd'
import {UserOutlined} from '@ant-design/icons'
import {DownIcon,TriangleIcon,TriangleReverseIcon} from '@/assets/svg'
import 'antd/dist/antd.css'
import './styles.less'

const menu = (
  <Menu>
    <Menu.Item>
      登录后台
    </Menu.Item>
    <Menu.Item>
      退出
    </Menu.Item>
  </Menu>
)
const HeaderAntD = () => {
  const [name,setName]=useState("张三丰")
  return (
    <div className="main">
      <Space align="center" size={8} className="logo" >
        <Space size={-10} align="start">
          <TriangleIcon/>
          <TriangleReverseIcon/>
        </Space>
        <div
          className="logoText"
        >logo
        </div>
      </Space>
      <Space align="center" size={8} className="info">
        <Avatar size={32} icon={<UserOutlined />} />
        <div>
          {name}
        </div>
        <Dropdown overlay={menu}>
          <DownIcon/>
        </Dropdown>
      </Space>
    </div>

  )
}
export default HeaderAntD
