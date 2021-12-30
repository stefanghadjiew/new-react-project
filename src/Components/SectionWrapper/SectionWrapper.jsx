import React from 'react';
import { styled } from '@mui/material/styles';

const StyledSection = styled('div')(() =>({
    marginTop:'10rem'
}));


const SectionWrapper = ({children, ...props}) => {

    return (
        <StyledSection {...props}>
            {children}
        </StyledSection>
    )
}

export default SectionWrapper;