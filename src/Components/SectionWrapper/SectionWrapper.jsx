import React from 'react'
import { OuterWrapper, InnerWrapper } from './styles'

const SectionWrapper = ({ children, ...props }) => {
    return (
        <OuterWrapper {...props}>
            <InnerWrapper>{children}</InnerWrapper>
        </OuterWrapper>
    )
}

export default SectionWrapper
