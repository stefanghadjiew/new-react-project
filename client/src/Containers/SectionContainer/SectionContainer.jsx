import React from 'react'
import { OuterContainer, InnerContainer } from './styles'

const SectionWrapper = ({ children, ...props }) => {
    return (
        <OuterContainer {...props}>
            <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
    )
}

export default SectionWrapper
