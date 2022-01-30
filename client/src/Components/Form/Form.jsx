import React from 'react'
import { StyledForm } from './styles'

const Form = ({ children, ...props }) => {
    return (
        <StyledForm component="form" autoComplete="off" {...props}>
            {children}
        </StyledForm>
    )
}

export default Form
