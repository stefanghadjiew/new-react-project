import React from 'react';
import { styled } from '@mui/material/styles';

const StyledWrapper = styled('div')(({theme}) => ({
    padding:"40px 30px 60px",
    backgroundColor:"#2c2d3d",
}));

const PageWrapper = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default PageWrapper;