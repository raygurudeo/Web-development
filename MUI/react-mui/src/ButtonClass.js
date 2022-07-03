import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

function ButtonClass() {

    const [isDisable, setIsDisable] = useState(false);
    const [color, setColor] = useState('primary');

    function changeButtonState() {
        setColor('secondary');
    }

    return(
        <Button 
            color={color}        // primary, secondary
            variant='contained'
            disabled={isDisable}
            size='small'
            endIcon={<Delete />}  // use "startIcon" property if u want to add icon before element content
            onClick={() => changeButtonState()}
        >click me
        </Button>
    );
}

export default ButtonClass;