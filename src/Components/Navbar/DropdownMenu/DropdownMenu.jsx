import React from 'react';

import IconButton from '@mui/material/IconButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@mui/styles';
import DropdownMenuLogic from './DropdownMenuLogic';

const useStyles = makeStyles({
    menu : {
        '& .MuiList-root' : {
            backgroundColor: '#2c2d3d'
        }
        
    }
})

const DropdownMenu = ({toggle,menuIcon,menuItems,...props}) => {
    const classes = useStyles();
    const {
        anchorEl,
        handleOpen,
        handleClose
    } = DropdownMenuLogic(toggle);

    return (
        <div {...props}>  
            <ClickAwayListener onClickAway={handleClose}>
                <IconButton 
                    style={{color:"white"}} 
                    onClick={handleOpen}
                >
                    {menuIcon}
                </IconButton>
            </ClickAwayListener>
            <Menu
                className={classes.menu}
                style={{marginTop:'25px'}}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
            >
                {menuItems}
            </Menu>
        </div>
    )
}

export default DropdownMenu;