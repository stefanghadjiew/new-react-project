import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const StyledTypography = styled(Typography)(() => ({
    color:'white',
    opacity: '0.8',
}));

const Subtitle = ({...props}) => {

    const { style,text } = props;

    return (
        <StyledTypography variant="subtitle1" style={style} {...props}>
            {text}
        </StyledTypography>
    )
}

export default Subtitle;