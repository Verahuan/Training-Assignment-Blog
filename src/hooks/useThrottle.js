// 监控值的变化？只在定期时间刷新？
import { useEffect, useRef, useState } from 'react';
function useThrottle(Value, wait) {
    const [res, setValue] = useState(Value);
    const previous = useRef(0);
    useEffect(() => {
        const now = Date.now();
        if (now - previous.current >= wait) {
            setValue(Value);
            previous.current = now;
        }
    }, [Value]);
    return res;
}
export default useThrottle;
//# sourceMappingURL=useThrottle.js.map