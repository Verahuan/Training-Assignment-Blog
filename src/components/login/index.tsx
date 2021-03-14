import React from 'react'
import {Modal,Form, Input, Button, Checkbox,Space,} from 'antd'
import {TriangleIcon,TriangleReverseIcon,UserInfoIcon,UserLockIcon} from '@/assets/svg'

import styles  from './index.less'
// 改为input
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const Login=()=>{
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <Modal
        bodyStyle={
          {
            position:'absolute',
            top:64,
            right:70,
            padding:0,
            backgroundColor:'green'
          }
        }
        style={{
          height: 480,
          backgroundColor:"#fff",
          boxShadow: "0px 12px 42px rgba(0, 0, 0, 0.12)",
          borderRadius: 8,
        }
        }
        width={440}
        visible={true}
        centered={true}
        footer={null}
        closable={false}
        maskClosable={false}
      >
        <div>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Space size={40} direction={'vertical'}>
              <Space
                size={20}
                direction={'vertical'}
                style={{
                  display:'flex',
                  alignItems:'center',
                  backgroundColor:'pink'
                }}>
                <Space
                  size={-10}>
                  <TriangleIcon/>
                  <TriangleReverseIcon/>
                </Space>
                <div style={{
                  fontFamily: "FZZongYi-M05S",
                  fontSize: "14px",
                  lineHeight: "16px"
                }}>LOGO</div>
              </Space>
              <Space direction={'vertical'} size={20}>
                <Form.Item
                  className={styles.FormItem}
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input
                    className={styles.InputStyle}
                    prefix={<UserInfoIcon/>}
                    placeholder="用户名"
                  />

                </Form.Item>

                <Form.Item
                  className={styles.FormItem}
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password
                    className={styles.InputStyle}
                    prefix={<UserLockIcon/>}
                    placeholder="密码"/>
                </Form.Item>
                <Form.Item
                  className={styles.FormItem}
                  name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Space>

              <Form.Item
                className={styles.FormItem}
              >
                <Button type="primary" htmlType="submit">
              登录
                </Button>
              </Form.Item>
            </Space>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default Login
