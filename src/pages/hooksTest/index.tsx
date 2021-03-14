import React, { useEffect, useState } from 'react';
import useDebounce from "@/hooks/useDebounce.ts"
import useThrottleFn from "@/hooks/useThrottleFn.ts"
import useThrottle from '@/hooks/useThrottle.ts'
import useUpdateEffct from "@/hooks/useUpdateEffect.ts"


export default (props: any) => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const res=useThrottle(a,2000)
  const [c,setC]=useState(0);
  useEffect(()=>{
  console.log("did effct")
  },[a])
  const effct=()=>{
    console.log("use effct")
  }
  useUpdateEffct(effct,[a])
  /*  const [cancel] = useDebounce(() => {
    setB(a)
  }, 2000,false,[a]) */
  /*  const [ThrottleCancel] = useThrottleFn(() => {
    setB(a)
  }, 2000,[a]) */
  // a发生变化，并且wait时间到才可以
  const clear=()=>{
    cancel()
  }
  const changeIpt = (e) => {
    setA(e.target.value)
  }
  return <div>
    <p>debounce 测试</p>
    <input type="text" onChange={changeIpt} />
    { b } { a }
    <button
      onClick={clear}>初始化</button>
    <p>useThrottleFn 测试</p>
    <input type="text" onChange={changeIpt} />
    { b } { a }
    <button
      onClick={clear}>初始化</button>
    <p>useThrottle 测试</p>
    <input type="text" onChange={changeIpt} />
    res:{ res } a:{ a }
    <button
      onClick={clear}>初始化</button>
  </div>
}
