import React, { useState,useEffect } from 'react'
import { connect } from 'umi'
import { Link } from 'umi'

import { Menu, Dropdown,Avatar,Space,Affix} from 'antd'
import Login from '@/components/login'
import SignIn from '@/components/login/SignIn'
import AdminMenu from '@/components/header/components/AdminMenu/index.tsx'
import UserMenu from '@/components/header/components/UserMenu/index.tsx'
import LoginOut from '@/components/header/components/LogOut'

import { getCookie, setCookie } from '@/api/utils/cookie.ts'
import {UserOutlined} from '@ant-design/icons'
import {DownIcon,TriangleIcon,TriangleReverseIcon} from '@/assets/svg'
import 'antd/dist/antd.css'
import './styles.less'


/* const AdminMenu = ()=>{
  return (
    <Menu onClick={({item, key, keyPath, domEvent } )=>{
      console.log(item, key, keyPath, domEvent )
      if(key==="2"){
        setCookie("none")
      }
    }}>
      <Menu.Item key="1">
        <Link to="/management">管理后台</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/">退出</Link>
      </Menu.Item>
    </Menu>
  )}
const UserMenu=()=> {
  return (
    <Menu onClick={({ item, key, keyPath, domEvent }) => {
      console.log(key)
      if (key === "2") {
        console.log("z")
      }
    }}>
      <Menu.Item key="2" onClick={LoginOut}>
        <Link to="/">退出</Link>
      </Menu.Item>
    </Menu>
  )
} */
const Admin=(props)=>{
  return (
    <Space align="center" size={8} className="info">
      <Avatar size={32} icon={<UserOutlined />} />
      <div>
        {props.username}
      </div>
      <Dropdown overlay={<AdminMenu/>}>
        <DownIcon/>
      </Dropdown>
    </Space>
  )
}
const User=(props)=>{
  return (
    <Space align="center" size={8} className="info">
      <Avatar size={32} icon={<UserOutlined />} />
      <div>
        {props.username}
      </div>
      <Dropdown overlay={<UserMenu/>}>
        <DownIcon/>
      </Dropdown>
    </Space>
  )
}

const HeaderAntD = (props) => {
  const [name,setName]=useState("张三丰")
  const [initLog,setInitLog]=useState(false)
  const [isLogin,setLogin]=useState(false)
  const [isAdmin,setIsAdmin]=useState(false)
  const [isSign,setSign]=useState(false)


  useEffect(()=>{
    if(props.userRelatedModel.code===200){
      setLogin(false)
      setInitLog(true)
      setName(props.userRelatedModel.data.token)
      setCookie(props.userRelatedModel.data.token)
      setIsAdmin(getCookie()==="admin")
    }
    if(props.userRelatedModel.code===10010){
      alert("用户名或者密码输入错误")
    }
  })
  useEffect(()=>{
    console.log(props.userRelatedModel.isLogout,"logout")
    if(props.userRelatedModel.isLogout===true){
      setInitLog(false)
    }
  })

  function LoginChange(){
    setLogin(true)
    props.dispatch({
      type: 'userRelatedModel/changeLogin'
    })
  }
  function SignInChange(){
    setSign(true)
    props.dispatch({
      type: 'userRelatedModel/changeLogin'
    })
  }
  return (
    <div className="main">
      {props.userRelatedModel.loading}
      <Affix offsetTop={0}>
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
        {isLogin && <Login isModalVisible={isLogin} />}
        <SignIn isModalVisible={isSign} />
        {initLog ? (isAdmin?<Admin username={name}/>:<User username={name}/>):<LoginOut login={LoginChange} signIn={SignInChange}/>}
      </Affix>
    </div>
  )
}
const mapStateToProps = ({ userRelatedModel }) => {
  return {
    userRelatedModel
  }
}

export default connect(mapStateToProps)(HeaderAntD)
