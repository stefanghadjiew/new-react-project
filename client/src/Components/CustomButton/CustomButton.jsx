import React from 'react'
import StyledButton from './styles'

const CustomButton = React.forwardRef(({ buttonText, ...props }) => {
    const { style, onClick, startIcon, ref} = props
   
    return (
        <StyledButton
            ref={ref}
            variant="contained"
            style={style}
            onClick={onClick}
            startIcon={startIcon}
            {...props}
        >
            {buttonText}
        </StyledButton>
    )
})

export default CustomButton
