import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    link : {
        textDecoration: 'none',
        color:'inherit',
        opacity: '.8',
        '&:hover' : {
            transform:'translateY(-2.5px)',
            transition: '.3s ease',
            opacity: '1'
        },
        transition: '.3s ease'
    }
})

const StyledTypography = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up('1000')] : {
        padding: '5px 20px'
    },
}));

const NavbarItem = ({name,id,link}) => {
    const classes = useStyles();
    return (
        <Link to={link} className={classes.link}>
            <StyledTypography variant="h7" key={id}>
                {name}
            </StyledTypography>
        </Link>
    ) 
}

export default NavbarItem;