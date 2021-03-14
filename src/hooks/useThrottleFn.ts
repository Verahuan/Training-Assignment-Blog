// 节流是指在wait事件之内只执行一次，防抖是指在事件停止之后wait事件内执行
// 时间戳+定时器的方法各有利弊
// 时间戳的方式因为有初始化的问题存在，刚开始触发事件的时候就会开始执行，但是一旦不再触发事件，就不会再获取新的事件点，因此不会再执行
// 定时器的方法，因为初次执行的时候定时器刚开始执行，因为不会立马执行，但是最后一次执行的时候，因为定时器已经开启，因此还是会继续执行事件


import {useEffect,useRef,useState} from "react"
// 时间戳的方法
function useThrottleTimer(Func: Function,wait,deps=[]){
  const [time,setTime]=useState(wait)
  const previous=useRef(0)
  const throttled=()=>{
    const now=Date.now()
    if(now-previous.current>time){
      Func()
      previous.current = now
    }
  }
  useEffect(throttled,deps)
  const cancel=()=>{
    setTime(0)
  }
  return [cancel]
}
// 定时器结合时间戳
function useThrottleFn(Func: Function,wait,deps=[]){
  const timer=useRef()
  const previous=useRef(0)
  const later = function() {
    previous.current = Date.now()
    timer.current = null
    Func()
  }
  const throttled = function() {
    const now = Date.now()
    // 下次触发 func 剩余的时间
    const remaining = wait - (now - previous.current)
    // 如果没有剩余的时间了或者你改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timer.current) {
        clearTimeout(timer.current)
        timer.current = null
      }
      previous.current = now
      Func()
    } else if (!timer.current) {
      timer.current = setTimeout(later, remaining)
    }
  }
  useEffect(throttled,deps)
  const cancel=()=>{
    clearTimeout(timer.current)
    previous.current = 0
    timer.current=null
  }
  return [cancel]
}

export default useThrottleFn
