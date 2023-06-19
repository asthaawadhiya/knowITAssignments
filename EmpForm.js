
import {useReducer,useState} from 'react';

const initialState = {
    empid : 0,
    ename:"",
    sal:0,
    dep:""
    
}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case'update':
            return{...state,[action.fld]:action.value}

        case 'clear':
             return initialState;
    }
}

let EmpForm=()=>
{   
    const[flag,setFlag]=useState(false);
    const[emp,dispatch] = useReducer(reducer,initialState)
    return(

        <div>
            <table>
                
                <tr>
                <td>
                Enter Empid:
                </td>
                <td>
                <input type="number" name="empid" value={emp.empid} 
                onChange={(e)=>{dispatch({type:'update',fld:'empid',value:e.target.value})}}/></td></tr>
             
                <tr>
                <td>
                Enter Name:
                </td>
                <td>
                <input type="text" name="ename" value={emp.ename} 
                onChange={(e)=>{dispatch({type:'update',fld:'ename',value:e.target.value})}}/>

                </td>
                </tr>
                <tr>
                <td>
                Enter Salary:
                </td>
                <td>
                <input type="number" name="sal" value={emp.sal} 
                onChange={(e)=>{dispatch({type:'update',fld:'sal',value:e.target.value})}}/>
                </td>
                </tr>
                <tr>
                <td>Enter Department:</td>
                <td>
                <input type="text" name="dep" value={emp.dep} 
                onChange={(e)=>{dispatch({type:'update',fld:'dep',value:e.target.value})}}/>
                </td>
                </tr>
                </table>
                <br/>
                <input type="button" value="clickme" onClick={(e)=>{
                    if(flag)
                    setFlag(false)
                    else
                    setFlag(true)}}/>
                
                <h1 style={{display:flag?"block":"none"}}> Welcome {emp.ename}</h1>
        </div>
       
    )
}
export default EmpForm