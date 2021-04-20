import React from 'react'
import {Link} from 'umi'
import {Modal,Form, Input, Button, Checkbox,Space,} from 'antd'
import {TriangleIcon,TriangleReverseIcon,UserInfoIcon,UserLockIcon,UserEmailIcon} from '@/assets/svg'

import styles  from './index.less'
// 改为input

const SignIn=(props)=>{
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
            padding:0
          }
        }
        style={{
          height: 584,
          backgroundColor:"#fff",
          boxShadow: "0px 12px 42px rgba(0, 0, 0, 0.12)",
          borderRadius: 8,
        }
        }
        width={440}
        centered={true}
        footer={null}
        closable={false}
        maskClosable={false}
        visible={props.isModalVisible}
      >
        <div>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Space
              size={20}
              direction={'vertical'}
              style={{
                display:'flex',
                alignItems:'center',
                marginBottom:'40px'
              }}>
              <Space
                size={-10}>
                <TriangleIcon/>
                <TriangleReverseIcon/>
              </Space>
              <div className={styles.logo}>LOGO</div>
            </Space>
            <Space direction={'vertical'} size={20}>
              <Form.Item
                name="username"
                className={styles.FormItem}
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input
                  className={styles.InputStyle}
                  prefix={<UserEmailIcon/>}
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item
                name="email"
                className={styles.FormItem}
                rules={[{ required: true, message: '请输入邮箱号' }]}
              >
                <Input
                  className={styles.InputStyle}
                  prefix={<UserInfoIcon/>}
                  placeholder="邮箱"
                />
              </Form.Item>
              <Form.Item
                name="password"
                className={styles.FormItem}
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password
                  className={styles.InputStyle}
                  prefix={<UserLockIcon/>}
                  placeholder="密码"/>
              </Form.Item>

              <Form.Item
                name="confirm"
                className={styles.FormItem}
                rules={[{ required: true, message: '请再次输入密码' }]}
              >
                <Input.Password
                  className={styles.InputStyle}
                  prefix={<UserLockIcon/>}
                  placeholder="确认密码"/>
              </Form.Item>
              <Form.Item
                className={styles.FormItem}
                style={{
                  marginBottom:'40px'
                }}
                name="remember" valuePropName="checked">
                <Checkbox
                  className={styles.CheckStyle}>我已阅读并同意《用户协议》</Checkbox>
              </Form.Item>
            </Space>
            <Form.Item
              className={styles.FormItem}
            >
              <Button className={styles.ButtonStyle} type="primary" htmlType="submit">
    登录
              </Button>
              <p className={styles.signIn}>已有账号？
                <Link to='/login'>
                  <a>立即登录</a>
                </Link>
              </p>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default SignIn
