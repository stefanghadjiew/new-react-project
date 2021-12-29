import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    menuItem : {
        width:'100vw',
        '&:hover' : {
            transition: 'all .2s ease',
            '& .MuiSvgIcon-root' : {
                color: 'white',
                transition: '.2s ease'
            }
        },
        
    },
    link : {
        textDecoration:'none',
        '& li' : {
            color:'white',
            opacity:'0.8',
            '&:hover' : {
                backgroundColor:'white',
                color: '#2c2d3d',
                '& .MuiSvgIcon-root' : {
                    color: '#2c2d3d'
                }
            }
        }
    }
})

const MenuToggleLogic = ({toggle,navbarItems}) => {
    const classes = useStyles();

    const [anchorEl,setAnchorEl] = useState(null);
    
    const handleOpen = e => {
        setAnchorEl(e.currentTarget)
        toggle()
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const renderMenuItems = navbarItems.map(item =>
        <Link to={item.link} className={classes.link} key={item.id}> 
            <MenuItem 
                className={classes.menuItem}
                onClick={handleClose}>
                <ListItemIcon>
                    {item.menuIcon}
                </ListItemIcon>
                    {item.title}
            </MenuItem>
        </Link>
    );

    return {
        anchorEl,
        handleOpen,
        renderMenuItems,
        handleClose
    }
};

export default MenuToggleLogic;