# 博客项目
## 实现功能介绍
* 基本样式完成
* 一、登录界面，用户可以实现登录 （user、admin两种，其中admin可以查看管理页面）
* 二、用户文章管理后台
  * 文章管理
    属性：标题、内容，标签，状态；全部必填
    场景：列表、新建、编辑、删除、保存草稿、发布
  * 标签管理
    属性：名称；必填
    场景：新建、编辑更新、删除的场景
* 三、文章展示
  * 首页，文章的列表页面，需分页
  * 文章查看页面（树状列表+评论添加）
## 具体实现思路及展示
* 登录+鉴权
  * 登录:mock数据，获取当前用户信息
  * ![login](https://github.com/Verahuan/Training-Assignment-Blog/blob/master/docs/%E7%99%BB%E5%BD%95.gif)

  * 鉴权：利用cookie存储当前用户信息，设置token,实现鉴权
  * ![鉴权](https://github.com/Verahuan/Training-Assignment-Blog/blob/master/docs/%E9%89%B4%E6%9D%83.gif)

* 文章展示+文章详情页

  * 文章列表+具体内容展示：
  * ![login](https://github.com/Verahuan/Training-Assignment-Blog/blob/master/docs/%E7%82%B9%E5%87%BB%E6%96%87%E7%AB%A0%E5%87%BA%E7%8E%B0%E8%AF%A6%E6%83%85%E9%A1%B5.gif)
  
  * 文章详情页
  * ![login](https://github.com/Verahuan/Training-Assignment-Blog/blob/master/docs/%E7%82%B9%E5%87%BB%E6%96%87%E7%AB%A0%E5%87%BA%E7%8E%B0%E8%AF%A6%E6%83%85%E9%A1%B5.gif)
  
  * 详情页面评论：
  * ![login](https://github.com/Verahuan/Training-Assignment-Blog/blob/master/docs/%E8%AF%A6%E6%83%85%E9%A1%B5%E8%AF%84%E8%AE%BA.gif)

* 管理界面
  * 管理界面展示
  * ![login](https://github.com/Verahuan/Training-Assignment-Blog/blob/master/docs/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2.gif)
  
  * 删除功能
  * ![login](https://github.com/Verahuan/Training-Assignment-Blog/blob/master/docs/%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD.gif)
  
  * 编辑功能
  * ![login](https://github.com/Verahuan/Training-Assignment-Blog/blob/master/docs/%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2%E7%BC%96%E8%BE%91%E5%8A%9F%E8%83%BD.gif)
  
  * 富文本框
  * ![login](https://github.com/Verahuan/Training-Assignment-Blog/blob/master/docs/%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A1%86%E5%AE%9E%E7%8E%B0.gif)

## 待解决问题：
* 目前该练习只完成了基本的功能和样式，项目中还有以下问题待解决：
1. 登录样式单独显示正常（样式：CSSModule），但是加到父组件中之后会被父组件样式覆盖（目前是用！important 或 行内样式解决）
2. 路由改变的时候都要进行鉴权判断，刷新的时候获取当前用户和页面的信息
3. 标签input编辑，后台管理系统有类似功能
4，table的分页器样式修改（批量删除）
5. antD中文修改
6. 目前用户文档的content和comment都是写好的特定格式的，需要写好由富文本编辑器内容转换为对应的样式
7. 做好富文本编辑器的内容判断，防止用户输入html标签，从而出现安全问题
8. cookie的相关安全设置
9. 是否登录展示的不同信息，评论的时候需要登录才行
10. 部分样式需要完善
11. 各个页面的响应式
