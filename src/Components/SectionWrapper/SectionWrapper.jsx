import React from 'react';
import { styled } from '@mui/material/styles';

const OuterWrapper = styled('div')(() =>({
    marginTop:'10rem',
}));

const InnerWrapper = styled('div')(() =>({
    maxWidth:'1110px',
    display:"block",
    marginLeft:'auto',
    marginRight:'auto'
}))


const SectionWrapper = ({children, ...props}) => {

    return (
        <OuterWrapper {...props}>
            <InnerWrapper>
                {children}
            </InnerWrapper>
        </OuterWrapper>
    )
}

export default SectionWrapper;