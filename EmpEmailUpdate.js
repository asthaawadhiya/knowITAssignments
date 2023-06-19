import { useState,useReducer} from "react";

const initialState={
 empid:0,
 email:""
}

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'update':
            return {...state,[action.fld]:action.value};
        case 'clear':
            return initialState;
    }
}

let EmpEmailUpdate=()=>{
    const[emp,dispatch]=useReducer(reducer,initialState);
    const[msg,setMsg]=useState("--");
    const updateData=(ev)=>{
        ev.preventDefault();

        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({empid:emp.empid,email:emp.email})
        }
        fetch('http://localhost:9000/updateEmp',reqOptions)
        .then(resp=>resp.text())
        .then(data=>setMsg(data))

       
       

    }

    return(
        <div>
            <h1>Emmployee form</h1>
            <table table table-bordered>
                <tr><td>Enter empno:</td>
                <td><input type="number" name="empid" onChange={(e)=>{dispatch({type:'update',fld:'empid',value:e.target.value})}}/></td></tr>
                <tr><td>Enter email:</td>
                <td><input type="text" name="email" onChange={(e)=>{dispatch({type:'update',fld:'email',value:e.target.value})}}/></td></tr>
                <tr>
                    <td><input type="button" value="update" name="btn" onClick={(e)=>{updateData(e)}} /></td>
                </tr>

            </table>
            <p>{msg}</p>
        </div>
    )


}
export default EmpEmailUpdate;