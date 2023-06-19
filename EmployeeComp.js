function EmployeeComp(ps)
{   
    
    return(
        <div>
            <table>
             <tr> 
             {ps.arr.map(v =>
              
                <td>{v.empid}</td>
               
            
             )}
             
             </tr>
            
               
            </table>

        </div>
    )

}
export default EmployeeComp;