import React from 'react'
import StyledTextField from './styles'


const CustomInput = (props) => {
    const { variant } = props
    
    return (
        <StyledTextField
            size="small"
            variant={variant ? variant : 'standard'}
            {...props}
        />
    )
}

export default CustomInput
