import {useState} from 'react'
export default function ParaStyleComp()
{   

    const[cl,setcl]=useState("Red");

    return(
        <div>
            <p style={{color:cl,fontSize:'70px',textShadow:'2px 2px 2px pink',fontStyle:'italic'}}>Hello Astha</p>
            <input type="color" name='cl' value={cl} onChange={(e)=>{setcl(e.target.value)}}/>

        </div>
    )
}
