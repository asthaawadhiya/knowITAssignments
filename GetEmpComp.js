import { useEffect, useState } from "react"

export default function GetEmpComp()
{
    const[emps,setEmps]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9000/emps")
        .then(resp=>resp.json())
        .then(emps=>setEmps(emps))},[]);
   
    return(
        <div>
            <h1>Employees</h1>
            <table className="table table-striped table-dark ">
                <tbody className="table-hover table-striped">
                
            
                {
                    emps.map(v=>{
                        return(
                            <tr >
                                <td >{v.EMPNO}</td>
                                <td>{v.ENAME}</td>
                                <td>{v.JOB}</td>
                                <td>{v.MGR}</td>
                                <td>{v.HIREDATE}</td>
                                <td>{v.SAL}</td>



                            </tr>
                        )
                    })
                }
                </tbody>

            </table>
        </div>

    )
}