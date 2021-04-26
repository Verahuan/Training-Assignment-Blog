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
  
  * 详情页面评论：
