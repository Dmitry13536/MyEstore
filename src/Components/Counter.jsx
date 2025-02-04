import React from "react";
import Card from "./Card";
import useIsLargeScreen from "../LargeScreen";

function Counter(){
    const computer = useIsLargeScreen();

    return(
        <div className="counter">
            
            <Card Count={8} button={true} />
        </div>
    )
}

export default Counter;