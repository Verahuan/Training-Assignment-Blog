import { Menu } from 'antd'
import { Link ,connect} from 'umi'
import React from 'react'

const AdminMenu = (props)=>{
  const logOut = () => {
    props.dispatch({
      type: 'userRelatedModel/changeLogin'
    })
  }
  return (
    <Menu onClick={({item, key, keyPath, domEvent } )=>{
      console.log(item, key, keyPath, domEvent )
      if(key==="2"){
        logOut()
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

const mapStateToProps = ({ userRelatedModel }) => {
  return {
    userRelatedModel
  }
}

export default connect(mapStateToProps)(AdminMenu)
