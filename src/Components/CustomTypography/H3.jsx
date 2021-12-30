import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import MediaQueries from '../../responsive/MediaQueries';

const StyledTypography = styled(Typography)(() => ({
    color:'white',
    opacity: '0.8',
    fontWeight:'600',
    marginBottom:'30px'
}));

const H3 = ({...props}) => {
    const { isMobile } = MediaQueries();
    const { style, text } = props
    return (
        <StyledTypography variant={isMobile ? "h4" : "h3"} style={style} {...props}>
            {text}
        </StyledTypography>
    )
}

export default H3;