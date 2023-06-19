import {  useReducer, useState } from "react"


const intialState={
    empid:0,
    ename:"",
    sal:0
   
}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'update' :
            return {...state,[action.fld]:action.value}
        case 'clear':
            return intialState;

    }
    
}
let EmpPost=()=>
{
    const[emp,dispatch]=useReducer(reducer,intialState);
    const[msg,setMsg]=useState("---");
    const submitData=(ev)=>{
        ev.preventDefault();

        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({empid:emp.empid,ename:emp.ename,sal:emp.sal})
        }
        fetch('http://localhost:9000/insertEmp',reqOptions)
        .then(resp=>resp.text())
        .then(data=>setMsg(data))

       
       

    }
    return(
        <div>
            <h1>EmpForm </h1>
            <form>
            Empid:<input type="number" name="empid" value={emp.empid} onChange={(e)=>{dispatch({
             type:'update',fld:'empid',value:e.target.value})}}/>
             <br/>

             Ename:<input type="text" name="ename" value={emp.ename} onChange={(e)=>{dispatch({
             type:'update',fld:'ename',value:e.target.value})}}/>
              <br/>

             Sal:<input type="number" name="sal" value={emp.sal} onChange={(e)=>{dispatch({
             type:'update',fld:'sal',value:e.target.value})}}/>
              <br/>

             
             
             <input type="submit" value="Submit" name="btn" onClick={(e)=>{submitData(e)}}/>
             <br/>
             <p>{msg}</p>
            </form>
            

              


        </div>
    )
    
 
}
export default EmpPost;