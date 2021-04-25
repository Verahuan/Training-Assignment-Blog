import type {Reducer, Effect} from 'umi'
import {fetchLogin } from '@/api/service/login'


interface userRelatedType{
  namespace: 'userRelatedModel',
  state: {},
  reducers: {
    getList: Reducer,
    changeLogin: Reducer
  },
  effects: {
    getRemote: Effect
  },
  subscriptions?: {

  }
}
// 2、远程数据 -> effects 获取 -> reducers 更新 state -> 刷新组件?
// 1.effects里面是多个操作的集合，如：页面正在加载数据，然后从服务器获取数据，页面数据加载完毕
// 2.reducer是一些列对状态的单操作保存，如修改state中的loading为true，修改state中的loading为false，这就是2个reducer
// 3.subscriptions是对地址也是路由的监控，订阅顾名思义就是订阅地址变化，相对于做出变化，发出dispatch

// 操作: reducer-put,effect-dispatch
const userRelatedModel: userRelatedType={
  namespace: 'userRelatedModel',
  state:{
    code:1,
    data:{token:"none"},
    isLogout:true
  },
  reducers:{
    getList(state,action){
      const newState= {
        ...state,
        data:action.payload.data,
        code: action.payload.code
      }
      return newState
    },
    changeLogin(state,action){
      const newState={
        ...state,
        data: {},
        code:1,
        isLogout:!state.isLogout
      }
      return newState
    }
  },
  effects:{
    *getRemote(action,effects){
      const data=yield effects.call(fetchLogin,action.payload)
      yield effects.put({
        type:"getList",
        payload:data
      })
    }
  }

}
export default userRelatedModel
