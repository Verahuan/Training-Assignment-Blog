function packResult(params) {
  const {
    data = undefined,
    code = 200,
    message = 'success',
    ...reset
  } = params || {}

  return {
    data,
    code,
    message,
    ...reset
  }
}
// 判断token
function fetchCaptcha(req, res) {
  res.send(packResult())
}
function fetchCurrentInfo(req,res){
  const authorization=req.headers?.authorization
  const token=authorization?.split(" ")?.[1]
  if(token!=="admin" && token !=="user"){
    res.status(401).send(packResult({ data: {}, code: 401 }))
  }
  res.send(packResult({ data }))
}
// 添加token
function fetchLogin(req, res) {
  const { password, username, type } = req.body
  if (password === '123456' && username === 'admin') {
    res.send(packResult(
      { data: { type, token: 'admin', }
      }))
    return
  }
  if (password === '123456' && username === 'user') {
    res.send(packResult({
      data: { type, token: 'user', }
    }))
    return
  }

  res.send(packResult({
    data: {
      type
    },
    code: 10010,
    message: '用户名或密码不正确'
  }))
}

export default {
  'GET  /api/user/captcha': fetchCaptcha,
  'GET /api/user/current': fetchCurrentInfo,
  // 支持自定义函数，API 参考 express@4
  'POST /api/users/login': fetchLogin,
}
