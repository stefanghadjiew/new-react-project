import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import MenuToggle from './MenuToggle/MenuToggle.jsx';
import MediaQueries from '../../responsive/MediaQueries';
import NavbarLogic from './NavbarLogic';

const Wrapper = styled('div')(() => ({
    backgroundColor:"#2c2d3d",
    padding:"20px",
    position:'sticky',
    top:0,
    zIndex:1
}))

const InnerWrapper = styled('div')(() =>({
    maxWidth:'1110px',
    marginLeft:'auto',
    marginRight:'auto',
    display:'block'
}))

const StyledNavbarContainer = styled('div')(() => ({
    display: "flex",
    alignItems:"center",
    justifyContent:"space-between",
}));

const StyledLogo = styled('div')(() =>({
    display: "flex",
    width: '150px',
    marginLeft:'0px'
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
        <Wrapper>
            <InnerWrapper>
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
            </InnerWrapper>
        </Wrapper>
    )
}

export default Navbar;