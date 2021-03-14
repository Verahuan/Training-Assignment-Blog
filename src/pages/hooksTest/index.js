import React, { useEffect, useState } from 'react';
import useThrottle from '@/hooks/useThrottle.ts';
import useUpdateEffct from "@/hooks/useUpdateEffect.ts";
export default (props) => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const res = useThrottle(a, 2000);
    const [c, setC] = useState(0);
    useEffect(() => {
        console.log("did effct");
    }, [a]);
    const effct = () => {
        console.log("use effct");
    };
    useUpdateEffct(effct, [a]);
    /*  const [cancel] = useDebounce(() => {
      setB(a)
    }, 2000,false,[a]) */
    /*  const [ThrottleCancel] = useThrottleFn(() => {
      setB(a)
    }, 2000,[a]) */
    // a发生变化，并且wait时间到才可以
    const clear = () => {
        cancel();
    };
    const changeIpt = (e) => {
        setA(e.target.value);
    };
    return React.createElement("div", null,
        React.createElement("p", null, "debounce \u6D4B\u8BD5"),
        React.createElement("input", { type: "text", onChange: changeIpt }),
        b,
        " ",
        a,
        React.createElement("button", { onClick: clear }, "\u521D\u59CB\u5316"),
        React.createElement("p", null, "useThrottleFn \u6D4B\u8BD5"),
        React.createElement("input", { type: "text", onChange: changeIpt }),
        b,
        " ",
        a,
        React.createElement("button", { onClick: clear }, "\u521D\u59CB\u5316"),
        React.createElement("p", null, "useThrottle \u6D4B\u8BD5"),
        React.createElement("input", { type: "text", onChange: changeIpt }),
        "res:",
        res,
        " a:",
        a,
        React.createElement("button", { onClick: clear }, "\u521D\u59CB\u5316"));
};
//# sourceMappingURL=index.js.map