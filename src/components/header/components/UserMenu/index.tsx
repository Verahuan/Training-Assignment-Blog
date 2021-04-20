import { Menu } from 'antd'
import { connect, Link } from 'umi'
import React from 'react'

const UserMenu=(props)=> {
  const logOut = () => {
    props.dispatch({
      type: 'userRelatedModel/changeLogin'
    })
  }
  return (
    <Menu onClick={({ item, key, keyPath, domEvent }) => {
      console.log(key)
      if (key === "2") {
        logOut()
      }
    }}>
      <Menu.Item key="2">
        <Link to="/">退出</Link>
      </Menu.Item>
    </Menu>
  )
}
const mapStateToProps = ({ userRelatedModel }) => {
  return {
    userRelatedModel
  }
}

export default connect(mapStateToProps)(UserMenu)
