// 用hooks实现所有的生命周期函数，顺便好好学习一下生命周期函数，结合源码
/* useUpdateEffect 一个只在依赖更新时执行的 useEffect hook，模拟componentDidUpdate生命周期，用法：

useUpdateEffect(
  effect: () => (void | (() => void | undefined)),
  deps?: deps,
) */
import {useEffect,useRef} from "react"

/* function useUpdateEffct (effct:() => (void | (() => void | undefined)),deps=[]){
  const ifInit=useRef(false);
  if(!ifInit.current){
    console.log("init")
    ifInit.current=!ifInit.current
  }else {
    console.log("update")
    useEffect(effct,deps)
  }
} */
// 以上代码会报错：初始化的hooks数量少于重渲染 所以 不能放在条件判断中

function useUpdateEffct (effct: () => (void | (() => void | undefined)),deps=[]){
  const ifInit=useRef(false)
  const doUpdate=()=>{
    if(!ifInit.current){
      console.log("init")
      ifInit.current=!ifInit.current
    }else {
      return effct()
    }
  }
  useEffect(doUpdate,deps)
}



export default useUpdateEffct
