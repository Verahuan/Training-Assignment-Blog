// 防抖和节流都实现
// 防抖
/* 你尽管触发事件，
但是我一定在事件触发 n 秒后才执行，
如果你在一个事件触发的 n 秒内又触发了这个事件，
那我就以新的事件的时间为准，n 秒后才执行，
总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行 */

import {useEffect,useRef} from "react"

function useDebounce(Func: Function, wait: number,immediate=false,deps = []){
  let timer=useRef()
  const debounced=function(){
    if(timer) clearTimeout(timer) // clear之后依然不是undefined,只有初次是undefined
    if(immediate){
      const callNow=!timer.current
      console.log("timer",timer)
      console.log("now")
      timer.current = setTimeout(function(){timer.current = null
      }, wait)
      if(callNow){
        console.log("ok")
        Func()
      }
    }else {
      timer.current=setTimeout(()=>{ Func() }
        ,wait)
    }
  }
  useEffect(debounced,deps)

  const cancel=function(){
    clearTimeout(timer)
    timer.current=null
  }
  return [cancel]
}

export default useDebounce
// this指向和event对象的修改
/*
function useDebounce (fn, ms = 30, deps = []){
  let timeout = useRef()
  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      fn()
    }, ms)
  }, deps)

  const cancel = () => {
    clearTimeout(timeout.current)
    timeout = null
  }
  return [cancel]
}
*/
