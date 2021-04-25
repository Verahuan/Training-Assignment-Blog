const comments=[
  {
    id:1,
    context:"存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。"
  },
  {
    id:2,
    context:"此目录下所有文件会被 copy 到输出路径。"
  },
  {
    id:3,
    context:"此目录下所有文件会被 copy 到输出路径。"
  },
  {
    id:4,
    context:"此目录下所有文件会被 copy 到输出路径。"
  },
  {
    id:5,
    context:"此目录下所有文件会被 copy 到输出路径。"
  }

]

function CreatArr(index,res){
  res.push({
    id:index+1,
    context:"此目录下所有文件会被 copy 到输出路径。"
  })
  return res
}
const res=[]
for(let i=0;i<6;i++){
  CreatArr(i,res)
}
const ArticleDate = {
  data: res
}

export default {
  // 使用 mockjs 等三方库
  'GET /api/comments':ArticleDate.data
}
