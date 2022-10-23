import React from "react";
import ConditionalOutputIfElse from "./conditional-output-if-else.js";
import ConditionalOutputInline from "./conditional-output-inline.js";
const ConditionalOutput = () => {
    return(
        <>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/>
        </>
    );
};
export default ConditionalOutput;