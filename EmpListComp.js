function EmpListComp(ps)
{
    
    return (
        <div>
            <ul>
                {ps.arr.map(v=>{return<li>{v}</li>})}
            </ul>
        </div>
    )

}
export default EmpListComp;