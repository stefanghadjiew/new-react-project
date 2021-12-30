import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const StyledTypography = styled(Typography)(() => ({
    color:'white',
    opacity: '0.8',
    fontSize:'1.125rem',
}));

const H6 = ({...props}) => {

    const { style,text } = props

    return (
        <StyledTypography variant="h6" style={style} {...props}>
            {text}
        </StyledTypography>
    )
}

export default H6;