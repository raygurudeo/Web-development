import React, {useState} from "react";
import { Radio } from '@material-ui/core'

function RadioButtonClass() {

    const [isChecked, setIsChecked] = useState(true);
    const changeFun = (e) => {
        console.log(e.target.value);
        setIsChecked(!isChecked);
    }
    return(
        <>
            <div>
            <Radio value='yes' color='primary' checked={isChecked} onChange={(e) => {changeFun(e)}}/>
            <label>yes</label>
        </div>
        <div>
            <Radio value='no' color='primary' checked={!isChecked} onChange={(e) => {changeFun(e)}}/>
            <label>no</label>
        </div>
        </>
    );
}

export default RadioButtonClass;