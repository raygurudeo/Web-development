import React from "react";
import {ButtonGroup, Button} from '@material-ui/core'

function ButtonGroupClass() {
    return(
        <ButtonGroup 
            color='secondary'
            variant='outlined'
            orientation='vertical'
        >
            <Button>one</Button>
            <Button>two</Button>
            <Button>three</Button>
        </ButtonGroup>
    );
}

export default ButtonGroupClass;