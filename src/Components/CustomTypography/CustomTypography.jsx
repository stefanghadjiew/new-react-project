import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
/* import { useTheme } from '@mui/material/styles'; */


const StyledTypography = styled(Typography)(() => ({
    color: 'white',
    opacity: '0.8',
}));

const CustomTypography = ({children, ...props}) => {
    
    return (
        <StyledTypography {...props}>
            {children}
        </StyledTypography>
    )
}

export default CustomTypography;