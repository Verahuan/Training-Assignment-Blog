import type { Reducer, Effect, Subscription } from 'umi'

interface CurrentArticleContentModelType {
  namespace: 'CurrentArticleContentModel';
  state: {};
  reducers: {
    getList: Reducer;
    changeComment:Reducer
  };
}
// 大标题 一级标题 二级标题
const content = [
  {
    title: '确定竞品是谁',
    id:"title1",
    content:"首先明确一个概念：竞品是有很多种的，有看上去和你手里要做的那个app一毛一样的，也有看上去有点像的，也有某个特定功能一样的，但凡有我们可以借鉴的部分都可以称之为竞品。\n" +
        "\n" +
        "通常我们最常分析的应该就是垂直竞品了（毕竟产品们都喜欢抄抄文化），它的定义就是只要符合：业务领域；用户群 ；核心功能 。其中2点以上的类似就算是了。\n" +
        "\n" +
        "举例：QQ音乐/网易云音乐（音乐工具+社区/听歌）；钉钉/飞书（企业级通讯/IM）；盒马/严选（数字化新零售/中高端用户/购物）。这些赛道几乎一致的产品，无关乎各自的量级，通常都会有很多“异曲同工”之处，因为彼此都是彼此竞品分析中垂直竞品的头号人物。",
  },
  {
    title: '分析竞品的几个维度',
    id:"title2",
    content:"做竞品分析通常也分为给老板汇报用和实战工作中参考用2种情况。\n" +
        "我们先说实战工作中自己用来提效的竞品分析需要关注什么？",
    children: [
      {
        title: '1. 搜寻垂直竞品间的雷同设计与差异化设计',
        id:"title2Child1",
        content:"通过垂直竞品雷同于差异分析可以快速获得直接相关的设计案例经验，让我们在0-1实际上手的时候脑中迅速有匹配画面。",
      },
      {
        title: '2. 学会用同类竞品激发灵感',
        id:"title2Child2",
        content:"如果我们陷入垂直竞品的参考，很难走出“抄抄文化”的困境，所以我们需要学会利用同类竞品创造更多可能。因为选取同类竞品大大拓展了我们可以参考的线上成功案例范围。我们甚至可以通过一些小的细节点发现一些可以应用的灵感。",
      },
    ],
  },
  {
    title: '分析后给到结论',
    id:"title3",
    content:"竞品分析做的好与坏在于分析的维度是否全面，更在于分析完之后是否有独立思考且合理有效的结论可以指导我们日后的设计落地。我们通过竞品分析最根本的初衷还是为了希望让我们的设计能在行业中做到最好，而不是徒劳的无用功，因此要防止把竞品分析做成产品说明书。",
    children: [
      {
        title: '1. 对比法',
        id:"title3Child1",
        content:"在不同的维度分析中，我们可以通过“产品比对（截图/文字描述）”得出不同竞品的设计差异，再通过差异得出具体的应用结论。通常的结论是这样设计的弊端+我们可以借鉴的设计方案及原因。",
      },
      {
        title: '2. 融合法',
        id:"title3Child2",
        content:"在竞品对比法中，我们无法完全借鉴其中一方来进行设计优化时，可以考虑综合竞品的设计方案来进行方案融合，得到一个相对过渡带的设计方案。在竞品分析的总结中可以指出，我们觉得可以参考借鉴融合的元素模块，并给出依据。",
      },
    ],
  },
  {
    title:"总结",
    id:"title4",
    content: "我们通过2类竞品（垂直/同类）可以在很大范围内进行全面or单一维度的分析，通过对比或融合的方式可以总结出适配自己产品的结论，创新出过渡带的设计方案。"
  }
]
const comment=[
  {
    author:"张欢欢",
    content:"今天又是认真打代码的一天，今天认真打了架子鼓嘻嘻，就是膝盖有点小疼，下次还是要带护膝哦~"
  },
  {
    author:"张大欢",
    content:"调整心情是最重要的，感受生活中的日常，明确自己的需求，发现新的美好~"
  }
]

const CurrentArticleContentModel: CurrentArticleContentModelType = {
  namespace: 'CurrentArticleContentModel',
  state: {
    id: 0,
    head: '',
    name: '',
    time: '',
    reading: '',
    comments: comment,
    content: [],
    tags: [],
  },
  reducers: {
    getList(state, action) {
      const newState = {
        ...state,
        id: action.payload.id,
        head: action.payload.head,
        name: action.payload.name,
        time: action.payload.time,
        reading: action.payload.reading,
        content,
        tags: action.payload.tags,
      }
      return newState
    },
    changeComment(state, action){
      const NewComments=[...state.comments]
      NewComments.push(action.payload)
      console.log(NewComments,'NewComments')
      const newState={
        ...state,
        comments: NewComments,
      }
      return newState
    }
  },
}
export default CurrentArticleContentModel
