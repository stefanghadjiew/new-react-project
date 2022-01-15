import React from 'react'
import StyledButton from './styles'

const CustomButton = ({ buttonText, ...props }) => {
    const { style, onClick, startIcon } = props

    return (
        <StyledButton
            variant="contained"
            style={style}
            onClick={onClick}
            startIcon={startIcon}
            {...props}
        >
            {buttonText}
        </StyledButton>
    )
}

export default CustomButton
