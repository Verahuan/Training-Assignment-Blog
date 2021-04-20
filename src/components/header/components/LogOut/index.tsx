import React from 'react'
import {Space} from 'antd'

const LoginOut=(props)=>{
  return (
    <Space align="center" size={8} className="info">
      <div onClick={props.login}>登录</div>
      <div onClick={props.signIn}>注册</div>
    </Space>
  )
}
export default LoginOut
