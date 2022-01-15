import React from 'react'
import { StyledWrapper } from './styles'

const PageWrapper = ({ children, ...props }) => {
    return <StyledWrapper {...props}>{children}</StyledWrapper>
}

export default PageWrapper
