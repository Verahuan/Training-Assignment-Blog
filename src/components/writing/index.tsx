import React ,{useEffect}from 'react'
import {connect} from 'umi'
import HeaderWritting from '@/components/writing/header/index.tsx'

import { Affix,Form, Input,Select,Button  } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import styles from "./index.less"

const { Option } = Select

const controls=[
  'undo', 'redo','headings','font-size','bold','italic','underline','text-align','media']
const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}
const data={
  title:"",
  content:"",
  tags:[]
}
const Writing=(props)=>{
  const [form] = Form.useForm()
  useEffect(()=>{
    console.log(props.articleContentModel,"content")
  })
  const onFinish = (values: any) => {
    console.log(values,"value")
  }
  const selectionChange = (values: any) => {
    data.tags=values
  }
  const EditorChange = (values: any) => {
    data.content=values
  }
  const TitleChange = (e: any) => {
    data.tags=e.target.value
  }

  return (
    <>
      <Affix offsetTop={0}>
        <HeaderWritting data={data}/>
      </Affix>
      <Form className={styles.form} form={form} onFinish={onFinish}>
        <Form.Item name='title'>
          <Input
            placeholder="请输入标题" className={styles.title}
            defaultValue={props.articleContentModel.title}
            onChange={(e)=>{
              TitleChange(e)
            }}/>
        </Form.Item>
        <Form.Item name='content'>
          <BraftEditor
            controls={controls}
            className={styles.text}
            defaultValue={BraftEditor.createEditorState(props.articleContentModel.content)}
            placeholder="请输入正文"
            onChange={(val)=>{
              EditorChange(JSON.stringify(val.toHTML()))
            }}
          />
        </Form.Item>
        <Form.Item name='tags'>
          <span>请选择标签</span>
          <span>最多选择5个标签</span>
          <Select
            className={styles.select}
            mode="multiple"
            allowClear
            placeholder="请选择"
            defaultValue={['a10', 'c12']}
            onChange={(val)=>{
              selectionChange(val)
            }}
          >
            {children}
          </Select>
        </Form.Item>
      </Form>
    </>
  )

}
const mapStateToProps=({articleContentModel})=>{
  return {
    articleContentModel
  }
}
export default connect(mapStateToProps)(Writing)
