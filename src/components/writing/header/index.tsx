import React, { useState,useEffect } from 'react'
import { Link } from 'umi'

import { Space,Affix,Button} from 'antd'
import {TriangleIcon,TriangleReverseIcon} from '@/assets/svg'
import 'antd/dist/antd.css'

const HeaderWritting = (props) => {
  const onSave=()=>{
    console.log("onSave")
  }
  const submit=()=>{
    console.log(props.data)
  }
  return (
    <div className="main">
      <Affix offsetTop={0}>
        <Link to="/">
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
        </Link>
        <Link to="/management">
          <Space
            size={32}
            style={{
              position:'absolute',
              right:330,
              top:16
            }}>

            <Button onClick={onSave}>保存草稿</Button>
            <Button onClick={submit}>发布</Button>

          </Space>
        </Link>
      </Affix>
    </div>
  )
}

export default HeaderWritting
