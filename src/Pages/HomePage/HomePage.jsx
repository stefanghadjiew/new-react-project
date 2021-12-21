import React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const StyledPageWrapper = styled('div')(({theme}) =>({
    backgroundColor: '#2c2d3d',
    width: '100vw',
    padding: '25px 100px 25px 160px',
    [theme.breakpoints.down('600')] : {
        padding:'25px'
    }
}));

const StyledHeading = styled(Typography)(() =>({
    color: 'white',
    opacity: '0.8',
    marginTop:'80px',
    fontWeight:'600',
}));

const StyledSubheading =styled(Typography)(() =>({
    fontSize: '16px !important',
    marginTop:'30px !important',
    color:'white',
    opacity: '0.8',
    letterSpacing:'1px'
}));

const StyledButton = styled(Button)(() => ({
    marginTop:'30px',
    color:'white',
    textTransform:'none',
    padding:'10px 40px',
    borderRadius:'10px',
    fontSize:'18px',
    backgroundColor:'#687ded',
    opacity: '0.8',
    '&:hover': {
        textShadow: '0px 3px 3px black',
        backgroundColor:'#687ded',
        transition: 'all .3s ease',
        opacity: '0.9'
    }
}));


const HomePage = () => {

    return (
        <StyledPageWrapper>
            <StyledHeading variant='h3'>
                Welcome to where<br/>all photos live
            </StyledHeading>
            <StyledSubheading variant='h4'>
                Manage , upload , browse and rate all kinds of amazing photos<br/> and become a part of our family!
            </StyledSubheading>
            <StyledButton size="large" variant="contained">Get started</StyledButton>
        </StyledPageWrapper>
   )
}

export default HomePage;