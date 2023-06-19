import'./mystyle.css'

function CompStyling()
{
    return(
        <div>
            <p style={{color:"yellow",backgroundColor:"blue"}}>Inline style</p>
            <p className="content">External CSS styling</p>
            <p className='bg-dark text-white'>Styling using Bootsrap</p>
            <table className= 'table table-bordered'>
            <tr><th colspan="3">My table</th></tr>
            <tr>
                    <td>column1 </td>
                    <td>column2</td>
                    <td>column3</td>
            </tr>
            </table>
        </div>
       
        
    )
}
export default CompStyling;