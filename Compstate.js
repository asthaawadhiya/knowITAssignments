import { useState } from "react";
function Compstate()
{   
    const[msg,setMsg]=useState("welcome")
    return(
        <div>
            <p>{msg}</p>
            <button onClick={()=>{setMsg("Astha")}}>click me</button>
        </div>


    )
}
export default Compstate;