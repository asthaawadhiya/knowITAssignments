function TimeComp()
{
   let dt=new Date();
   var arr=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug']
   
  return (
    <div>
        <p>Date: {dt.getDate()+" "+arr[dt.getMonth()]+" "+dt.getFullYear()}</p>
        <p>Time: {dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()}</p>
        <ul>
          { arr.map(v =><li key={v}> {v}</li>) }
        </ul>
    </div>
  )
}

export default TimeComp