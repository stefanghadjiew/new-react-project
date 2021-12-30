import React from 'react';
import { styled } from '@mui/material/styles';

const StyledWrapper = styled('div')(({theme}) => ({
    padding:"25px 100px",
    backgroundColor:"#2c2d3d",
    [theme.breakpoints.down(900)] : {
        padding: '25px 50px 25px 80px'
    },
    [theme.breakpoints.down(600)] : {
        padding:'25px'
    }
}));

const PageWrapper = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default PageWrapper;