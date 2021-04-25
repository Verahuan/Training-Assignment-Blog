import type {Reducer, Effect} from 'umi'
import { fetchArticle } from '@/api/service/article'


interface ArticleContentType{
  namespace: 'ArticleContentModel',
  state: {},
  reducers: {
    getList: Reducer
  },
  effects: {
    getRemote: Effect
  },
  subscriptions?: {

  }
}

const ArticleContentModel: ArticleContentType={
  namespace: 'ArticleContentModel',
  state:{
    data:[{
      head:"图文版设计分会：基础设计原理",
      name:"张丰",
      time:"2020-08-12 12:31",
      reading:"20192",
      comments:"192",
      content:"本期篇幅很短了，作为 WWDC 设计分会之“基础设计原理”的收尾。这场时长约为一个小时的讲演，被我们拆解为五期图文；期间，我们跟随 Apple 设计布道者团队的 Mike Stern 老师一起了解了十项基本设计原理，包括导航、反馈、可见性、一致性、心智模型、邻近性、映射、可供性、渐进呈现、对称性。",
      tags:["用户体验","设计原则","设计原则","设计原则"]
    }]},
  reducers:{
    getList(state,action){
      console.log("newSession")
      const newState= {
        ...state,
        data:action.payload
      }
      return newState
    }
  },
  effects:{
    *getRemote(action,effects){
      const data=yield effects.call(fetchArticle)
      yield effects.put({
        type:"getList",
        payload:data
      })
    }
  }

}
export default ArticleContentModel
