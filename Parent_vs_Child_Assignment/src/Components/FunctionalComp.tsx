import React , { useState } from "react";

const FuntionalComponent = () => {
    const [ctr, setCtr] = useState(0);
    const increase = () =>{
        setCtr(ctr+1);
    }
    return(
        <div>
            <h2>Count: {ctr}</h2>
            <button onClick={increase}>Increment</button>
        </div>
    )
}

export default FuntionalComponent