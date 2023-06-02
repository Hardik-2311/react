import React, { useState } from "react";
function Custom() {
    
    const [counter,setCounter]=useState(0);
    function increase(){
        setCounter(counter+1);
    }
    function decrease(){
        setCounter(counter-1);
    }
    return (
        <>

            <h1>Counter:{counter}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>decrease</button>
        </>
    )
}

export default Custom;