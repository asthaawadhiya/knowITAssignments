import {useState} from 'react';
import pic from './TomnJerry1.jpg'
export default function ImgComp()

{
    const[flag,setFlag]=useState(true);
    return(
        <div>
            <img src={pic} height={200} width={200} style={{display:flag?'block':'none'}} />
            <input type="checkbox" name="c" checked={flag} onChange={(e)=>{setFlag(e.target.checked)}}/>Hide/Show image

        </div>
    )
}
