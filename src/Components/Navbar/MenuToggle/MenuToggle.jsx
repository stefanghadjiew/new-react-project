import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuToggleLogic from './MenuToggleLogic';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    menu : {
        '& .MuiList-root' : {
            backgroundColor: '#2c2d3d'
        }
        
    }
})

const MenuToggle = ({toggle, navbarItems}) => {

    const classes = useStyles();

    const { anchorEl, handleOpen, renderMenuItems, handleClose } = MenuToggleLogic({toggle,navbarItems});
    
    return (
        <>  
            <ClickAwayListener onClickAway={handleClose}>
                <IconButton 
                    style={{color:"white"}} 
                    onClick={handleOpen}
                >
                    <MenuIcon style={{fontSize:'30px'}}/>
                </IconButton>
            </ClickAwayListener>
            <Menu
                className={classes.menu}
                style={{marginTop:'25px'}}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
            >
                {renderMenuItems}
            </Menu>
        </>
            
    )
}

export default MenuToggle;