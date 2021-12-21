import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getPhotos } from '../../api/api';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import MenuToggle from './MenuToggle/MenuToggle.jsx';
import MediaQueries from '../../responsive/MediaQueries';
import NavbarLogic from './NavbarLogic';

const StyledNavbar = styled('div')(({theme}) => ({
    display: "flex",
    alignItems:"center",
    padding:"25px 100px 25px 160px",
    width: "100vw",
    backgroundColor:"#2c2d3d",
    justifyContent:"space-between",
    [theme.breakpoints.down(600)] : {
        padding:'25px'
    }
}));

const StyledLogo = styled('div')(() =>({
    display: "flex",
}))

const StyledNavbarItemsContainer = styled('div')(() =>({
    display:"flex",
    justifyContent:"space-evenly",
    color:"white",
    marginRight:'60px',
}))


const Navbar = () => {
    
    const { isTablet } = MediaQueries();
    const { toggle,navbarItems,renderNavbarItems } = NavbarLogic();
        

    return (
        <StyledNavbar>
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
        </StyledNavbar>
    )
}

export default Navbar;