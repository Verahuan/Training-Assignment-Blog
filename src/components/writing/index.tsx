import React from 'react'
import HeaderAntD from '@/components/header'
import { Affix,Form, Input,Select  } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import styles from "./index.less"

const { Option } = Select

const controls=[
  'undo', 'redo','headings','font-size','bold','italic','underline','text-align','media'
]
const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

const Writing=()=>{
  return (
    <>
      <Affix offsetTop={0}>
        <HeaderAntD/>
      </Affix>
      <Form className={styles.form}>
        <Form.Item>
          <Input placeholder="请输入标题" className={styles.title}/>
        </Form.Item>
        <Form.Item >
          <BraftEditor
            controls={controls}
            className={styles.text}
            placeholder="请输入正文"/>
        </Form.Item>
        <Form.Item>
          <span>请选择标签</span>
          <span>最多选择5个标签</span>
          <Select
            className={styles.select}
            mode="multiple"
            allowClear
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
          >
            {children}
          </Select>
        </Form.Item>
      </Form>
    </>
  )

}
export default Writing
