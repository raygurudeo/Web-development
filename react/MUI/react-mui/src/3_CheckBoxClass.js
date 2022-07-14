import React, { useState, useEffect } from "react";
import { Checkbox } from "@material-ui/core";
import { Favorite, FavoriteBorder } from '@material-ui/icons'


function CheckboxClass() {

    const [value, setValue] = useState([]);
    function getValue(e) {
        let data = value;
        if(!data.includes(e.target.value)) {
            data.push(e.target.value);
        } else {
            data.pop(e.target.value);
        }
        console.log(data);
    }

    return(
       <>
        <Checkbox color='primary' value='1' onChange={(e) => {getValue(e)}}/>
        <Checkbox color='secondary' value='2' onChange={(e) => {getValue(e)}}/>
        <Checkbox color='default' value='3' onChange={(e) => {getValue(e)}}/>
        <Checkbox color='default' value='4' indeterminate onChange={(e) => {getValue(e)}}/>
        <Checkbox
            color='secondary'
            value='5'
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            onChange={(e) => {getValue(e)}}/>
       </>
    );
}

export default CheckboxClass;








// import checkbox
// color of checkbox
// interminate property in checkbox
// onChange event in checkbox
// get value from multiple checkbox
// custom icon in ceckbox