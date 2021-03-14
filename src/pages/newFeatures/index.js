import React, { createContext, useState } from 'react';
import SecondChild from '@/pages/newFeatures/components/SecondChild';
const batteryContext = createContext();
const onlineContext = createContext();
const FirstChild = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            "the first child",
            React.createElement(SecondChild, null))));
};
const newFeatures = () => {
    const [contextValue, SetContextValue] = useState(20);
    const [onlineValue, SetOnlineValue] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(batteryContext.Provider, { value: contextValue },
            React.createElement(onlineContext.Provider, { value: onlineValue },
                React.createElement(FirstChild, null))),
        React.createElement("div", null, "zhh"),
        React.createElement("button", { type: "button", onClick: () => {
                SetContextValue(contextValue + 1);
                SetOnlineValue(!onlineValue);
            } }, "add Value")));
};
export default newFeatures;
export { batteryContext, onlineContext };
//# sourceMappingURL=index.js.map