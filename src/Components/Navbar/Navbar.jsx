import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import MenuToggle from './MenuToggle/MenuToggle.jsx';
import MediaQueries from '../../responsive/MediaQueries';
import NavbarLogic from './NavbarLogic';

const StyledNavbarContainer = styled('div')(({theme}) => ({
    display: "flex",
    alignItems:"center",
    padding:"25px 100px",
    backgroundColor:"#2c2d3d",
    justifyContent:"space-between",
    position:'sticky',
    top:0,
    zIndex:1,
    [theme.breakpoints.down(900)] : {
        padding: '25px 50px 25px 80px'
    },
    [theme.breakpoints.down(600)] : {
        padding:'25px'
    }
}));

const StyledLogo = styled('div')(() =>({
    display: "flex",
    width: '150px'
}))

const StyledNavbarItemsContainer = styled('div')(() =>({
    display:"flex",
    justifyContent:"flex-end",
    color:"white",
    marginRight:'60px',
    '& h6' : {
        padding: '5px 20px'
    }
}))


const Navbar = () => {
    
    const { isTablet } = MediaQueries();
    const { toggle,navbarItems,renderNavbarItems } = NavbarLogic();
        

    return (
        <StyledNavbarContainer>
            <StyledLogo>
                <MonochromePhotosIcon style={{color:"white"}} fontSize="large"/>
                <Typography variant="h6" style={{color:"white",letterSpacing:'1px',marginLeft:'5px'}}>photoverse</Typography>
            </StyledLogo>
            { isTablet 
                ? <MenuToggle toggle={toggle} navbarItems={navbarItems}/>
                : <StyledNavbarItemsContainer>
                    {renderNavbarItems}
                </StyledNavbarItemsContainer>
            }
        </StyledNavbarContainer>
    )
}

export default Navbar;