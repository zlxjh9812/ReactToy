import { useState, useEffect } from "react";

function Hello(){
    function destroyedFn(){
        console.log("destroyedFn :)");
    }
    function effectFn(){
        console.log("created :)");
        return destroyedFn;
    }
    useEffect(()=>{
        console.log("UseEffect Function hi :)");
        return function(){console.log("UseEffect Function by :(");}
    },[])
    useEffect(function(){
        console.log("UseEffect Function hi :)");
        return function(){console.log("UseEffect Function by :(");}
    },[])
    return <h1>Hello</h1>
}

function CleanUp(){
    const [showing,setShowing] = useState(false);
    const onClick =()=>{
        setShowing((prev)=>!prev);
    }
    return(
    <div>
        {showing ? <Hello/>: null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
    );
}
export default CleanUp;