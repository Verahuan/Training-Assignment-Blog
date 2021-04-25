import type { Reducer, Effect, Subscription } from 'umi'

interface articleModelType {
  namespace: "articleContentModel",
  state: {},
  reducers: {
    getList: Reducer,
  }
}
const articleContentModel: articleModelType={
  namespace: "articleContentModel",
  state: {
    title:"",
    content:"",
    tags:[]
  },
  reducers: {
    getList(state,action){
      const newState={
        ...state,
        title:action.payload.title,
        content:action.payload.content,
        tags:action.payload.tags
      }
      return newState
    },
  }
}
export default articleContentModel
