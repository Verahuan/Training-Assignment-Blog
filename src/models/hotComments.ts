import type {Effect,Reducer} from 'umi'
import {fetchComments} from "@/api/service/hotcomments.ts"

interface hotCommentsModalType{
  namespace: "hotCommentsModal",
  state: {},
  reducers: {
    getList: Reducer
  },
  effects: {
    getRemote: Effect
  }
}

const hotCommentsModal: hotCommentsModalType={
  namespace: "hotCommentsModal",
  state:{
    data:[
      {
        id:1,
        context:"存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。"
      }
    ]
  },
  reducers:{
    getList(state,action){
      const newState={
        ...state,
        data:action.payload
      }
      console.log(newState,"newState")
      return newState
    }
  },
  effects:{
    *getRemote(action, effects){
      const data=yield effects.call(fetchComments)
      yield effects.put({
        type:"getList",
        payload:data
      })
    }
  }
}
export default hotCommentsModal
