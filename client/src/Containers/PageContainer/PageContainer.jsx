import React from 'react'
import { StyledContainer } from './styles'

const PageContainer = ({ children, ...props }) => {
    return <StyledContainer {...props}>{children}</StyledContainer>
}

export default PageContainer
