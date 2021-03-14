import React from 'react';
import { batteryContext, onlineContext } from '@/pages/newFeatures';
const SecondChild = () => {
    return (React.createElement(batteryContext.Consumer, null, (value) => (React.createElement(React.Fragment, null,
        React.createElement(onlineContext.Consumer, null, (value) => (React.createElement("div", null,
            "this is online child ",
            React.createElement("h1", null,
                "online:",
                String(value))))),
        React.createElement("div", null,
            "this is the second child ",
            React.createElement("h1", null,
                "value:",
                value))))));
};
export default SecondChild;
//# sourceMappingURL=SecondChild.js.map